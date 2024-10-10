import { ReferralHero } from "@/components/ui/referral/ReferralHero";
import { HowItWorks } from "@/components/ui/referral/HowItWorks";
import { Rewards } from "@/components/ui/referral/Rewards";
import { AffiliateStats } from "@/components/ui/referral/AffiliateStats";

const ReferralPage = () => {
  return (
    <>
      <ReferralHero />
      <HowItWorks />
      <Rewards />
      <AffiliateStats/>
    </>
  );
};

export default ReferralPage;
