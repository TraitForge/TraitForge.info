import styles from '../styles/howitworks.module.scss';

const GameMechanics = () => {
    return (
   <div className={`${styles.page} h-full w-screen flex mb-72 flex-col items-center`}>
    <h1 className="text-4xl mb-5 mt-32"> ENTROPY </h1>
    <p className="text-center text-m"> TraitForge uses a process called token entropy to ensure <br/> each entity generated is completely unique. This <br/>process involves several steps:</p>
    <div className={`${styles.end} mt-20 w-screen items-center justify-center`}>
        <div className="flex mb-16 flex-row items-center justify-center gap-6">
        <object className="" type="image/svg+xml" data="/images/entropy1.svg" width="100" height="100"/>  
        <object className="" type="image/svg+xml" data="/images/entropycontainer1.svg" width="600" height="190"/>
        </div>

        <div className="flex mb-16 flex-row items-center justify-center gap-6">
        <object className="" type="image/svg+xml" data="/images/entropy2.svg" width="100" height="100"/>  
        <object className="" type="image/svg+xml" data="/images/entropycontainer2.svg" width="600" height="180"/>
        </div>

        <div className="flex mb-16 flex-row items-center justify-center gap-6">
        <object className="" type="image/svg+xml" data="/images/entropy3.svg" width="100" height="100"/>  
        <object className="" type="image/svg+xml" data="/images/entropycontainer3.svg" width="600" height="160"/>
        </div>

        <div className="flex mb-16 flex-row items-center justify-center gap-6">
        <object className="" type="image/svg+xml" data="/images/entropy4.svg" width="100" height="100"/>  
        <object className="" type="image/svg+xml" data="/images/entropycontainer4.svg" width="600" height="160"/>
        </div>

    </div>

        <div className={`${styles.start} w-screen flex justify-center`}>
          <div className="w-6/12 mt-10 flex flex-col justify-center">
        <div className="flex content-center justify-start">
        <object className=" " type="image/svg+xml" data="/images/initialNukeFactor.svg" width="300" height="235"/>  
        </div>

        <div className="flex content-center justify-end">
        <object className="" type="image/svg+xml" data="/images/performanceFactor.svg" width="300" height="230"/>  
        </div>

        <div className="flex content-center justify-start">
        <object className="" type="image/svg+xml" data="/images/role.svg" width="300" height="225"/>  
        </div>

        <div className="flex content-center justify-end">
        <object className="" type="image/svg+xml" data="/images/forgePotential.svg" width="300" height="235"/>  
        </div>


        <div className="flex content-center justify-start">
        <object className="" type="image/svg+xml" data="/images/airdropAllocation.svg" width="300" height="235"/>  
        </div>

        </div>
        </div>
    </div>
    );
  };
  
  export default GameMechanics;