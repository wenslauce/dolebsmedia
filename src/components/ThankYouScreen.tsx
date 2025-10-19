"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ThankYouScreenProps {
  formData: any
}

export default function ThankYouScreen({ formData }: ThankYouScreenProps) {
  // Format the selected solutions for display
  const solutionLabels = {
    residential: "Residential Home Solar",
    commercial: "Commercial Business Solar",
    agricultural: "Agricultural Solar",
    industrial: "Industrial Solar Installation",
    backup: "Solar Backup Power",
    guidance: "Expert Guidance",
    unsure: "Expert Guidance",
  }

  const selectedSolutions = formData.solutionType
    ? Array.isArray(formData.solutionType)
      ? formData.solutionType
          .map((type: string) => solutionLabels[type as keyof typeof solutionLabels] || type)
          .join(", ")
      : solutionLabels[formData.solutionType as keyof typeof solutionLabels] || formData.solutionType
    : ""

  // Generate Google Calendar link if meeting is scheduled
  const [calendarLink, setCalendarLink] = useState("")

  useEffect(() => {
    if (formData.scheduleConsultation && formData.meetingDate) {
      // Parse meeting date and time
      const meetingDate = new Date(formData.meetingDate)
      
      // Try different time formats
      const timeMatch = formData.meetingTime.match(/(\d+):(\d+)(?:\s*(AM|PM))?/)
      
      if (timeMatch) {
        let hours = parseInt(timeMatch[1], 10)
        const minutes = parseInt(timeMatch[2], 10)
        const period = timeMatch[3]
        
        // Handle 12-hour format if period is provided
        if (period === "PM" && hours !== 12) {
          hours += 12
        } else if (period === "AM" && hours === 12) {
          hours = 0
        }
        
        // Set hours and minutes
        meetingDate.setHours(hours, minutes, 0, 0)

        // Create end time (1 hour after start)
        const endTime = new Date(meetingDate)
        endTime.setHours(endTime.getHours() + 1)

        // Generate Google Calendar link
        const meetingType = formData.meetingType === "phone" ? "Phone Call" : "In-person Meeting"
        const title = `Solar Consultation - ${meetingType} with Dolebs Media`
        const description = `
          Solar Consultation regarding: ${selectedSolutions}
          
          This meeting was scheduled through the Solar Solution Finder survey.
        `.trim()

        const location =
          formData.meetingType === "phone"
            ? `Phone: ${formData.phone}`
            : "90 Church Rd, Nairobi, Kenya"

        // Format dates for Google Calendar
        const formatDate = (date: Date) => {
          return date.toISOString().replace(/-|:|\.\d+/g, "")
        }

        const formattedStartTime = formatDate(meetingDate)
        const formattedEndTime = formatDate(endTime)

        // Encode parameters for URL
        const params = new URLSearchParams({
          action: "TEMPLATE",
          text: title,
          details: description,
          location: location,
          dates: `${formattedStartTime}/${formattedEndTime}`,
        })

        setCalendarLink(`https://calendar.google.com/calendar/render?${params.toString()}`)
      }
    }
  }, [formData, selectedSolutions])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Card className="shadow-lg border-green-100">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
            className="mx-auto bg-green-100 text-green-600 rounded-full p-3 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-12 sm:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <CardTitle className="text-xl sm:text-2xl text-[#04743C]">Thank You, {formData.name}!</CardTitle>
          <CardDescription className="text-base sm:text-lg">
            Your solar solution finder survey has been submitted successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-sm sm:text-base">
          One of our solar energy experts will review your information and get back to you within one business day, Monday to Friday, 9am - 5pm, EAT.
          </p>

          <div className="bg-green-50 p-3 sm:p-4 rounded-lg mb-6 text-left">
            <h3 className="font-medium text-[#04743C] mb-2 text-sm sm:text-base">Your Selected Solutions:</h3>
            <p className="mb-2 text-sm sm:text-base">{selectedSolutions}</p>

            {formData.scheduleConsultation && formData.meetingDate && (
              <div className="mt-3 sm:mt-4 mb-2">
                <h3 className="font-medium text-[#04743C] mb-1 sm:mb-2 text-sm sm:text-base">
                  Your Scheduled Consultation:
                </h3>
                <p className="text-sm sm:text-base">
                  {format(new Date(formData.meetingDate), "PPPP")} at {formData.meetingTime} (EAT)
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {formData.meetingType === "phone" ? "Phone Call" : "In-person at our office"}
                </p>

                {calendarLink && (
                  <div className="mt-3">
                    <a
                      href={calendarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#04743C] text-white rounded-md text-sm font-medium hover:bg-[#035c30] transition-colors"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Add to Google Calendar
                    </a>
                  </div>
                )}
              </div>
            )}

            <h3 className="font-medium text-[#04743C] mb-2 mt-3 sm:mt-4 text-sm sm:text-base">What happens next?</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-[#04743C] mr-2">1.</span>
                <span>Our team will analyze your survey responses</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04743C] mr-2">2.</span>
                <span>We'll prepare a customized solar solution proposal</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#04743C] mr-2">3.</span>
                <span>A solar consultant will contact you to discuss options</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button
            onClick={() => window.location.reload()}
            className="bg-[#04743C] hover:bg-[#035c30] text-white text-sm sm:text-base"
          >
            Start a New Survey
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
} 