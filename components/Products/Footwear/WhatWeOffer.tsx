import { WhatWeOfferImg } from '@/assets/Index'
import ProjectPointers from '@/components/Reusable/ProjectPointers'
import React from 'react'


const WhatWeOffer = () => {
    return (
        <ProjectPointers
            sectionTitle="What We Offer"
            sectionDesc="Explore our specialized solutions for footwear manufacturing."
            left={[
                {
                    heading: "Specialty Coatings & Finishes",
                    desc: "Nano coatings | Release agents | Pigments | Surface primers"
                },
                {
                    heading: "Adhesive Dispensing Equipment",
                    desc: "High-precision machinery for efficient adhesive application, exclusively from Protima (Taiwan)"
                }
            ]}
            right={[
                {
                    heading: "Adhesives",
                    desc: "Water-based | Solvent-based | Hotmelts (PSA & PUR-HMA) | Lamination adhesives | Non-sewing applications"
                },
                {
                    heading: "Footwear Accessories",
                    desc: "Strobels, insoles, brushes, and more"
                }
            ]}
            image={{
                src: WhatWeOfferImg,
                alt: "Brown leather shoe with laces - footwear manufacturing"
            }}
        />
    )
}

export default WhatWeOffer