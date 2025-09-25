import Image, { StaticImageData } from "next/image";
import React from "react";

type PartnerCardProps = {
  heroImage: StaticImageData;
  title: string;
  description: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  heroImage,
  title,
  description,
}) => {
  return (
    <div className="bg-white overflow-hidden mb-8">
      {/* Hero Image Section */}
      <div className="relative h-[285px] w-full">
        <Image 
          src={heroImage} 
          alt={title} 
          fill
          className="object-cover h-[285px] rounded-[10px]"
        />
      </div>

      {/* Content Section */}
      <div className="mt-6 w-[72%]">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          {title}
        </h1>
        <p className="text-description text-base leading-4 tracking-[2%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;