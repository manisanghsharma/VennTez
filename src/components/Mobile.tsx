const Mobile = () => {
  const redirectTemple = () => {
    window.open("https://templewallet.com/");
  }
  return (
		<>
			<div className="flex items-center justify-center">
				<img src='./assets/logo copy.png' className='w-[200px] mt-3' />
			</div>
			<div className='w-full h-[calc(100svh-180px)] flex items-center justify-center'>
				<div className='p-4 flex flex-col justify-center items-center gap-4'>
					<h1 className='text-3xl font-semibold'>Not Supported! 🚫</h1>
					<p className='text-xl font-medium text-center'>
						Kindly use a desktop with{" "}
						<span
							onClick={redirectTemple}
							className='cursor-pointer hover:text-lime-600 transition-all'
						>
							Temple Wallet
						</span>{" "}
						connected
					</p>
				</div>
			</div>
		</>
	);
}
export default Mobile