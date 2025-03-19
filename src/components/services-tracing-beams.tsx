"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = dummyContent.filter(item => item.image).length;
    const [contentHeight, setContentHeight] = useState(0);

    // Handle image load events
    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    // Update content height when images are loaded or content changes
    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                const height = contentRef.current.offsetHeight;
                setContentHeight(height);
                console.log("Content height updated:", height);
            }
        };

        // Update height initially
        updateHeight();

        // Also update height when all images are loaded
        if (imagesLoaded === totalImages && totalImages > 0) {
            updateHeight();
        }

        // Force recalculation after a delay to catch any late rendering
        const timer = setTimeout(() => {
            updateHeight();
        }, 1000);

        // Set up resize observer to handle dynamic content changes
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        return () => {
            clearTimeout(timer);
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
        };
    }, [imagesLoaded, totalImages]);

    return (
        <>
            <h3 className="text-3xl font-bold text-white text-center mt-20 mb-12">Our Services</h3>
            <TracingBeam className="px-6" key={`tracing-beam-${contentHeight}`}>
                <div ref={contentRef} className="max-w-2xl mx-auto antialiased pt-4 relative pb-10">
                    {dummyContent.map((item, index) => (
                        <div 
                            key={`content-${index}`} 
                            className={`mb-10 ${index === dummyContent.length - 1 ? 'mb-0' : ''}`}
                        >
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge || `Service ${index + 1}`}
                            </h2>

                            <p className="text-xl mb-4 text-white">{item.title}</p>

                            <div className="text-lg prose-invert text-white">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                        onLoad={handleImageLoad}
                                        priority={index < 2} // Prioritize loading first two images
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const dummyContent = [
    {
        title: "Training and Certificate Programs",
        description: (
            <>
                <p>
                    Empower your workforce with industry-leading skills through our expert-led training and certification programs. We offer hands-on workshops, practical learning sessions, and globally recognized certifications to help individuals and teams stay ahead in today's competitive landscape.
                    <span className="italic"> Our Offerings: Cybersecurity Certification Programs, Blockchain and Web3 Training, Cloud and DevOps Courses, Enterprise Software Training, and Customized Corporate Training</span>
                </p>
            </>
        ),
        badge: "",
        image:
            "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Enterprise Solutions and Business Software",
        description: (
            <>
                <p>
                    Streamline your operations with our custom-built enterprise solutions and business software. We design, develop, and implement software that optimizes your workflows, enhances productivity, and drives business growth.
                    <span className="italic"> Our Solutions Include: ERP and CRM Development, Custom Business Applications, Automation and Workflow Optimization, API Integration and Data Management,Cloud-Based Business Platforms</span>
                </p>
            </>
        ),
        badge: "",
        image:
            "https://images.unsplash.com/photo-1580982324076-d95230549339?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXJwfGVufDB8fDB8fHww",
    },
    {
        title: " Cybersecurity and Blockchain Solutions",
        description: (
            <>
                <p>
                    Protect your digital assets with our cutting-edge cybersecurity services and leverage blockchain technology to enhance trust, security, and transparency. Our team ensures your business stays secure in an evolving threat landscape.
                    <span className="italic"> Our Expertise: Penetration Testing and Vulnerability Assessment,Data Encryption and Privacy Solutions, Smart Contract Development and Audits, Blockchain Integration and DApp Development,Incident Response and Threat Mitigation</span>
                </p>
            </>
        ),
        badge: "",
        image:
            "https://images.unsplash.com/photo-1614064548237-096f735f344f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Consulting Services",
        description: (
            <>
                <p>Navigate complex business challenges with our expert consulting services. We provide strategic insights, technical expertise, and actionable solutions to help you achieve your goals efficiently.
                    <span className="italic"> Our Consulting Areas: Digital Transformation Strategy,IT Infrastructure and Cloud Consulting, Business Process Optimization, Cybersecurity and Compliance Consulting, Technology Roadmap and Planning
                    </span>
                </p>
            </>
        ),
        badge: "",
        image:
            "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Web developement services",
        description: (
            <>
                <p>Establish a strong digital presence with our full-cycle web development services. From stunning websites to robust web applications, we create tailored solutions that are user-friendly, scalable, and secure.
                    <span className="italic"> Our Services: Custom Website Design and Development, E-commerce Solutions, Progressive Web Apps (PWAs), Frontend and Backend Development,Website Maintenance and Optimization  </span>
                </p>
            </>
        ),
        badge: "",
        image:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcGVtZW50fGVufDB8fDB8fHww",
    },
];