
const Entropy = () => {
    return (
   <div className="flex flex-col justify-center items-center">
     <h1 className="headers text-4xl mt-4 mb-12 flex flex-col justify-center" title="ENTROPY:">ENTROPY:</h1>
      <div className="text-center gap-5">
      <span className="m-5 text-3xl"> We use a process called token entropy to ensure each entity generated is completely unique. This process involves several steps: </span>
        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">Entropy Generation: We have a smart contract called EntropyGenerator that creates 770 UINT256 slots. Each slot is filled by an indexing block number and uses the keccak256 hash algorithm to generate a random uint256 slot. Each UINT256 is a 78-digit number.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">Entropy Indexing: To create 10,000 unique entities per generation, we extract 6-digit entropies from each UINT256 slot, giving us 13 entropies per slot (13 x 770 = 10,010 random entropies). These entropies are in the format of 916638, 825738, 0716832, for instance.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">Immutable Slots: These entropies are written during deployment and remain immutable to prevent manipulation by miners or other parties.</span>
        </div>

        <div className="text-center gap-5 mb-5">  
          <span className="m-5 text-xl">Entity Parameters Derivation: We derive entity parameters such as initialNukeFactor, performanceFactor, forgePotential, and role (forger or merger) by indexing digits from the 6-digit entropy.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">InitialNukeFactor is calculated as entropy divided by 4, entropy(999999/4=249999) gives a percentage of 24.9%.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">Role (forger or merger) is determined by checking if entropy % 3 equals 0.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">PerformanceFactor is calculated as entropy % 10, for example, 123456 would result in a performance factor of 6x.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">ForgePotential is determined by a specific digit from the entropy, like the fifth digit in 123456 resulting in 5x per year.</span>
        </div>

        <div className="text-center gap-5 mb-5">
          <span className="m-5 text-xl">Airdrop Allocation: The allocation of tokens during an airdrop is based on the entropy of the entities you minted or forged. Higher entropy entities (e.g., 961783, 897551, 988976) receive more tokens compared to lower entropy entities (e.g., 147835, 572753, 145773).</span>
        </div>
      </div>
    </div>
    );
  };
  
  export default Entropy;
  