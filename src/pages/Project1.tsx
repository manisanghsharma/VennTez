import Connect from "../components/Connect"
import GoalBar from "../components/GoalBar";
import React, { useState, useEffect } from "react";
import { fetchStorage } from "../utils/tzkt";

const Project1 = () => {
  const [goal, setGoal] = useState(0);
	const [curGoal, setCurGoal] = useState(0);
	const [donators, setDonators] = useState(0);
	const [contributers, setContributors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const storage = await fetchStorage();
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
						TezPlay
					</h1>
					<div className='p-8 flex flex-col mx-auto w-[95%] h-fit bg-white rounded-xl shadow-md'>
						<p className='font-medium text-[22px]'>
							TezPlay, a revolutionary Tezos-based blockchain web3 gaming
							platform, redefines the gaming experience by seamlessly
							integrating blockchain technology with online multiplayer games
							and staking opportunities. Here's a brief overview of TezPlay and
							its key traits:
						</p>
						<ul className='list-disc ml-5 font-medium text-[22px] mt-3'>
							<li className='mb-3'>
								<span className='font-bold'>Blockchain Integration: </span>
								TezPlay leverages the Tezos blockchain to ensure transparency,
								security, and decentralization within the gaming ecosystem.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>Web3 Gaming: </span> TezPlay offers
								a cutting-edge Web3 gaming experience, allowing users to play
								multiplayer games with others in a decentralized and trustless
								environment.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>Tezos Staking: </span>
								Users can not only play games but also stake their Tezos
								directly within the platform. This unique feature provides an
								opportunity for users to earn rewards while participating in the
								gaming community.
							</li>
							<li className='mb-3'>
								<span className='font-bold'>Smart Contracts: </span>
								TezPlay utilizes smart contracts on the Tezos blockchain to
								facilitate fair and transparent gaming transactions, ensuring a
								tamper-proof and trustworthy gaming environment.
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h1 className='text-center font-bold text-[45px] mt-5 mb-4 text-[#23394D] '>
						Goal Bar
					</h1>
					<GoalBar goal={goal} curGoal={curGoal} donators={donators} />
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
									{key/1000000}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
export default Project1