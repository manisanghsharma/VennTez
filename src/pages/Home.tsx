import Box from "../components/Box";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const Home = () => {
  return (
		<>
			<Navbar />
			<div className='ml-12 flex justify-between items-center'>
				<div>
					<div className='text-[60px] font-bold font-lemon text-[#244256]'>
						<h1 className='mb-2'>FUELING THE FUTURE OF</h1>
						<h1 className='mb-2'>BLOCKCHAIN INNOVATION </h1>
						<h1 className='mb-10'>ON THE TEZOS ECOSYSTEM</h1>
					</div>
					<Link to={"/explore"} className='text-[20px] mt-0 font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all'>
						Get Started
					</Link>
				</div>
				<div>
					<img className='mr-20' src='./assets/fund.webp' alt='' />
				</div>
			</div>
			
		</>
	);
}
export default Home