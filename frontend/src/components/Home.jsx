import AboutSection from "./AboutSection";
import EducationCertificateSection from "./EducationCertificateSection";
import HeaderSection from "./HeaderSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

export function Home() {
  return (
    <div className="">
      <div className="">
        <HeaderSection />
        <SkillsSection />
        <AboutSection />
        <EducationCertificateSection />
        <ProjectSection />
      </div>
    </div>
  );
}
