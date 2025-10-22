"use client"
import { useState, useEffect } from "react";
import logo from "@/public/images/nav-logo.svg";
import Image from "next/image";

const Splash = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // This timer will increment the progress
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                // We want 100 steps over 4000ms (4 seconds)
                // 4000ms / 100 steps = 40ms per step
                return prevProgress + 1;
            });
        }, 40);

        // Cleanup function to clear the interval if the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) {
        return null;
    }


    return (
        <div className={`h-screen w-full bg-dark-brown text-white fixed z-[999] inset-0 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="size-full flex flex-col items-center justify-center gap-16">
                <Image
                    src={logo}
                    width={300}
                    height={100}
                    alt="spylt logo"
                    className="rounded"
                />

                <div className="w-64 max-w-md px-4">
                    <div className="w-full bg-middle-brown/50 h-2.5">
                        <div
                            className="bg-milk h-2.5 transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-milk text-center text-lg mt-2">
                        {progress}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Splash;

