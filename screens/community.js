
const Community = () => {

    return (
        <div className="flex flex-col justify-center items-center h-full w-screen relative">
            <h1 className="headers text-5xl my-6"> JOIN THE COMMUNITY </h1>
            <div className="text-3xl text-center w-6/12">
            Connect with us on Twitter and Discord to stay updated and engage with fellow creators and collectors.
            </div>
            <object className="svg-buttons" type="image/svg+xml" data="/images/joinnow.svg" width="300" height="100"></object>
            <object className="overflow-x-hidden mt-10 bottom " type="image/svg+xml" data="/images/communitybottom.svg" width="1290" height="40"></object>
        </div>
    )
}

export default Community;