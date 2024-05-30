import HeroSection from "@/components/herosection";
import AboutSection from "../components/aboutsection";
// import ProjectsSection from "../components/ProjectsSection";
// import SkillsSection from "../components/SkillsSection";
// import ExperienceSection from "../components/ExperienceSection";
// import ContactSection from "../components/ContactSection";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
