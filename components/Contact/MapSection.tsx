import React from 'react';

const MapSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">


        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.234567890123!2d79.13406!3d12.91965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0x2b2f6b5c5e5c5e5c!2sSathuvachari%2C%20Vellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vellore Locations Map"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default MapSection;