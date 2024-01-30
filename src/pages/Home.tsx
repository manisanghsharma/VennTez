import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const Home = () => {
  return (
		<>
			<Navbar />
			<div className='flex justify-between items-center'>
				<div>
					<div className=' mt-24 text-[85px] font-bold font-lemon text-[#244256]'>
						<h1 className='mb-2'>FUELING THE FUTURE OF</h1>
						<h1 className='mb-2'>BLOCKCHAIN INNOVATION </h1>
						<h1 className='mb-2'>ON THE TEZOS ECOSYSTEM</h1>
					</div>
					<Link to={"/explore"} className='ml-4 text-[20px] font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all mt-4'>
						Get Started
					</Link>
				</div>
				<div>
					<img className='' src='./assets/tezos coin.png' alt='' />
				</div>
			</div>
		</>
	);
}
export default Home