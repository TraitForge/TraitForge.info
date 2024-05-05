import styles from '../styles/art.module.scss';

const Art = () => {
    return (
        <div className="flex w-10/12 flex-row content-center justify-center">
            <div className="flex w-8/12 flex-col content-center text-center justify-center">
                <h1 className="headers text-4xl mt-4 mb-6"> DISCOVER THE <span className={styles.span}> ART COLLECTION</span> </h1>
                <p className="w-10/12 mx-auto justify-center content-center"> Explore our curated art collection and immerse yourself in a world of unique entities crafted by creators like you. Whether you're a collector seeking rare finds or an artist looking for inspiration, our collection offers something for everyone. </p>
                <object className="mt-5 mx-auto" type="image/svg+xml" data="/images/explore.svg" width="350" height="100"></object>
            </div>
            <div className="flex w-6/12 content-center gap-1 rounded border justify-center">
                <div className=" flex">
                    <img className={styles.image1} src="/images/forger1.jpeg" alt="Image 1" />
                </div>
                <div className=" flex flex-col w-11/12  gap-1 items-end">
                    <img className={styles.image2} src="/images/forger2.jpeg" alt="Image 2" />
                    <img className={styles.image3} src="/images/forger3.jpeg" alt="Image 3" />
                </div>
            </div>
        </div>
    );
}

export default Art;
