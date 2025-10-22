"use client"

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const MessageSection = () => {


    useGSAP(() => {

        const firstMessageSplit = SplitText.create("#first-message", {
            type: "words",
        })
        gsap.to(firstMessageSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            force3D: true,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "40% center",
                scrub: true,
            }
        })
        const secondMessageSplit = SplitText.create("#second-message", {
            type: "words",
        })
        gsap.to(secondMessageSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            force3D: true,
            scrollTrigger: {
                trigger: "#second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        })
        gsap.to("#reveal-text-message", {
            duration: 3,
            delay: 3,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            ease: "power1.in",
            force3D: true,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top 60%",
                end: "bottom bottom",
                scrub: true,
            }
        })
        const paragraphSplit = SplitText.create("#message-desc", {
            type: "words , lines",
            linesClass: "paragraph-line",
        });
        gsap.from(paragraphSplit.lines, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: .5,
            stagger: 0.1,
            force3D: true,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "100% center",
                scrub: 1
            }
        })
    })


    return (
        <section className="message-content">
            <div className="container mx-auto py-28 flex justify-center items-center text-milk">
                <div className="w-full h-full relative">
                    <div className="text-5xl md:text-8xl 2xl:text-[8.5rem] tracking-[-.35vw] flex flex-col justify-center items-center gap-14 md:gap-24">
                        <h1 id="first-message" className="message max-w-4xl">Stir up your fearless past and</h1>
                        <h2 id="second-message" className="message max-w-6xl">your future with every gulp of Perfect Protein</h2>
                        <div id="reveal-text-message" style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }} className="bg-light-brown md:pb-5 pb-3 px-5 absolute rotate-3 border-7 border-middel-orange opacity-0">
                            <h2 className="text-middel-orange uppercase font-bold">Fuel Up</h2>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-20 w-fit text-center mx-auto ">
                        <p id="message-desc" className="max-w-md paragraph-line">
                            Rev up your rebel spirit and feed the adventure of life with
                            SPYLT, where you’re one chug away from epic nostalgia and
                            fearless fun.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MessageSection;