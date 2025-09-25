import { useRef, useEffect } from "react";
import gsap from "gsap";
import { PollutionCert,SunBluesCert } from "@/assets/Index";
import Image from "next/image";


const CertificationSlider = () => {
    const certifications = [
        { id: 1, title: "SUNBLUES Certificate", image: PollutionCert },
        { id: 2, title: "SUNBLUES Pollution", image: SunBluesCert },
        { id: 3, title: "ISO 9001 Certificate", image: PollutionCert },
        { id: 4, title: "Environmental Certificate", image: SunBluesCert },
    ];

    const visibleCount = 2;
    const imageWidth = 267.12890625;
    const imageHeight = 422.96783447265625;
    const gap = 6;

    // Clone last and first items for infinite effect
    const extendedCerts = [
        ...certifications.slice(-visibleCount),
        ...certifications,
        ...certifications.slice(0, visibleCount),
    ];

    const sliderRef = useRef<HTMLDivElement>(null);
    const currentIndexRef = useRef(visibleCount);

    // Set initial position
    useEffect(() => {
        if (sliderRef.current) {
            gsap.set(sliderRef.current, {
                x: -currentIndexRef.current * (imageWidth + gap),
            });
        }
    }, []);

    const isAnimatingRef = useRef(false);

    const slideTo = (index: number) => {
        if (!sliderRef.current || isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        gsap.to(sliderRef.current, {
            x: -index * (imageWidth + gap),
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                // Infinite effect: jump without animation if at edge
                if (index >= extendedCerts.length - visibleCount) {
                    currentIndexRef.current = visibleCount;
                    gsap.set(sliderRef.current, {
                        x: -currentIndexRef.current * (imageWidth + gap),
                    });
                } else if (index < visibleCount) {
                    currentIndexRef.current = extendedCerts.length - visibleCount * 2;
                    gsap.set(sliderRef.current, {
                        x: -currentIndexRef.current * (imageWidth + gap),
                    });
                } else {
                    currentIndexRef.current = index;
                }
                isAnimatingRef.current = false;
            },
        });
        // Only update index if not jumping
        if (index >= visibleCount && index < extendedCerts.length - visibleCount) {
            currentIndexRef.current = index;
        }
    };

    const nextSlide = () => slideTo(currentIndexRef.current + 1);
    const prevSlide = () => slideTo(currentIndexRef.current - 1);

    return (
        <div className="min-h-screen bg-white py-20 px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">
                    Our <span style={{ color: "#10562C" }}>Certification</span>
                </h1>
                <p className="text-gray-600 text-lg">
                    Empowering Progress through Infrastructure Manufacturing
                </p>
            </div>
            <div className="relative max-w-[1200px] mx-auto flex flex-row justify-center gap-[74px] items-center">
                <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-16 h-16 z-10 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
                    style={{ minWidth: "4rem", minHeight: "4rem" }}
                >
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path
                            d="M13.3333 22.0671L8 16.7337M8 16.7337L13.3333 11.4004M8 16.7337H24"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div
                    className="overflow-hidden"
                    style={{ width: `${visibleCount * imageWidth + gap}px` }}
                >
                    <div
                        className="flex"
                        ref={sliderRef}
                        style={{
                            gap: `${gap}px`,
                        }}
                    >
                        {extendedCerts.map((cert, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 text-center"
                                style={{
                                    width: `${imageWidth}px`,
                                }}
                            >
                                <div
                                    className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden"
                                    style={{
                                        width: `${imageWidth}px`,
                                        height: `${imageHeight}px`,
                                    }}
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1,
                                            transform: "rotate(0deg)",
                                        }}
                                        width={imageWidth}
                                        height={imageHeight}
                                    />
                                </div>
                                <p className="leading-[37px] font-[400] mt-1.5">{cert.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-16 h-16 z-10 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-200"
                    style={{ minWidth: "4rem", minHeight: "4rem" }}
                >
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path
                            d="M18.6667 22.0671L24 16.7337M24 16.7337L18.6667 11.4004M24 16.7337H8"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CertificationSlider;
