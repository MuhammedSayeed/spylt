"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollSmoother, useGSAP);

const SmoothGsapWrapper = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        // Create the ScrollSmoother instance
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1, // How long it takes to "catch up" to the native scroll position
            effects: true, // Allows for data-speed and data-lag attributes
            smoothTouch: 0.1, // Smoother scrolling on touch devices
        });
    }, []);


    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
};

export default SmoothGsapWrapper;