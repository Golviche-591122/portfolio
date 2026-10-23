import { Toaster } from "react-hot-toast";
import AboutSection from "./sections/AboutSection";
import CompetenceSection from "./sections/CompetenceSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import AnimationLayout from "./components/layouts/AnimationLayout";


export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <CompetenceSection/>
      <ContactSection/>
      <Footer/>
      <Toaster/>
    </AnimationLayout>
      

    
  );
}
