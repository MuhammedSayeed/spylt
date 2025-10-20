"use client"
import Image, { StaticImageData } from "next/image";
import clsx from 'clsx';
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; // 1. Import the useGSAP hook

interface IProps {
    flavor: {
        name: string,
        bg: StaticImageData,
        elements: StaticImageData,
        drink: StaticImageData
    },
    index: number
}

const Flavor = ({ flavor, index }: IProps) => {
    const isEven = index % 2 === 0;
    const rotation = isEven ? "md:rotate-[8deg] rotate-0" : "md:rotate-[-8deg] rotate-0";

    // Create a ref for the main container
    const containerRef = useRef<HTMLDivElement>(null);

    // 2. Use the useGSAP hook for animations
    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return; // Guard clause

        const handleMouseMove = (e: MouseEvent) => {
            const { left, width } = container.getBoundingClientRect();
            // Get mouse position relative to the container center (from -0.5 to 0.5)
            const mouseX = (e.clientX - left) / width - 0.5;

            // Animate the images based on mouse position
            // We can select elements directly using their refs or class names scoped to the container
            gsap.to(".drink-image", {
                x: -mouseX * 40,
                duration: 0.7,
                ease: "power2.out"
            });

            gsap.to(".elements-image", {
                x: -mouseX * 20, // Parallax effect
                duration: 0.7,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            // Smoothly return images to their starting position
            gsap.to([".drink-image", ".elements-image"], {
                x: 0,
                duration: 0.7,
                ease: "power2.out"
            });
        };

        // Add event listeners
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Return a cleanup function for the event listeners
        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, { scope: containerRef }); // 3. Scope the animations to the container element

    return (
        <div
            ref={containerRef}
            style={{ backgroundImage: `url(${flavor.bg.src})` }}
            className={clsx("relative z-30 w-96 h-80 md:w-[90vw] md:h-[50vh] lg:w-[50vw] lg:h-[70vh] flex-none rounded-4xl bg-cover bg-center bg-no-repeat", rotation)}
        >
            {/* 4. Add class names to the images for easier selection in GSAP */}
            <Image src={flavor.drink} className="drink-image absolute left-1/2 z-10 -translate-x-1/2 bottom-0 h-[calc(110%)] w-auto object-contain" alt={flavor.name} />
            <Image src={flavor.elements} className="elements-image absolute left-1/2 -translate-x-1/2 bottom-0 h-[calc(110%)] w-auto object-contain" alt={flavor.name} />
            <div className="absolute z-[11] bottom-0 p-5 text-milk text-4xl uppercase">
                <h1>{flavor.name}</h1>
            </div>
        </div>
    )
};

export default Flavor;