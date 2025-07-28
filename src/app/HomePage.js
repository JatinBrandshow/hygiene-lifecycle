import ContactUs from "@/components/ContactUs";
import MainSection from "@/components/MainSection";
import ProductGallery from "@/components/ProductGallery";
import QualityManagement from "@/components/QualityManagement";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <QualityManagement />
            <ProductGallery />
            <WhyChooseUs />
            <ContactUs /> 
        </>
    );
};

export default HomePage;
