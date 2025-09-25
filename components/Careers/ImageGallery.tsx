import React from "react";
import {
  ImageGallery1,
  ImageGallery2,
  ImageGallery3,
  ImageGallery4,
  ImageGallery5,
  ImageGallery6,
} from "@/assets/Index";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    ImageGallery1,
    ImageGallery2,
    ImageGallery3,
    ImageGallery4,
    ImageGallery5,
    ImageGallery6,
  ];

  return (
    <div className="w-full overflow-hidden py-10 md:py-20">
      <div className="flex animate-scroll-slow gap-3">
        {[...images, ...images].map((image, idx) => (
          <div
            key={idx}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-sm flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Gallery Image ${idx + 1}`}
              width={300}
              height={400}
              className="w-full aspect-[3/4] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
