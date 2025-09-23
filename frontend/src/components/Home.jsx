import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import EducationCertificateSection from "./EducationCertificateSection";
import HeaderSection from "./HeaderSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

export function Home() {
  return (
    <div className="">
      <div className="font-manrope">
        <HeaderSection />
        <SkillsSection />
        <AboutSection />
        <EducationCertificateSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
