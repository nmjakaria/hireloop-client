import FeaturesSection from "@/components/FeaturesSection";
import JobDiscoverySection from "@/components/JobDiscoverySection";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      
      <StatsSection></StatsSection>
      <JobDiscoverySection />
      <FeaturesSection />

    </div>
  );
}
