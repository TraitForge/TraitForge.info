import Group from '../public/images/Group.png';
import Group2 from '../public/images/Group2.png';
import Group3 from '../public/images/Group3.png';

const TraitforgeIntro = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="headers text-4xl mt-4 mb-8 m7-6"> WITH TRAITFORGE YOU CAN</h1>
      <div className="flex flex-row w-9/12 items-center justify-center gap-40">
        <div>
          <img src={Group} alt='img' />
          <p className="text-3xl text-center">Mint up to 10,000 distinct entities, each with its own unique traits and characteristics.</p>
        </div>
        <div>
          <img src={Group2} alt='img' />
          <p className="text-3xl text-center">Explore endless possibilities in the evolution of your creations through nuking and forging.</p>
        </div>
        <div>
          <img src={Group3} alt='img' />
          <p className="text-3xl text-center">Connect with a vibrant community of creators and collectors on Twitter and Discord.</p>
        </div>
      </div>
    </div>
  );
};

export default TraitforgeIntro;
