import React from 'react';
import styles from '../styles/gameplay.module.scss';

const GameplayPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center' class={styles.page}>
      <h1 className="headers text-6xl" title="GAME-PLAY">GAME-PLAY</h1>
      
      <div></div>
      <object type="image/svg+xml" data="/images/frame1.svg" width="1000" height="1000">              
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
         <rect x="0" y="0" width="400" height="200" fill="#FFF"/>
         <text x="50" y="50" fontSize="24" fill="#000"> MINTING </text>
         <text x="50" y="80" fontSize="16" fill="#000">10,000 “Gen 1” entities are available to mint.</text>
         <text x="50" y="100" fontSize="16" fill="#000">The first starts at 0.01 ETH and each subsequent one rises linearly by 0.01 ETH until the final is 100 ETH.</text>
         <text x="50" y="120" fontSize="16" fill="#000">In total if all are minted then 500,050 ETH is raised per generation.</text>
         <text x="50" y="140" fontSize="16" fill="#000">There are a total of 10 Generations, which can be minted in parallel via a breeding mechanism.</text>
         <text x="50" y="160" fontSize="16" fill="#000">In theory, 5m ETH could accrue to the central honeypot.</text>
      </svg>
      </object>

        <h1 className="text-5xl my-6"> FORGING </h1>
        <div className="text-lg">
          When a Merger merges with a Forger, their entropy is averaged to produce the next generation entity. 
          The crucial parameters are the “Nuke Factor”, “Merge Potential” and “Performance Factor”,
          which would be halfway between the parameters of the parents. 
          If merging runs out, then the next generation is minted with the genesis entropy off-by-one.
        </div>

        <h1 className="text-5xl my-6"> TRADING </h1>
        <div className="text-lg">
          Entities can be traded via the 'Trading' page or traded directly through a marketplace like OpenSea. 
          10% of the trading fee will be routed to the honeypot for extra game economy.
        </div>

        <h1 className="text-5xl my-6"> NUKING </h1>
        <div className="text-lg">
          The Nuke Fund accumulates ETH from new mints and economic activity. 
          After a 3-day maturity period, anyone can nuke their entity (forever burn) to claim a share of the ETH in the Fund.
          Every entity has a parameter set on mint which represents how much of the Fund can be claimed on nuke. 
          The maximum total NukeFactor is 50% - i.e., a single nuke can claim 50% of all ETH in the Fund. 
          Entities move from their initial Nuke Factor (set randomly) towards the maximum with a speed dictated by Performance Factor (set randomly). 
          Some mature faster than others, with the fastest maturing in around 30 days, and the slowest 600 days. 
        </div>

    </div>
  );
}

export default GameplayPage;
