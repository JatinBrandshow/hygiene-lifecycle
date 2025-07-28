import MainSection from "@/components/MainSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import QualityManagement from "@/components/QualityManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import ProductGallery from "@/components/ProductGallery";
import React from "react";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <VisionMissionValues />
            <QualityManagement />
            <ProductGallery />
            <WhyChooseUs />
            <ContactUs /> 
        </>
    );
};

export default HomePage;
