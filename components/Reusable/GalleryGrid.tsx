import Image, { StaticImageData } from "next/image";
import React from "react";

type GalleryGridProps = {
  col1row1: StaticImageData;
  col1row2: StaticImageData;
  col1row3: StaticImageData;
  col2row1: StaticImageData;
  col2row3: StaticImageData;
  col3row1: StaticImageData;
  col4row1: StaticImageData;
  col4row2: StaticImageData;
  centerImg: StaticImageData;
  title:string
};

const GalleryGrid: React.FC<GalleryGridProps> = ({
  col1row1,
  col1row2,
  col1row3,
  col2row1,
  col2row3,
  col3row1,
  col4row1,
  col4row2,
  centerImg,
  title
}) => {
  return (
    <div className="px-12 py-[140px]">
      <h1 className="text-[44px] font-bold leading-[47px] text-center">
        <span className="text-secondary">Gallery</span> of {title}
      </h1>
      <div className="grid grid-cols-4 gap-3 mt-12">
        {/* Row 1 - Taller row for col1row1 */}
        <div
          className="relative w-full rounded-2xl overflow-hidden "
          style={{ height: "479px" }}
        >
          <Image src={col1row1} alt="Col1Row1" fill className="object-cover" />
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "214px" }}
        >
          <Image src={col2row1} alt="Col2Row1" fill className="object-cover" />
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "214px" }}
        >
          <Image src={col3row1} alt="Col4Row1" fill className="object-cover" />
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "465px" }}
        >
          <Image src={col4row1} alt="Col4Row1" fill className="object-cover" />
        </div>

        {/* Row 2 */}
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "214px" }}
        >
          <Image src={col1row2} alt="Col1Row2" fill className="object-cover" />
        </div>
        <div
          className="relative w-full col-span-2 row-span-2 rounded-2xl overflow-hidden md:-mt-[56%] lg:-mt-[39%]"
          style={{ height: "479px" }}
        >
          <Image
            src={centerImg}
            alt="CenterImg"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden -mt-[4%]"
          style={{ height: "459px" }}
        >
          <Image src={col4row2} alt="Col4Row2" fill className="object-cover" />
        </div>

        {/* Row 3 */}
        <div
          className="relative w-full col-span-2 rounded-2xl overflow-hidden -mt-[52%] lg:-mt-[36%]"
          style={{ height: "214px" }}
        >
          <Image src={col1row3} alt="Col1Row3" fill className="object-cover" />
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden md:-mt-[106%] lg:-mt-[73%]"
          style={{ height: "214px" }}
        >
          <Image src={col2row3} alt="Col2Row3" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;