import { TeamHero } from "@/components/ui/team/TeamHero";
import { DescriptionSection } from "@/components/ui/team/DescriptionSection";
import { HowItWorks } from "@/components/ui/team/HowItworks";
import { Testimonials } from "@/components/ui/team/Testimonials";
import { CreativeTeam } from "@/components/ui/team/CreativeTeam";

const TeamPage = () => {
  return (
    <>
      <TeamHero />
      <DescriptionSection />
      <HowItWorks />
      <Testimonials />
      <CreativeTeam />
    </>
  );
};

export default TeamPage;
