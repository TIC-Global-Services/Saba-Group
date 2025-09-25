// Card Component
type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="
        bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md
        hover:border-1 border-[#83CD20] hover:shadow-lg cursor-pointer
      "
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: '#10562C' }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-semibold mb-4"
        style={{ color: '#10562C' }}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;