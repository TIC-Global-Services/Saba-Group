import { Clock, Timer, User } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Main Component
const ServicesSection = () => {
  // Services data array
  const services = [
    {
      id: 1,
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 Technical Support",
      description:
        "We provide real-time, on-site assistance to resolve issues quickly and ensure uninterrupted operations. From product trials to customized adhesive systems, our experts are always within reach.",
    },
    {
      id: 2,
      icon: <Timer className="w-8 h-8 text-white" />,
      title: "Fast & Reliable Delivery",
      description:
        "Our strong logistics and warehouse network ensures timely deliveries across India's key footwear manufacturing hubs. We understand your timelines—and deliver accordingly.",
    },
    {
      id: 3,
      icon: <User className="w-8 h-8 text-white" />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize long-term relationships by truly understanding each customer's needs, tailoring solutions, and consistently exceeding expectations.",
    },
  ];

  return (
    <div
      className="min-h-screen px-[74px] py-[123px] my-[140px]"
      style={{ backgroundColor: "#F1F5EB" }}
    >
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-5xl font-bold leading-tight max-w-2xl">
          Always Here{" "}
          <span style={{ color: "#10562C" }}>for Your Leather Needs</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
