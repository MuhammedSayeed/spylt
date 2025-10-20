"use client"
import FlavorTitle from "@/components/Flavor/flavor-title";
import FlavorSlider from "@/components/Flavor/flavor-slider";

const FlavorSection = () => {

    return (
        <div className="bg-milk">
            <section id="flavor-section">
                <div className="min-h-screen relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-4 md:p-[20px]">
                    <div className=" h-fit flex items-start lg:items-center mx-auto">
                        <FlavorTitle />
                    </div>
                    <div>
                        <FlavorSlider />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default FlavorSection;