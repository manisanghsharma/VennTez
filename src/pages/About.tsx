import Navbar from "../components/Navbar"
const About = () => {
  return (
		<>
			<Navbar />
			<div className='flex flex-col w-[92%] mx-auto'>
				<h1 className='text-center font-bold text-[45px] mt-12 text-[#23394D] mb-3'>
					About Us
				</h1>
				<p className='font-medium text-[23px] text-justify mb-'>
					Welcome to Venntez, where innovation meets community empowerment on
					the Tezos blockchain. Venntez is a cutting-edge crowdfunding
					application designed exclusively for Tezos-based Web3 decentralized
					applications dApps. Our platform is dedicated to fostering a new era
					of collaboration, creativity, and financial inclusivity within the
					Tezos ecosystem.
				</p>
				<h1 className='text-center font-bold text-[45px] mt-10 text-[#23394D] mb-3'>
					Our Mission
				</h1>
				<p className='font-medium text-[23px] text-justify mb-'>
					At Venntez, our mission is to democratize fundraising for Tezos-based
					projects by providing a seamless and secure crowdfunding experience.
					We believe in the power of decentralized technologies to transform the
					way projects are funded and developed. By leveraging the unique
					features of Tezos, we aim to empower creators and backers alike,
					fostering a vibrant ecosystem of innovation and collaboration.
				</p>
				<h1 className='text-center font-bold text-[45px] mt-10 text-[#23394D] mb-3'>
					Why Tezos?
				</h1>
				<p className='font-medium text-[23px] text-justify mb-'>
					Tezos, renowned for its self-amending blockchain and on-chain
					governance, provides an ideal foundation for Venntez. The platform is
					built on the principles of security, scalability, and sustainability,
					ensuring that your contributions and projects are supported by a
					robust and forward-looking blockchain infrastructure.
				</p>
				<h1 className='text-center font-bold text-[45px] mt-10 text-[#23394D] mb-3'>
					Join Us
				</h1>
				<p className='font-medium text-[23px] text-justify mb-4'>
					Whether you are a visionary project creator or a passionate supporter
					of innovative initiatives, Venntez invites you to be part of the Tezos
					crowdfunding revolution. Together, let's shape the future of
					decentralized collaboration and empower the Tezos community to achieve
					new heights. Join Venntez and embark on a journey of innovation,
					inclusion, and limitless possibilities within the Tezos Web3
					ecosystem.
				</p>
			</div>
		</>
	);
}
export default About