import Navbar from "../components/Navbar"
const ContactUs = () => {
  return (
		<div>
			<Navbar />
			<div className='flex flex-col justify-center mx-auto w-full items-center mt-16'>
				<h1 className='text-center font-bold text-[50px] mt-4 mb-9 text-[#23394D] '>
					Want to fund your tezos based application?
				</h1>
				<h2 className='font-medium text-[23px] '>
					Drop us an email at {" "}
					<a
						href='mailto:support@venntez.com'
						className='transiiton-all hover:text-lime-600 cursor-pointer'
					>
						support@venntez.com
					</a>{" "}
					and we'll get back to you promptly!
				</h2>
			</div>
		</div>
	);
}
export default ContactUs