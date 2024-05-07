import styles from '../styles/art.module.scss';

const Art = () => {

    const openArtPage = () => {
        window.location.href = '/artpage';
    }
    return (
        <div className="flex w-10/12 flex-row content-center justify-center">
            <div className="flex w-8/12 flex-col items-center text-center justify-center">
                <div className="flex flex-row gap-2">
                <h1 className="headers text-4xl mt-4 mb-6"> DISCOVER THE </h1><h1 className={`headers text-4xl mt-4 mb-6 ${styles.span}`}> ART COLLECTION</h1>
                </div>
                <div className="w-10/12 mx-auto justify-center content-center"> Explore our curated art collection and immerse yourself in a world of unique entities crafted by creators like you.
                 Whether you're a collector seeking rare finds or an artist looking for inspiration, our collection offers something for everyone. </div>
                 <div className="svg-buttons items-center justify-center h-20 mt-5 relative">
            <object className=" mx-auto" type="image/svg+xml" data="/images/explore.svg" width="350" height="100" />
            <svg className="absolute inset-0 w-full h-full z-10" onClick={openArtPage}>
                <g>
                    <rect className="btn" x="0" y="0" width="120%" height="100%" />
                </g>
            </svg>
        </div>
            </div>
            <object className="mx-auto" type="image/svg+xml" data="/images/artimages.svg" width="500" height="500" />
        </div>
    );
}

export default Art;
