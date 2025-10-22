"use client"
import heroImg from "@/public/images/static-img.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { SplitText, ScrollTrigger } from "gsap/all"
const Hero = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    const titleSplit = SplitText.create('#hero-title', {
      type: "chars"
    })

    const tl = gsap.timeline({
      delay: .3
    })

    tl.to("#hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      force3D: true
    })
    tl.to("#reveal-text", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
      delay: .4,
      force3D: true
    }, "-=0.5")
    tl.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
      force3D: true
    }, "-=.5")

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      }
    })

    heroTl.to("#hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
      force3D: true
    })

  })


  return (
    <section className="overflow-hidden bg-neutral-800">
      <div id="hero-container" style={{ backgroundImage: `url('${heroImg.src}')`, backgroundPosition: "center center", backgroundSize: "cover" }} className='w-full min-h-screen px-4 flex justify-center items-center lg:px-[30px]'>
        <div id="hero-content" className="w-fit h-fit translate-y-10 opacity-0">
          <h1 id="hero-title" className="font-bold text-5xl sm:text-6xl text-center text-nowrap leading-none md:text-[90px] lg:text-[130px]">FREAKING DELICIOUS</h1>
          <div style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }} id="reveal-text" className="relative z-[2] border-5 border-milk bg-middle-brown w-fit mx-auto py-2 px-1 -rotate-2">
            <h2 className="text-milk uppercase text-5xl  sm:text-6xl leading-none -mt-1 text-nowrap md:text-[90px] lg:text-[130px]">Protein + Caffeine</h2>
          </div>
          <p className="text-center text-sm lg:text-lg text-dark-brown font-normal leading-4 mt-5 lg:mt-8">Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</p>
          <div className="w-fit mx-auto mt-5 lg:mt-8">
            <button className="bg-light-brown py-4 px-11 font-bold rounded-full">Chug the SPYLT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero