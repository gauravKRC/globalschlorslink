import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaCalendarAlt } from 'react-icons/fa';
import Testimonial from "@/components/Testimonial";
//import image from '@/assets/im.png';
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';


export default function Home() {
    const navigate = useNavigate();
    const [faqExpanded, setFaqExpanded] = useState<number | null>(null);

    function handleUni() {
        navigate("/universities");
    }

    function handleVisa() {
        navigate("/visa-services");
    }
    function handleServices() {
        navigate("/services");
    }

    const faqData = [
        {
            question: "How do I apply to universities through your platform?",
            answer: "You can browse our extensive list of universities, select your preferred ones, and follow our step-by-step application guide. We also offer personalized assistance to ensure your application stands out."
        },
        {
            question: "What visa services do you offer?",
            answer: "We provide comprehensive visa assistance, including documentation preparation, application submission, and interview preparation. Our experts stay updated with the latest visa regulations to ensure a smooth process."
        },
        {
            question: "Can you help with career counseling?",
            answer: "Yes, we offer career counseling to help you align your education with your career goals. Our counselors provide insights into various career paths and help you make informed decisions."
        },
        {
            question: "What is the success rate for visa applications?",
            answer: "We have a 95% success rate for visa applications. Our team's expertise and attention to detail ensure that your application has the best chance of approval."
        },
        {
            question: "How many universities do you work with?",
            answer: "We work with over 500 universities across 50+ countries, giving you a wide range of options to choose from."
        },
        {
            question: "Are your services free?",
            answer: "We offer a combination of free and paid services. While some initial consultations and resources are free, more in-depth services like personalized application assistance and visa support may incur a fee."
        }
    ];

    const toggleFaq = (index: number) => {
        setFaqExpanded(faqExpanded === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-12 relative">
            <div className="relative pt-4 ">
                {/* <img
                    src={image}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-20 rounded-lg"
                /> */}
                <section className="text-center mb-20 relative z-10">
                    <h1 className="text-5xl font-bold mb-6 text-red-700">Your Global Education Journey Starts Here</h1>
                    <p className="text-xl text-gray-600 mb-8">Expert guidance for university admissions and visa applications worldwide</p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" onClick={handleUni}>Explore Universities</Button>
                        <Button size="lg" onClick={handleVisa}>Visa Services</Button>
                    </div>
                </section>
                <section className="text-center mb-20 relative z-10">
                    <p className="text-xl text-gray-600 mb-8">Our Other Services</p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" onClick={handleServices}>Explore</Button>
                    </div>
                </section>
            </div>

            <section className="grid md:grid-cols-3 gap-8 mb-20">
                <Card>
                    <CardHeader>
                        <CardTitle>University Admissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Get personalized guidance for applications to top universities worldwide</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Visa Assistance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Expert support for student visa applications and documentation</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Career Counseling</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Professional advice to align your education with career goals</p>
                    </CardContent>
                </Card>
            </section>

            <section className="bg-grey-50 p-12 rounded-lg mb-20">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-2">500+</h3>
                        <p className="text-gray-600">Universities</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">50+</h3>
                        <p className="text-gray-600">Countries</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">1000+</h3>
                        <p className="text-gray-600">Success Stories</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">95%</h3>
                        <p className="text-gray-600">Success Rate</p>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-6 text-center">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Testimonial
                        name="Alice Johnson"
                        quote="This platform helped me get into my dream university!"
                        imageUrl="https://via.placeholder.com/150"
                        title="Student"
                    />
                    <Testimonial
                        name="Bob Smith"
                        quote="The visa services were incredibly helpful and efficient."
                        imageUrl="https://via.placeholder.com/150"
                        title="Graduate"
                    />
                    <Testimonial
                        name="Charlie Brown"
                        quote="Career counseling provided excellent guidance."
                        imageUrl="https://via.placeholder.com/150"
                        title="Professional"
                    />
                </div>
            </section>
            {/* How to Arrange Meeting Section */}
            <section className="mb-10 p-8 rounded-lg border">
                <h2 className="text-3xl font-semibold mb-6 text-center">Arrange a Meeting</h2>
                <p className="text-center mb-4">Schedule a personalized consultation with our experts.</p>
                <div className="flex justify-center">
                    <Button variant="outline" className="flex items-center gap-2">
                        <FaCalendarAlt /> Schedule Meeting
                    </Button>
                </div>
                <p className="text-sm text-center mt-4">
                    Or contact us directly through the information below.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <button
                                className="flex justify-between w-full text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-semibold">{item.question}</span>
                                {faqExpanded === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </button>
                            {faqExpanded === index && <p className="mt-2">{item.answer}</p>}
                        </div>
                    ))}
                </div>
            </section>
            {/**Contact us */}
            <section className="mb-10 p-8 rounded-lg border">
                <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="mb-2 "><FaEnvelope className="inline mr-2 text-red-700" /> Email: info@example.com</p>
                        <p className="mb-2 "><FaPhone className="inline mr-2 text-red-700" /> Phone: +1 123 456 7890</p>
                        <div className="flex items-center space-x-4 mt-4">
                            <a href="#" className="text-grey-500 hover:text-red-700"><FaLinkedin size={24} /></a>
                            <a href="#" className="text-grey-800 hover:text-red-700"><FaGithub size={24} /></a>
                            <a href="#" className="text-grey-400 hover:text-red-700"><FaTwitter size={24} /></a>
                        </div>
                    </div>
                    <div>
                        <p className="mb-4">License: [Your License Number or Details]</p>
                        <p className="text-sm text-gray-500">
                            Developed by: <a href="https://github.com/gauravchaubeyy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@git</a>
                        </p>
                        <p className="text-xs text-gray-400">© [2025] All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}