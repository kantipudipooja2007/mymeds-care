import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Dashboard from "../components/Dashboard";
import "../meditrack.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediTrack — Never miss a dose, ever again" },
      {
        name: "description",
        content:
          "MediTrack organizes your daily medicine schedule with clear reminders, one-tap tracking and a daily adherence view for patients and caregivers.",
      },
      { property: "og:title", content: "MediTrack — Never miss a dose, ever again" },
      {
        property: "og:description",
        content:
          "A simple, friendly medicine reminder dashboard: see every dose for today and tick it off with one tap.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);
  return started ? <Dashboard /> : <SplashScreen onStart={() => setStarted(true)} />;
}
