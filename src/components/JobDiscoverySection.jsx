/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "motion/react";

export default function JobDiscoverySection() {
    // Sample jobs array to map over
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            location: "New York, USA",
            type: "Hybrid",
            rate: "€25–40/hour",
        },
        {
            id: 2,
            title: "Backend Developer",
            location: "Berlin, Germany",
            type: "Remote",
            rate: "€30–50/hour",
        },
        {
            id: 3,
            title: "Full Stack Developer",
            location: "London, UK",
            type: "Hybrid",
            rate: "€35–55/hour",
        },
        {
            id: 4,
            title: "UI/UX Designer",
            location: "Amsterdam, Netherlands",
            type: "Remote",
            rate: "€20–35/hour",
        },
        {
            id: 5,
            title: "DevOps Engineer",
            location: "Toronto, Canada",
            type: "On-site",
            rate: "€40–65/hour",
        },
        {
            id: 6,
            title: "Mobile App Developer",
            location: "Sydney, Australia",
            type: "Remote",
            rate: "€30–45/hour",
        },
    ];

    // Framer Motion staggered animation configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-black py-24 px-6 text-white antialiased">
            <div className="mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-sm" />
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                            Smart Job Discovery
                        </span>
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-sm" />
                    </div>

                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        The roles you'd never <br className="hidden sm:block" /> find by searching
                    </h2>
                </div>

                {/* Jobs Grid Layout */}
                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            variants={cardVariants}
                            className="flex flex-col justify-between rounded-3xl bg-[#121212] p-8 border border-white/4 hover:border-white/10 transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-2xl font-medium text-white/95 mb-3">
                                    {job.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-400 font-normal mb-6">
                                    Showcase your commitment to diversity and inclusion by highlighting initiatives
                                </p>

                                {/* Badges / Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300 font-medium">
                                        <svg className="h-3.5 w-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {job.location}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300 font-medium">
                                        <svg className="h-3.5 w-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {job.type}
                                    </span>
                                    <span className="w-full sm:w-auto inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300 font-medium mt-1 sm:mt-0">
                                        <svg className="h-3.5 w-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {job.rate}
                                    </span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="inline-flex items-center gap-2 text-sm font-medium text-white group w-fit transition-colors hover:text-violet-400">
                                Apply Now
                                <svg className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Center Button */}
                <div className="flex justify-center mt-16">
                    <button className="rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                        View all job open
                    </button>
                </div>

            </div>
        </section>
    );
}