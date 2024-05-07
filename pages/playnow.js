import styles from '../styles/playnow.module.scss';

const Playnow = () => {

    const linkToGame = () => {
        window.location.href = 'https://traitforge.game/'; 
    }
     

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <h1 className="headers text-4xl mt-4 mb-8 m7-6" title="WELCOME TO TRAITFORGE!"> WELCOME TO TRAITFORGE! </h1>
            <div className="text-2xl w-6/12 text-center"> 
            Unleash your creativity and dive into a realm where you can mint, 
            nuke, and forge unique entities from an expansive collection of possibilities.
            </div>
            <object onClick={linkToGame} className={styles.playnowbutton} class="svg-buttons" type="image/svg+xml" data="/images/playnow.svg" width="300" height="150"></object>
        </div>
    )
}

export default Playnow;
