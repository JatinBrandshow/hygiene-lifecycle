"use client";

import React, { useState } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiry: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.inquiry.trim()) newErrors.inquiry = "Please select an option";
        if (!form.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise((res) => setTimeout(res, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setForm({
                name: "",
                email: "",
                phone: "",
                subject: "",
                inquiry: "",
                message: "",
            });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-2xl border">
                <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">We’ve received your message. Our team will reach out soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden my-8">
            {/* Left Image Section */}
            <div className="md:w-1/2 w-full h-64 md:h-auto">
                <img
                    src="/img/why-choose-us.webp" // replace with your actual image path
                    alt="Contact Illustration"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right Form Section */}
            <div className="md:w-1/2 w-full p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                    <p className="text-gray-600">Let us know how we can help you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

                    <select
                        name="inquiry"
                        value={form.inquiry}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.inquiry ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    >
                        <option value="">Inquire related to</option>
                        <option value="product">Product</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.inquiry && <p className="text-red-500 text-sm">{errors.inquiry}</p>}

                    <textarea
                        name="message"
                        placeholder="Write your message here..."
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                            errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                        }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 animate-spin" size={16} />
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
