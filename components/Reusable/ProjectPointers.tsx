import Image, { StaticImageData } from "next/image";
import React from "react";

type ProjectColumn = {
    heading: string;
    desc: string;
};

type ProjectPointersProps = {
    left: [ProjectColumn, ProjectColumn];
    right: [ProjectColumn, ProjectColumn];
    image: {
        src: StaticImageData;
        alt: string;
        style?: React.CSSProperties;
    };
    sectionTitle: string;
    sectionDesc: string;
};

const ProjectPointers: React.FC<ProjectPointersProps> = ({
    left,
    right,
    image,
    sectionTitle,
    sectionDesc,
}) => {
    return (
        <div className="min-h-screen bg-white py-20 px-12">
            {/* Header Section */}
            <div className="text-center mb-20">
                <h1 className="text-[44px] font-bold tracking-[2%] text-black mb-2">{sectionTitle}</h1>
                <p className=" text-xl leading-[29px] font-[400]">{sectionDesc}</p>
            </div>

            {/* Projects Layout - 3 Columns */}
            <div className="mx-auto">
                <div
                    className="flex flex-row items-center gap-[102px]"
                    style={image.style ? { height: image.style.height } : { height: "465px" }}
                >
                    {/* First Column - Two Rows */}
                    <div className="flex-1 flex flex-col justify-between py-10 h-full">
                        {/* Top Row */}
                        <div className="text-right border-b">
                            <h2 className="text-2xl font-medium text-black">{left[0].heading}</h2>
                            <p className="text-gray-700 text-base mb-2.5">{left[0].desc}</p>
                        </div>
                        {/* Bottom Row */}
                        <div className="text-right border-b">
                            <h2 className="text-2xl font-medium text-black">{left[1].heading}</h2>
                            <p className="text-gray-700 text-base mb-2.5">{left[1].desc}</p>
                        </div>
                    </div>

                    {/* Central Image */}
                    <div className="flex justify-center">
                        <div
                            className="overflow-hidden bg-gray-100 flex-shrink-0"
                            style={{
                                width: image.style?.width || "202px",
                                height: image.style?.height || "465px",
                                backgroundColor: image.style?.backgroundColor || "#E8F4FD",
                                borderRadius: image.style?.borderRadius || "71px",
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                width={typeof image.style?.width === "number" ? image.style.width : 202}
                                height={typeof image.style?.height === "number" ? image.style.height : 465}
                            />
                        </div>
                    </div>

                    {/* Third Column - Two Rows */}
                    <div className="flex-1 flex flex-col justify-between py-10 h-full">
                        {/* Top Row */}
                        <div className="text-left border-b">
                            <h2 className="text-2xl font-medium text-black">{right[0].heading}</h2>
                            <p className="text-gray-700 text-base mb-2.5">{right[0].desc}</p>
                        </div>
                        {/* Bottom Row */}
                        <div className="text-left border-b">
                            <h2 className="text-2xl font-medium text-black">{right[1].heading}</h2>
                            <p className="text-gray-700 text-base mb-2.5">{right[1].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPointers;