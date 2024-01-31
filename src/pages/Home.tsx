import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
const Home = () => {
  return (
		<>
				<Navbar />
			<div className='h-[calc(100vh-90px)] flex flex-col justify-center'>
				<div className='ml-12 flex justify-between items-center'>
					<div>
						<div className='text-[65px] font-medium text-[#244256]'>
							<h1 className='mb-3'>
								Fueling the <span className='font-bold'>Future</span> of
							</h1>
							<h1 className='mb-3'>
								<span className='font-bold'>Blockchain</span> Innovation{" "}
							</h1>
							<h1 className='mb-10'>
								on the <span className='font-bold'>Tezos</span> Ecosystem
							</h1>
						</div>
						<Link
							to={"/explore"}
							className='text-[20px] mt-0 font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all'
						>
							Get Started
						</Link>
						<Link
							to={"/contactus"}
							className='text-[20px] ml-3 mt-0 font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all'
						>
							Apply for Funding
						</Link>
						<button
							onClick={() => window.open("https://tezos.com/developers/", "_blank")}
							className='text-[20px] ml-3 mt-0 font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:border-sky-600 hover:bg-sky-600  hover:text-[#faffef] transition-all'
						>
							Build on Tezos
						</button>
					</div>
					<div className="mr-[4%]">
						<img className='w-[480px]' src='./assets/fund.png' alt='' />
					</div>
				</div>
			</div>
			<div className=' w-full bg-[#162128] h-screen relative'>
				<h1 className='text-center font-bold text-[50px] pt-10 text-white mb-3'>
					Why Tezos ?
				</h1>

				<div className='flex flex-col justify-between h-[80vh]'>
					<div className='flex justify-between items-center'>
						<div className='ml-12 mr-16 w-[22%] p-3 border-2 rounded-xl'>
							<h1 className='text-center font-semibold text-[30px]  text-white mb-3'>
								Self Ammendment
							</h1>
							<p className='text-white font-medium'>
								Tezos has built in capability to upgrade itself, which allows
								the network to evolve without requiring a hard fork
							</p>
						</div>
						<div className='ml-12 mr-16 w-[27%] p-3 border-2 rounded-xl'>
							<h1 className='text-center font-semibold text-[30px]  text-white mb-3'>
								Proof-of-Stake (PoS)
							</h1>
							<p className='text-white font-medium'>
								PoS is the mechanism by which the various participants in Tezos
								reach consensus on the state of the blockchain. Unlike other PoS
								protocols, any stakeholder can participate in the consensus
								process in Tezos and be rewarded by the protocol itself.
							</p>
						</div>
					</div>
						<img src="./assets/tezos coin.png" className="w-[13%] absolute left-0 bottom-0 right-0 top-0 m-auto" alt="" />
					<div className='flex justify-between items-center'>
						<div className='ml-12 mr-16 w-[27%] p-3 border-2 rounded-xl'>
							<h1 className='text-center font-semibold text-[30px] text-white mb-3'>
								On-Chain Governance
							</h1>
							<p className='text-white font-medium'>
								In Tezos, all stakeholders can participate in governing the
								protocol. The election cycle provides a formal and systematic
								procedure for stakeholders to reach agreement on proposed
								protocol amendments.
							</p>
						</div>
						<div className='ml-12 mr-16 w-[29%] p-3 border-2 rounded-xl'>
							<h1 className='text-center font-semibold text-[30px]  text-white mb-3'>
								Smarter Smart Contracts.
							</h1>
							<p className='text-white font-medium'>
								Tezos is one of the leading smart contracts Proof of Stake
								blockchains. Tezos smart contracts can use formal verification,
								allowing them to be mathematically verified, reliable, and
								secure.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Home