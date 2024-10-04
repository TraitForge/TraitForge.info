"use client";

import { GamePlay } from "@/components/ui/GamePlay";
import { Aging } from "@/components/ui/GamePlay/Aging";
import { ForgingSection } from "@/components/ui/GamePlay/ForgingSection";
import { MintingSection } from "@/components/ui/GamePlay/MintingSection";
import { Nuking } from "@/components/ui/GamePlay/Nuking";
import { StrategySection } from "@/components/ui/GamePlay/StrategySection";
import { Trading } from "@/components/ui/GamePlay/Trading";
import { ActiveTradingMarketing } from "@/components/ui/GamePlay/ActiveTradingMarketing";
import { MintAndNuke } from "@/components/ui/GamePlay/MintNuke";
import { Strategic } from "@/components/ui/GamePlay/Strategic";
import { MaximizingNukeValue } from "@/components/ui/GamePlay/MaximizingNukeValue";

const GamePlayPage = () => {
  return (
    <>
      <GamePlay />
      <MintingSection />
      <ForgingSection />
      <Aging />
      <Trading />
      <Nuking />
      <StrategySection />
      <div className="w-10/12 mx-auto">
        <ActiveTradingMarketing />
        <MintAndNuke />
        <Strategic />
        <MaximizingNukeValue />
      </div>
    </>
  );
};

export default GamePlayPage;
