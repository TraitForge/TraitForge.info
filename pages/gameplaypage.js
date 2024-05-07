import React from 'react';
import styles from '../styles/gameplay.module.scss';

const GameplayPage = () => {
  return (
    <div className={`${styles.page} h-full w-screen flex flex-col items-center mb-20`}>
      <div className=" mt-32 flex flex-col items-center">
      <h1 className="text-5xl mb-4" title="GAME-PLAY">GAMEPLAY</h1>
      <p className="text-sm text-center">Discover the Core Mechanics and Features that <br/> Define Your Interactive Experience</p>
      <div className="gap-14 mt-40 flex flex-col items-center h-full">
      <object className="h-full" type="image/svg+xml" data="/images/frame1.svg" width="800" height="800"/>              
      <object className="h-full" type="image/svg+xml" data="/images/frame2.svg" width="800" height="800"/>   
      <object className="h-full" type="image/svg+xml" data="/images/frame3.svg" width="800" height="800"/>   
      <object className="h-full" type="image/svg+xml" data="/images/frame4.svg" width="800" height="800"/>   
      </div>
      </div>
    </div>
  );
}

export default GameplayPage;
