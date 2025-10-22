import FlavorSection from "@/components/Flavor/flavor-section";
import Hero from "@/components/Hero/hero-section";
import BenefitSection from "@/components/benefit/benefit-section";
import VideoPinSection from "@/components/benefit/video-pin-section";
import MessageSection from "@/components/message/message-section";



export default function Home() {
  return (
    <div>
      <Hero />
      <MessageSection />
      <FlavorSection />
      <BenefitSection />
      <VideoPinSection />
    </div>
  );
}
