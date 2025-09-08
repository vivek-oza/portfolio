import AboutSection from "./AboutSection";
import EducationCertificateSection from "./EducationCertificateSection";
import HeaderSection from "./HeaderSection";
import SkillsSection from "./SkillsSection";

export function Home() {
  return (
    <div className="">
      <div className="">
        <HeaderSection />
        <SkillsSection />
        <AboutSection />
        <EducationCertificateSection />
      </div>
    </div>
  );
}
