import MainSection from "@/components/MainSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import QualityManagement from "@/components/QualityManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import ProductGallery from "@/components/ProductGallery";
import React from "react";
import OurCustomers from "@/components/OurCustomers";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <VisionMissionValues />
            <QualityManagement />
            <ProductGallery />
            <WhyChooseUs />
            <ContactUs />
            <OurCustomers />
        </>
    );
};

export default HomePage;
