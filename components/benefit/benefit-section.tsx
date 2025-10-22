"use client"
import ClipPathTitle from "@/components/benefit/clip-path-title";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const BenefitSection = () => {

    useGSAP(() => {

        const benefitsDescSplit = SplitText.create("#benefits-desc", {
            type: "words , lines",
            linesClass: "paragraph-line"
        })

        gsap.from(benefitsDescSplit.lines, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: .5,
            stagger: 0.1,
            force3D: true,
            scrollTrigger: {
                trigger: "#benefit-section",
                start: "top bottom",
                end: "center center",
                scrub: 1
            }
        })

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: "#benefit-section",
                start: "top 50%",
                end: "top top",
                scrub: 1.5,
            },
        });


        revealTl.to("#benefits-first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })

        revealTl.to("#benefits-second-title", {
            duration: 1.2,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })

        revealTl.to("#benefits-third-title", {
            duration: 1.4,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })

        revealTl.to("#benefits-fourth-title", {
            duration: 1.6,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: "circ.out",
        })

    })
    return (
        <div id="benefit-section" className="min-h-screen bg-[#222123]  overflow-hidden relative">
            <div className="container mx-auto pt-20">
                <div className="flex flex-col justify-center items-center">
                    <p id="benefits-desc" className="text-center text-milk font-light uppercase text-2xl overflow-hidden">
                        Unlock the Advantages: <br />
                        Explore the Key Benefits of Choosing SPYLT
                    </p>
                    <div className="mt-20 flex flex-col justify-center items-center">
                        <ClipPathTitle id="benefits-first-title" title="Shelf stable" titleColor="#faeade" bgColor="#c88e64" className="border-[#222123] relative z-10 rotate-[3deg]" />
                        <ClipPathTitle id="benefits-second-title" title="Protein + Caffeine" titleColor="#222123" bgColor="#faeade" className="border-[#222123] rotate-[-1deg] md:-translate-y-5" />
                        <ClipPathTitle id="benefits-third-title" title="Infinitely recyclable" titleColor="#faeade" bgColor="#7F3B2D" className="border-[#222123] rotate-[1deg] md:-translate-y-12 relative z-10" />
                        <ClipPathTitle id="benefits-fourth-title" title="Lactose free" titleColor="#2E2D2F" bgColor="#FED775" className="border-[#222123] rotate-[-5deg] md:-translate-y-12" />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default BenefitSection;