import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { ethers } from 'ethers';
import styles from "./airdrop.module.scss";
import { AirdropABI } from "@/lib/abis/airdrop";
import { CONTRACT_ADDRESSES } from "@/constants/address";
import { HOLDERS } from '@/lib/holders';

export const AirdropStats = () => {
  const [data, setData] = useState<number | null>(null);
  const [dataArray, setDataArray] = useState<{ address: string; allocation: number }[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [ address, setAddress ] = useState("");

  const TOKENS_FOR_PLAYERS = 550_000_000

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_RPCURL);
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

  const fetchDataForAllAddresses = async () => {
    setIsFetching(true);

    try {
      const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_RPCURL);
      const contract = new ethers.Contract(CONTRACT_ADDRESSES.Airdrop, AirdropABI, provider);

      // Use Promise.all to fetch data for all addresses concurrently
      const allocations = await Promise.all(
        HOLDERS.map(async (address) => {
          try {
            const result = await contract.userInfo(address);
            const totalValue = await contract.totalValue();
            const amountOfTokens = (Number(TOKENS_FOR_PLAYERS) * Number(result)) / Number(totalValue);
            return { address, allocation: Number(amountOfTokens) };
          } catch (error) {
            console.error(`Error fetching data for address ${address}:`, error);
            return { address, allocation: 0 }; // Return 0 if there's an error
          }
        })
      );

      // Filter out addresses with 0 allocation and sort by allocation in descending order
      const filteredAndSorted = allocations
        .filter(({ allocation }) => allocation > 0) // Remove 0 allocations
        .sort((a, b) => b.allocation - a.allocation); // Sort by allocation in descending order

      setDataArray(filteredAndSorted);
    } catch (error) {
      console.error('Error fetching airdrop allocations:', error);
      setDataArray([]);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <section className={`${styles.container} flex flex-col justify-center items-center h-[100vh] w-full pt-20`}>
      {/* Main container with form input */}
      <div className="flex flex-col justify-center items-center gap-y-10 z-10">
        <h3 className="text-3xl md:text-5xl text-center font-bold font-monserat">
          Your Current Airdrop Allocation:
        </h3>
  
        {/* Input section */}
        <div className="w-full max-w-[500px]">
          <div className="border p-4 lg:p-8 bg-gradient-to-tr to-light-blue from-light-dark border-light-blue rounded-md shadow-lg">
            <div className="flex gap-4 items-center">
              <input
                className="flex-grow bg-transparent bg-gradient-to-tr to-light-dark from-light-blue rounded-2xl border border-light-blue text-[15px] py-[6px] px-[10px]"
                onChange={e => setAddress(e.target.value)}
                value={address}
                placeholder="Enter Address"
              />
              <button
                className="text-white text-[40px] px-2 py-2 rounded-lg"
                onClick={fetchData}
              >
                <TiTick />
              </button>
            </div>
  
            {/* Result text */}
            <p className="text-2xl font-bold text-center text-white pt-4">
              {isFetching
                ? 'Fetching data...'
                : data !== null
                ? `Airdrop Amount: ${data.toLocaleString()} $TRAIT`
                : 'No data available'}
            </p>
          </div>
        </div>
  
        {/* Fetch all allocations button */}
        <div className="w-full max-w-[500px]">
          <button
            className="text-white w-full text-[40px] px-4 py-2 rounded-lg bg-gradient-to-tr to-light-blue from-light-dark"
            onClick={fetchDataForAllAddresses}
            disabled={isFetching}
          >
            {isFetching ? 'Fetching...' : <TiTick />}
          </button>
        </div>
        <div className="w-full max-w-[700px]">
          <div className="max-h-[400px] overflow-y-scroll overflow-x-hidden rounded-lg border border-light-blue bg-gradient-to-tr to-light-blue from-light-dark p-4 mt-4 shadow-lg">
            <ul className="space-y-1 md:space-y-3">
              {dataArray.length > 0 ? (
                dataArray.map(({ address, allocation }, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 px-8 flex-col md:flex-row rounded-lg text-xs md:text-base text-white bg-gradient-to-tr to-light-blue from-light-dark border-light-blue"
                  >
                    <span>{address}</span>
                    <span>{allocation.toLocaleString()} $TRAIT</span>
                  </li>
                ))
              ) : (
                <li className="text-center text-white">No data available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
  
};
