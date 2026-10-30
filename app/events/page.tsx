import type { Metadata } from "next";
import EventSection from "@/components/event-section";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "CYBOK 2026 | Rotaract Club of Butwal Synergy",
  description:
    "CYBOK 2026: Cybersecurity Unfiltered, supported by Rotaract Club of Butwal Synergy.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EventSection />
    </main>
  );
}
