
"use client"

import { flavorslist } from "@/constants";
import Flavor from "./flavor";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const FlavorSlider = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            if (!sliderRef.current) return;

            const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#flavor-section",
                    start: "2% top",
                    end: `+=${scrollAmount + 1500}px`,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to("#flavor-section", {
                x: `-${scrollAmount + 1500}px`,
                ease: "power1.inOut",
            });

            return () => {
                tl.kill();
            };
        });

        return () => mm.revert();
    }, []);

    const RENDER_FLAVORS = flavorslist.map((f, idx) => (
        <Flavor key={idx} flavor={f} index={idx + 1} />
    ))


    return (
        <div ref={sliderRef} className="lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0">
            <div className="h-full w-full flex md:flex-row flex-col items-center gap-7 md:gap-24 lg:gap-52  2xl:gap-72 flex-nowrap  bg-milk">
                {RENDER_FLAVORS}
            </div>
        </div>
    )
};

export default FlavorSlider;