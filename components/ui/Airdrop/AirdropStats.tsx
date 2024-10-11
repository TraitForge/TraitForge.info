import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { ethers } from 'ethers';
import styles from "./airdrop.module.scss";
import { AirdropABI } from "@/lib/abis/airdrop";
import { CONTRACT_ADDRESSES } from "@/constants/address";

export const AirdropStats = () => {
  const [data, setData] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [ address, setAddress ] = useState("");

  const TOKENS_FOR_PLAYERS = 550_000_000

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC);
      const contract = new ethers.Contract(CONTRACT_ADDRESSES.Airdrop, AirdropABI, provider);
      const result = await contract.userInfo(address);
      const totalValue = await contract.totalValue();
      const amountOfTokens = (Number(TOKENS_FOR_PLAYERS) * Number(result)) / Number(totalValue);
      setData(Number(amountOfTokens));
    } catch (error) {
      console.error('Error reading contract data:', error);
      setData(null);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <section
      className={`${styles.container} flex justify-center items-center h-[100vh] w-full pt-20`}
    >
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-3xl md:text-5xl mb-24 text-center font-bold font-monserat">
          Your Current Airdrop Allocation:
        </h3>
        <div className="gap-y-5 md:gap-x-[50px] container mx-auto">
          <div className="relative border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md grid grid-cols-12">
            <div className="col-start-1 col-span-12 rounded-lg shadow-lg p-4">
              <div className="grid grid-cols-12">
              <input
                 className=" col-start-3 col-span-8 bg-transparent bg-gradient-to-tr to-light-dark from-light-blue rounded-2xl border border-light-blue  inline text-[15px] py-[6px] px-[10px] w-full md:max-w-[500px] min-w-[250px]"
                 onChange={e => setAddress(e.target.value)}
                 value={address}
                 placeholder="Enter Address"
              />

                <button
                  className="text-white col text-[40px] px-2 py-2 rounded-lg"
                  onClick={fetchData}
                >
                  <TiTick />
                </button>
              </div>
              <p className="text-2xl font-bold text-center text-white pt-4">
                {isFetching ? 'Fetching data...' : data !== null ? `Airdrop Amount: ${data.toLocaleString()} $TRAIT` : 'No data available'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );

};
