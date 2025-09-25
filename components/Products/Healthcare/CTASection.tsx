import CTAbg from "@/assets/Products/HealthCare/CTAbg.png";

const CTASection = () => {
    return (
        <div
            className="relative mb-[68px] flex items-center justify-center overflow-hidden mx-auto bg-cover bg-center bg-no-repeat"
            style={{
                width: '1320px',
                height: '411px',
                borderWidth: '1.12px',
                borderRadius: '26.85px',
                backgroundImage: `url(${CTAbg.src})`,
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    borderRadius: '26.85px',
                    background: 'linear-gradient(108.18deg, #FFFBE0 0%, #FEFBEA 100%)',
                    opacity: 0.3,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
                <h1
                    className="text-secondary mb-8 font-bold text-center"
                    style={{
                        fontSize: '44px',
                        lineHeight: '100%',
                        letterSpacing: '-3%',
                    }}
                >
                    Taking You to a Healthier Future
                </h1>
                <p
                    className="text-black mb-12 max-w-3xl mx-auto font-normal text-center"
                    style={{
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '1px',
                    }}
                >
                    We're taking you to our healthcare platform, where you can access trusted
                    medical information, book appointments, and explore a range of healthcare
                    services tailored to your needs.
                </p>
                <button
                    className="bg-secondary text-white font-medium transition-colors duration-200"
                    style={{
                        width: '115.97px',
                        height: '35.8px',
                        borderRadius: '8.95px',
                        fontSize: '14px',
                        boxShadow: `
                            0px 0px 0px 1.12px rgba(18, 43, 105, 0.08),
                            0px 1.12px 2.24px 0px rgba(18, 43, 105, 0.08),
                            0px 2.24px 6.71px 0px rgba(18, 43, 105, 0.04)
                        `,
                    }}
                    onClick={() => {
                        console.log('Visit Site clicked');
                    }}
                >
                    Visit Site
                </button>
            </div>
        </div>
    );
};

export default CTASection;