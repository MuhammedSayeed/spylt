"use client"

import Image from "next/image";
import circleText from "@/public/images/circle-text.svg"
import play from "@/public/images/play.svg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoPinSection = () => {


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#vd-pin-section",
                scrub: 1.5,
                pin: true,

            }
        })

        tl.to("#video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut",
        });
    })

    return (
        <section id="vd-pin-section" className='h-screen relative overflow-hidden bg-[#222123]'>
            <div id="video-box" className="size-full" style={{ clipPath: "circle(6% at 50% 50%)" }}>
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 z-[20] flex items-center justify-center text-white ">
                <Image
                    src={circleText}
                    alt="spinned-text"
                    className="absolute scale-110 animate-spin [animation-duration:10s]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[100px] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                    <Image src={play} alt="spinned-text" className="size-[40px]" />
                </div>
            </div>

        </section>
    )
};

export default VideoPinSection;

{/* <Image
                    src={circleText}
                    alt="spinned-text"
                    className="absolute"
                /> */}

{/* <div id="video-box" style={{
                clipPath: "circle(6% at 50% 50%)"
            }} className="size-full">
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay className="h-full w-full object-cover" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200">
                    <Image src={circleText} alt="spinned-text" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                        <Image src={play} alt="spinned-text" className="size-[3vw] ml-[.5vw]" />
                    </div>
                </div>
            </div> */}