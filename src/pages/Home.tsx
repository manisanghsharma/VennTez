import Box from "../components/Box";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const Home = () => {
  return (
		<>
			<Navbar />
			<div className='ml-12 flex justify-between items-center mt-24 mb-32'>
				<div>
					<div className='text-[63px] font-medium text-[#244256]'>
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
				</div>
				<div>
					<img className='mr-20 w-[480px]' src='./assets/fund.webp' alt='' />
				</div>
			</div>
			{/* <div>
				<h1 className='text-center font-bold text-[50px] mt-10 text-[#23394D]'>
					Why Tezos?
				</h1>
				<div className='flex justify-between items-center ml-12 mr-16'>
					<div className='relative'>
						<p className='text-2xl font-medium text-[25px] mt-5'>
					
						</p>
					</div>
					<div className="w-[50%]">
						<img className=' mt-3 w-[300px]' src='./assets/tezos coin.png' alt='' />
					</div>
				</div>
			</div> */}
		</>
	);
}
export default Home