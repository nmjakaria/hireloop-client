"use client";

import { motion } from "motion/react";

export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            title: "Smart Search",
            description: "Find your ideal job with advanced filters.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Salary Insights",
            description: "Get real salary data to negotiate confidently.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Top Companies",
            description: "Apply to vetted companies that are hiring.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: "Saved Jobs",
            description: "Manage apps & favorites on your dashboard.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            ),
        },
        {
            id: 5,
            title: "One-Click Apply",
            description: "Simplify your job applications for an easier process!",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            ),
        },
        {
            id: 6,
            title: "Resume Builder",
            description: "Create professional resumes with modern templates.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            id: 7,
            title: "Skill-Based Matching",
            description: "Discover jobs that match your skills and experience.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 8,
            title: "Career Growth Resources",
            description: "Boost your career with quick interview tips.",
            icon: (
                <svg className="h-6 w-6 text-pink-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    // Animation configuration formulas
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const elementVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-[#0b0b0b] py-28 px-6 text-white antialiased">
            <div className="mx-auto max-w-7xl">
                
                {/* Header Subcomponent */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="h-1.5 w-1.5 bg-violet-600 rounded-sm" />
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                            Features Job
                        </span>
                        <span className="h-1.5 w-1.5 bg-violet-600 rounded-sm" />
                    </div>
                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
                        Everything you need <br /> to succeed
                    </h2>
                </div>

                {/* Features 4x2 Grid Layout */}
                <motion.div 
                    className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={elementVariants}
                            className="flex items-start gap-4 group"
                        >
                            {/* Dark Glassmorphism Icon Wrapper Box */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-4 transition-colors duration-300 group-hover:border-pink-500/20 group-hover:from-pink-500/[0.03]">
                                {feature.icon}
                            </div>

                            {/* Content Block */}
                            <div className="space-y-1.5 pt-1">
                                <h3 className="text-base font-semibold text-white/90 tracking-wide transition-colors duration-200 group-hover:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-normal leading-relaxed text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}