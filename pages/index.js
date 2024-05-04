import React from 'react';
import Playnow from './playnow'
import TraitforgeIntro from './TraitforgeIntro';
import Art from './art';

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <section className="page1 mb-screen" id="index">
        <div className="absolute left-32 items-start justify-center">
          <div className="flex flex-col items-start">
            <h1 className="text-7xl mb-5">FORGE</h1>
            <h1 className="text-7xl mb-5">YOUR</h1>
            <h1 className="text-7xl mb-5">DESTINY</h1>
          </div>
          <div className="text-3xl">
            <p>Mint, Nuke and Forge Your Way to</p>
            <p>Infinite Possibilities!</p>
          </div>
        </div>
      </section>
      <section className="page2" key="TraitforgeIntro">
      <Playnow/>
      </section>
      <section className="page3" key="Playnow">
      <TraitforgeIntro/>
      </section>
    </div>
  );
};

export default Home;
