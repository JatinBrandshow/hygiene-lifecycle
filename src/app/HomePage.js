import MainSection from "@/components/MainSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import QualityManagement from "@/components/QualityManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import ProductGallery from "@/components/ProductGallery";
import React from "react";
import OurCustomers from "@/components/OurCustomers";
import StatsSection from "@/components/StatesSection";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <VisionMissionValues />
            <QualityManagement />
            <ProductGallery />
            <StatsSection />
            <WhyChooseUs />
            <OurCustomers />
            {/* <ContactUs /> */}
        </>
    );
};

export default HomePage;
