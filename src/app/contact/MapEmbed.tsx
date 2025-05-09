'use client';

import React from 'react';

const MapEmbed = () => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8181097115777!2d36.785736500000005!3d-1.2638096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17ce4f116541%3A0x737f497b1dc60662!2sW.%20Giertsen%20Energy%20Solutions%20Ltd!5e0!3m2!1sen!2sus!4v1712592215479!5m2!1sen!2sus"
        className="absolute top-0 left-0 w-full h-full border-0"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="W. Giertsen Energy Solutions Office Locations"
        aria-label="Map showing W. Giertsen Energy Solutions office locations"
      />
    </div>
  );
};

export default MapEmbed; 