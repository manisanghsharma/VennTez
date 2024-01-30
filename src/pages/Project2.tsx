import Connect from "../components/Connect";
import TezTunesBar from "../components/TezTunesBar";
import React, { useState, useEffect } from "react";
import { fetchStorage2 } from "../utils/tzkt";

const Project2 = () => {
	const [goal, setGoal] = useState(0);
	const [curGoal, setCurGoal] = useState(0);
	const [donators, setDonators] = useState(0);
	const [contributers, setContributors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const storage = await fetchStorage2();
			console.log(storage.amount_raised);
			setCurGoal(storage.amount_raised / 1000000);
			setGoal(storage.goal / 1000000);
			setContributors(storage.contributors);
			setDonators(Object.keys(storage.contributors).length);
		};

		fetchData();
	}, []);
	return (
		<>
			<Connect />
			<div className='p-4'>
				<div>
					<h1 className='text-center font-bold text-[45px] mt-2 mb-4 text-[#23394D] '>
						Tez Tunes
					</h1>
					<div className='p-8 flex flex-col mx-auto w-[95%] h-fit bg-white rounded-xl shadow-md'>
						<p className='font-medium text-[22px]'>
							Tez Tunes is a revolutionary web3 music platform built on the
							Tezos blockchain, combining the power of decentralized technology
							with the vibrant world of music. This innovative platform
							introduces a new era for artists and listeners, fostering a fair
							and transparent ecosystem. Tez Tunes boasts several key traits:
						</p>
						<ul className='list-disc ml-5 font-medium text-[22px] mt-3'>
							<li className='mb-3'>
								<span className='font-bold'>
									Decentralized Music Marketplace:
								</span>
								Tez Tunes operates on the Tezos blockchain, providing a
								decentralized marketplace for artists to showcase and sell their
								music directly to fans, eliminating intermediaries and ensuring
								fair compensation for creators.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>
									Smart Contracts for Royalties:
								</span>
								Through smart contracts on the Tezos blockchain, Tez Tunes
								automates royalty distribution, ensuring that artists receive
								their fair share instantly and transparently, fostering a more
								equitable and sustainable music industry.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>NFT Integration: </span>
								Tez Tunes leverages Tezos' NFT capabilities to tokenize music
								assets, enabling artists to create unique and limited edition
								digital assets. Fans can purchase and trade these music NFTs,
								establishing a new paradigm for music ownership and
								collectibles.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>
									Enhanced Copyright Protection:
								</span>
								Tez Tunes leverages blockchain's immutability to provide
								enhanced copyright protection. Artists can confidently publish
								their work on the platform, knowing that their intellectual
								property is secured through the transparent and tamper-proof
								nature of blockchain technology.
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h1 className='text-center font-bold text-[45px] mt-5 mb-4 text-[#23394D] '>
						Goal Bar
					</h1>
					<TezTunesBar goal={goal} curGoal={curGoal} donators={donators} />
				</div>
				
				<h1 className='text-center font-bold text-[45px] mt-5 mb-4 text-[#23394D] '>
					Contributors
				</h1>
				
				<div className='grid grid-cols-2 p-8 pt-0 gap-2'>
					<div>
						{Object.keys(contributers).map((key) => (
							<div className='w-full rounded-lg shadow-md bg-white mb-2'>
								<p id={key} className='p-3 text-center text-xl font-semibold'>
									{key}
								</p>
							</div>
						))}
					</div>
					<div>
						{Object.values(contributers).map((key) => (
							<div className='w-full rounded-lg shadow-md bg-white mb-2'>
								<p id={key} className='p-3 text-center text-xl font-semibold'>
									{key / 1000000}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Project2;
