"use client"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FlavorTitle = () => {

    useGSAP(() => {
        // Create a matchMedia instance
        const mm = gsap.matchMedia();

        // Define the animation logic in a function to avoid repetition
        const createAnimation = (scrollTriggerEnd: string | number | ScrollTrigger.StartEndFunc | undefined) => {
            const firstTextSplit = SplitText.create("#flavor-first-text", { type: "chars" });
            const secondTextSplit = SplitText.create("#flavor-second-text", { type: "chars" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#flavor-section",
                    start: "top center",
                    end: scrollTriggerEnd, // Use the provided end value
                    scrub: 1,
                },
            });

            tl.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                opacity: 0,
                ease: "power1.inOut",
                duration: 2,
                force3D: true,

            })
            tl.to("#flavor-text-reveal", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                opacity: 1,
                ease: "power1.inOut",
                duration: 2,
                force3D: true,
            }, "<")
            tl.from(secondTextSplit.chars, {
                yPercent: 200,
                stagger: 0.08,
                opacity: 0,
                ease: "power1.inOut",
                duration: 2,
                force3D: true,
            });
        };

        // Add a media query for large screens (lg and up, e.g., 1024px)
        mm.add("(min-width: 1024px)", () => {
            // Setup for large screens
            createAnimation("bottom bottom");
        });

        // Add a media query for smaller screens (less than lg)
        mm.add("(max-width: 1023px)", () => {
            // Setup for small screens
            createAnimation("30% bottom");
        });

    }, []);

    return (
        <div className="relative text-5xl font-bold flex flex-col items-center justify-center md:text-7xl  2xl:text-[8.5rem] uppercase tracking-[-.35vw] gap-16 xl:gap-24 2xl:gap-32">
            <div className="p-2">
                <h1 id="flavor-first-text">We have 6</h1>
            </div>
            <div id="flavor-text-reveal" style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }} className="border-4 lg:border-8 border-milk absolute z-[3] -rotate-3 opacity-0">
                <div className="bg-middle-brown pb-2 lg:pb-5 2xl:pt-0 2xl:px-5 px-3">
                    <h2 className="text-milk">freaking</h2>
                </div>
            </div>
            <div className="p-2">
                <h1 id="flavor-second-text">delicious flavors</h1>
            </div>
        </div>
    )
};

export default FlavorTitle;