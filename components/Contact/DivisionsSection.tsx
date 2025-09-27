import React from 'react';

const DivisionsSection = () => {
  const divisions = [
    {
      id: 1,
      name: "Leather Chemical Division",
      email: "info@sabagroup.in",
       image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Footwear Chemical Division",
      email: "bhaskar@sabagroup.in",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Health Care",
      email: "info@herbale.co.in",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Infra division",
      email: "saro@sunblues.in",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Risa Farm",
      email: "rajasekar@sabagroup.in",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className="py-16 px-4 ">
      <div 
        className="mx-auto flex flex-wrap justify-center"
        style={{
          width: '856px',
          height: '418px',
          gap: '26px',
          maxWidth: '100%'
        }}
      >
        {divisions.map((division, index) => (
          <div
            key={division.id}
            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            style={{
              width: '268px',
              height: '194px',
              borderRadius: '16px',
              borderWidth: '1px',
              padding: '24px',
              gap: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid #EAEAEA',
              boxShadow: `
                0px 0px 0px 0px rgba(0, 0, 0, 0.04),
                0px 4px 8px 0px rgba(0, 0, 0, 0.04),
                0px 14px 14px 0px rgba(0, 0, 0, 0.03),
                0px 32px 19px 0px rgba(0, 0, 0, 0.02),
                0px 57px 23px 0px rgba(0, 0, 0, 0.01),
                0px 89px 25px 0px rgba(0, 0, 0, 0)
              `
            }}
          >
            {/* Division Image */}
            <div 
              className="rounded-full bg-gray-100 mb-2 overflow-hidden flex items-center justify-center"
              style={{
                width: '80px',
                height: '80px',
                minWidth: '80px',
                minHeight: '80px',
                borderRadius: '50%'
              }}
            >
              <img
                src={division.image}
                alt={division.name}
                className="w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Division Name */}
            <h3 
              className="font-semibold text-gray-800 mb-2"
              style={{
                fontSize: '16px',
                lineHeight: '1.2',
                fontWeight: 600
              }}
            >
              {division.name}
            </h3>
            
            {/* Division Email */}
            <p 
              className="text-gray-500"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#9CA3AF'
              }}
            >
              {division.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivisionsSection;