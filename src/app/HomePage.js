import MainSection from "@/components/MainSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import QualityManagement from "@/components/QualityManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import ProductGallery from "@/components/ProductGallery";
import React from "react";
import OurCustomers from "@/components/OurCustomers";
import StatsSection from "@/components/StatesSection";
import OurProductRange from "@/components/OurProductRange";
import HygineIntroduction from "@/components/HygineIntroduction";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <HygineIntroduction />
            <VisionMissionValues />
            <QualityManagement />
            <ProductGallery />
            <OurProductRange />
            <StatsSection />
            <WhyChooseUs />
            <OurCustomers />
            <ContactUs />
        </>
    );
};

export default HomePage;
