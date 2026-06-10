"use client";

import {
    Briefcase,
    Factory,
    Magnifier,
    Star,
} from "@gravity-ui/icons";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

// Custom component to animate counting up numbers smoothly (Vanilla JS)
function AnimatedNumber({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    // Extract the raw number and the suffix (e.g., "50" and "K" or "97" and "%")
    const numericPart = parseFloat(value);
    const suffix = value.replace(/[0-9.]/g, "");
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericPart, { 
                duration: 2, 
                ease: "easeOut" 
            });
            return controls.stop;
        }
    }, [isInView, numericPart, count]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest + suffix;
            }
        });
    }, [rounded, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            icon: <Briefcase className="h-5 w-5" />,
            value: "50K",
            label: "Active Jobs",
        },
        {
            id: 2,
            icon: <Factory className="h-5 w-5" />,
            value: "12K",
            label: "Companies",
        },
        {
            id: 3,
            icon: <Magnifier className="h-5 w-5" />,
            value: "2M",
            label: "Job Seekers",
        },
        {
            id: 4,
            icon: <Star className="h-5 w-5" />,
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];

    // Parent container variant to stagger the children cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Card variant for a smooth fade up & in
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-black py-28 text-white">
            {/* Background Globe */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Glow Effect */}
            <div className="absolute left-1/2 top-[25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Heading */}
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-medium leading-relaxed text-white/90 md:text-4xl">
                        Assisting over 15,000 job seekers
                        <br />
                        find their dream positions.
                    </h2>
                    <p className="mt-4 text-sm tracking-widest text-violet-400 uppercase font-semibold">
                        Remote & On-site Global Opportunities
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div 
                    className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
                        >
                            {/* Card Glow */}
                            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                            {/* Icon */}
                            <div className="relative z-10 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-400">
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                                <AnimatedNumber value={stat.value} />
                            </h3>

                            {/* Label */}
                            <p className="relative z-10 mt-4 text-base text-gray-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}