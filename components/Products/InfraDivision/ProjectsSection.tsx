import React from "react";
import ProjectPointers from "@/components/Reusable/ProjectPointers";
import { Projects } from "@/assets/Index";

const ProjectsSection = () => {
    return (
        <ProjectPointers
            sectionTitle="Projects"
            sectionDesc="Supporting Mega Infrastructure Projects"
            left={[
                {
                    heading: "Road Projects",
                    desc: "NHAI – NH 48 Six Lane Walaja toll Plaza to White Gate, Kanchipuram",
                },
                {
                    heading: "Constructions",
                    desc: "CMC Hospital, Storm Water Projects, VIT Deemed University Katpadi, Vellore Smart City, Precast Construction, IT Parks",
                },
            ]}
            right={[
                {
                    heading: "Runway",
                    desc: "INS – Rajali – Air force, Arakkonam",
                },
                {
                    heading: "Railway",
                    desc: "Chennai Metro Rail, Railway Ballast & Railway Track Bed Construction",
                },
            ]}
            image={{
                src: Projects,
                alt: "Construction machinery and infrastructure",
                style: {
                    width: "202px",
                    height: "465px",
                    backgroundColor: "#E8F4FD",
                    borderRadius: "71px",
                },
            }}
        />
    );
};

export default ProjectsSection;
