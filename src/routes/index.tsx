import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { IntroScrollExperience } from "@/components/site/IntroScrollExperience";
import { Hero } from "@/components/site/Hero";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "DevMeDo — Websites, Apps & Automation";
const description =
  "DevMeDo is a premier software studio engineering websites, mobile and web applications, and custom business automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = useCallback((finished: boolean) => {
    setIsFinished(finished);
  }, []);

  return (
    <div className="bg-[#07060a] text-white min-h-screen selection:bg-purple-600 selection:text-white">
      {/* Navbar fades in gracefully when the last frame is reached */}
      <Navbar visible={isFinished} />

      <main>
        {/* Full-screen pure video/animation sequence */}
        <IntroScrollExperience onFinish={handleFinish} />

        {/* Launch screen page smoothly fades in when reaching the last frame */}
        <AnimatePresence>
          {isFinished && (
            <motion.div
              id="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <Hero />
              <WhyUs />
              <Services />
              <Portfolio />
              <Team />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Toaster />
    </div>
  );
}
