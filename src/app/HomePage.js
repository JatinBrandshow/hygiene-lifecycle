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
import HygieneIntroduction from "@/components/HygieneIntroduction";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <HygieneIntroduction />
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
