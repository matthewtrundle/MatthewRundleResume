"use client";

import ModernNavigation from "@/components/ModernNavigation";
import ModernHero from "@/components/ModernHero";
import VideoIntroduction from "@/components/VideoIntroduction";
import ModernExecutiveSummary from "@/components/ModernExecutiveSummary";
import ModernExperience from "@/components/ModernExperience";
import ModernImpact from "@/components/ModernImpact";
import AIProjects from "@/components/AIProjects";
import AIToolsStack from "@/components/AIToolsStack";
import ModernContact from "@/components/ModernContact";
import ModernFooter from "@/components/ModernFooter";

export default function Home() {
  return (
    <>
      <ModernNavigation />
      <main>
        <ModernHero />
        {/* <VideoIntroduction /> */}
        <ModernExecutiveSummary />
        <ModernExperience />
        <ModernImpact />
        <AIProjects />
        <AIToolsStack />
        <ModernContact />
      </main>
      <ModernFooter />
    </>
  );
}