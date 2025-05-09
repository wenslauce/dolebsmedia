import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, isToday, isWeekend } from 'date-fns';

interface DateTimePickerProps {
  selectedDate: Date | null | undefined;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  excludeTimes?: Date[];
  excludeDays?: number[]; // 0 = Sunday, 6 = Saturday
  startTime?: string; // e.g. "09:00"
  endTime?: string;   // e.g. "17:00"
  timeInterval?: number; // in minutes
  label?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  onChange,
  minDate = new Date(),
  maxDate = addMonths(new Date(), 3),
  excludeTimes = [],
  excludeDays = [0, 6], // Default exclude weekends
  startTime = "09:00",
  endTime = "16:00",
  timeInterval = 30,
  label = "Select a date and time"
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [timeOptions, setTimeOptions] = useState<Date[]>([]);
  const [selectedDateWithoutTime, setSelectedDateWithoutTime] = useState<Date | null>(selectedDate || null);
  
  // Close pickers when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.date-picker-container') && !target.closest('.time-picker-container')) {
        setIsCalendarOpen(false);
        setIsTimePickerOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Update time options when date changes
  useEffect(() => {
    if (selectedDateWithoutTime) {
      setTimeOptions(getTimeOptions(selectedDateWithoutTime));
    }
  }, [selectedDateWithoutTime, startTime, endTime, timeInterval]);

  // Create time range
  const getTimeOptions = (date: Date) => {
    const times: Date[] = [];
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    const start = new Date(date);
    start.setHours(startHour, startMinute, 0, 0);
    
    const end = new Date(date);
    end.setHours(endHour, endMinute, 0, 0);
    
    let current = new Date(start);
    
    while (current <= end) {
      times.push(new Date(current));
      current.setMinutes(current.getMinutes() + timeInterval);
    }
    
    return times;
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return !excludeDays.includes(day);
  };
  
  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDateWithoutTime(date);
      setIsCalendarOpen(false);
      // Open time picker after date is selected
      setTimeout(() => setIsTimePickerOpen(true), 300);
    }
  };
  
  const handleTimeSelect = (time: Date) => {
    if (selectedDateWithoutTime && time) {
      const newDate = new Date(selectedDateWithoutTime);
      newDate.setHours(time.getHours(), time.getMinutes(), 0, 0);
      onChange(newDate);
      setIsTimePickerOpen(false);
    }
  };
  
  // Custom Day component for DatePicker
  const renderDayContents = (dayOfMonth: number, date?: Date) => {
    if (!date) return <span>{dayOfMonth}</span>;
    
    return (
      <div className={`
        w-8 h-8 flex items-center justify-center rounded-full
        ${isToday(date) ? 'border border-primary' : ''}
        ${isWeekend(date) && !excludeDays.includes(date.getDay()) ? 'bg-primary/10' : ''}
      `}>
        {dayOfMonth}
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {label && (
        <h3 className="text-base font-medium text-gray-700 flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-primary" />
          {label}
        </h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Picker */}
        <div className="relative date-picker-container">
          <div 
            onClick={() => {
              setIsCalendarOpen(!isCalendarOpen);
              setIsTimePickerOpen(false);
            }}
            className="relative w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition-all cursor-pointer hover:bg-white flex items-center group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
              <CalendarIcon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Date</p>
              <p className={selectedDateWithoutTime ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                {selectedDateWithoutTime ? format(selectedDateWithoutTime, 'EEEE, MMMM d, yyyy') : 'Select a date'}
              </p>
            </div>
            <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${isCalendarOpen ? 'rotate-90' : ''}`} />
          </div>
          
          <AnimatePresence>
            {isCalendarOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute z-30 mt-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-3 w-[320px] left-1/2 -translate-x-1/2"
              >
                <DatePicker
                  selected={selectedDateWithoutTime}
                  onChange={handleDateSelect}
                  inline
                  minDate={minDate}
                  maxDate={maxDate}
                  filterDate={isWeekday}
                  renderDayContents={renderDayContents}
                  calendarClassName="bg-transparent"
                  monthClassName={() => "font-medium"}
                  weekDayClassName={() => "text-gray-500"}
                  dayClassName={date => 
                    date && selectedDateWithoutTime && 
                    date.getDate() === selectedDateWithoutTime?.getDate() &&
                    date.getMonth() === selectedDateWithoutTime?.getMonth() &&
                    date.getFullYear() === selectedDateWithoutTime?.getFullYear()
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "hover:bg-gray-100"
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Time Picker */}
        <div className="relative time-picker-container">
          <div 
            onClick={() => {
              if (selectedDateWithoutTime) {
                setIsTimePickerOpen(!isTimePickerOpen);
                setIsCalendarOpen(false);
              }
            }}
            className={`relative w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition-all cursor-pointer hover:bg-white flex items-center group ${!selectedDateWithoutTime ? 'opacity-80 cursor-not-allowed' : ''}`}
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Time</p>
              <p className={selectedDate ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                {selectedDate ? format(selectedDate, 'h:mm aa') : 'Select a time'}
              </p>
            </div>
            <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${isTimePickerOpen ? 'rotate-90' : ''}`} />
          </div>
          
          <AnimatePresence>
            {isTimePickerOpen && selectedDateWithoutTime && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute z-30 mt-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-3 w-full max-h-[280px] overflow-y-auto right-0"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeOptions.map((time, index) => {
                    const isSelected = selectedDate && 
                      time.getHours() === selectedDate.getHours() && 
                      time.getMinutes() === selectedDate.getMinutes();
                    
                    return (
                      <div 
                        key={index}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          px-3 py-2 rounded-lg text-center cursor-pointer transition-all
                          ${isSelected 
                            ? 'bg-primary text-white font-medium' 
                            : 'hover:bg-gray-100 text-gray-700'}
                        `}
                      >
                        {format(time, 'h:mm aa')}
                      </div>
                    );
                  })}
                </div>
                
                {timeOptions.length === 0 && (
                  <p className="text-center text-gray-500 py-4">
                    No available time slots for this date.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 backdrop-blur-sm p-4 rounded-xl border border-primary/20 mt-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Your appointment</p>
              <p className="font-medium text-secondary">
                {format(selectedDate, 'EEEE, MMMM d')} at {format(selectedDate, 'h:mm aa')}
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      <p className="text-xs text-gray-500 italic">
        Consultations are available Monday to Friday, 9:00 AM - 4:00 PM East African Time.
      </p>
    </div>
  );
};

export default DateTimePicker; 