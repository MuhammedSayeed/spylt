import FlavorSection from "@/components/Flavor/flavor-section";
import Hero from "@/components/Hero/hero-section";
import MessageSection from "@/components/message/message-section";



export default function Home() {
  return (
    <div className="min-h-[4000px]">
      <Hero />
      <MessageSection />
      <FlavorSection />
    </div>
  );
}
