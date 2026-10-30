import Hero from "@/components/hero";
import ImpactCounter from "@/components/impact-counter";
import LeadersSection from "@/components/leaders-section";
import Navbar from "@/components/navbar";
import PresidentMessage from "@/components/president-message";
import PresidentialTheme from "@/components/presidential-theme";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ImpactCounter />
      <PresidentMessage />
      <TeamSection />
      <PresidentialTheme />
      <LeadersSection />
    </main>
  );
}
