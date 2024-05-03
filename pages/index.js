import React, {Suspense} from 'react';
import { LoadingSpinner } from '@/components'

const Home = () => {
  return (
    <div className="pages">
      <Suspense> {LoadingSpinner} </Suspense>
      <>
        <h1 className="text-6xl mb-6"> ABOUT TRAITFORGE </h1>
        <p className="w-6/12 text-3xl text-center mb-10 border-b-2"> 
          TraitForge, launched in 2024, is at the forefront of gaming innovation, 
          utilizing blockchain technology to ReInvent GameFi. The company is committed to developing a unique, 
          immersive game that leverages the benefits of DeFi.
        </p>
      </>
      <>
        <h2 className="text-6xl mt-9 mb-6"> WHY TRAITFORGE?</h2>
        <p className="w-6/12 text-xl text-center mb-10 border-b-2">
        NFT projects have huge potential but are currently squandered by grifters and profiteers with no vision. 
        Profile-pic collections are one-time releases with large mints but lack roadmap and value-accrual mechanisms; 
        the best offered is limited to in-person meetups and merchandise sales. 
        NFT games attempt to strap scarcity around in-game items but lack compelling strategy and gameplay. 
        This, combined with the confusing additions of fungible tokens results in a flooded landscape of depressing floor prices, 
        rugging founders and chaotic discord groups.
        This project re-imagines the NFT landscape with a collectors game around a central honeypot which provides multiple lanes of strategy.
        Coupled with strong value-accrual mechanisms and a reason-to-play, the project can work at any scale - 
        from a cute little game all the way up to a L1-reorging behemoth that attracts the attention of ethereum block-producers and OGs alike.
        Finally, to add another layer of strategy, dividends from the game is accrued to participants themselves by way of an airdrop and a DAO contract for Buy/Burn.
        </p>
        </>
    </div>
)
};

export default Home;