const MajorClientsSection = () => {
  // Client data array
  const clients = [
    // Row 1
    "URC Construction Pvt Ltd.",
    "RDC Concrete (1) Pvt Ltd.",
    "Annai Infra Developers Pvt Ltd.",
    "SPK & Co.",
    
    // Row 2
    "Concrete Products & Construction Co.",
    "Shanthosh Constructions",
    "ABL Constructions",
    
    // Row 3
    "Apex Civil Engineering",
    "Teemage Builders Pvt Ltd.",
    "Powerconz",
    "S. Nagarajan"
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      {/* Header */}
      <div className="text-center mb-[87px]">
        <h1 className="text-[44px] font-bold tracking-[2%] text-black mb-2">
          Major Clients
        </h1>
      </div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1 - 4 cards */}
        <div 
          className="grid grid-cols-4 mb-2"
          style={{ gap: '10px' }}
        >
          {clients.slice(0, 4).map((client, index) => (
            <div
              key={index}
              className="bg-white text-black text-center justify-center font-medium text-lg flex items-center"
              style={{
                borderRadius: '11px',
                border: '1px solid #10562C',
                padding: '24px',
                minHeight: '80px'
              }}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Row 2 - 3 cards */}
        <div 
          className="grid grid-cols-3 mb-2"
          style={{ gap: '10px' }}
        >
          {clients.slice(4, 7).map((client, index) => (
            <div
              key={index + 4}
              className="bg-white text-black  justify-center font-medium text-lg flex items-center"
              style={{
                borderRadius: '11px',
                border: '1px solid #10562C',
                padding: '24px',
                minHeight: '80px'
              }}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Row 3 - 4 cards */}
        <div 
          className="grid grid-cols-4"
          style={{ gap: '10px' }}
        >
          {clients.slice(7, 11).map((client, index) => (
            <div
              key={index + 7}
              className="bg-white text-black  justify-center font-medium text-lg flex items-center"
              style={{
                borderRadius: '11px',
                border: '1px solid #10562C',
                padding: '24px',
                minHeight: '80px'
              }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorClientsSection;