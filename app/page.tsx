import React, { Suspense, lazy } from "react";
import FullScreenGrid from "@/components/FullScreenGrid";
import CheckFooter from "@/components/CheckFooter";

const Hero = lazy(() => import("../components/Hero"));
const Services = lazy(() => import("../components/Services"));
const Industries = lazy(() => import("../components/Industries"));
const Features = lazy(() => import("../components/Features"));
const Infra = lazy(() => import("../components/Infra"));
const CTA = lazy(() => import("../components/CTA"));
const Metrics = lazy(() => import("../components/Metrics"));
const About = lazy(() => import("@/components/About"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
     
        <FullScreenGrid />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Industries />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Infra />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Metrics />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CTA />
      </Suspense> */}
            <div className="flex-grow"></div>

      <CheckFooter/>
    </main>
  );
}
