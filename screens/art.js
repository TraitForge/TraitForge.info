import styles from '../styles/art.module.scss';

const Art = () => {

    const openArtPage = () => {
        window.location.href = '/artpage';
    }
    return (
        <div className="flex flex-row content-center justify-center">
            <div className="flex w-8/12 flex-col items-center text-center justify-center">
                <div className="flex flex-row">
                <h1 className="headers text-4xl mt-4 mb-6"> DISCOVER THE </h1><h1 className={`headers text-4xl ml-2 mt-4 mb-6 ${styles.span}`}> ART COLLECTION</h1>
                </div>
                <div className="w-10/12 mx-auto justify-center content-center"> Explore our curated art collection and immerse yourself in a <br/> world of unique entities crafted by creators like you. <br/>
                 Whether you're a collector seeking rare finds or an artist looking for inspiration, <br/> our collection offers something for everyone. </div>
            <img className="svg-buttons mt-5" onClick={openArtPage} type="image/svg+xml" src="/images/explore.svg" width="300" height="100" />
            </div>
            <object className="" type="image/svg+xml" data="/images/artimages.svg" width="400" height="520" />
        </div>
    );
}

export default Art;
