const Upcoming = () => {
  return (
		<div className='w-full flex justify-center '>
			<div className='flex justify-between p-3 w-[90%] h-[180px] bg-white shadow-md  transition-all mt-10 rounded-lg cursor-pointer border-2 border-lime-600 '>
				<div className='flex justify-start gap-10'>
					<div>
						<img
							src='./assets/Tezplay.jpg'
							className='rounded-xl w-[150px] '
							alt=''
						/>
					</div>
					<div className='w-[70%]'>
						<h2 className='font-bold text-3xl'>TezPlay</h2>
						<p className='text-xl font-medium text-gray-600 mt-2'>
							Tezplay is a web3 gaming platform utilizing the Tezos blockchain,
							offering a decentralized ecosystem for gaming.
						</p>
					</div>
				</div>

				<div className='w-[30%] flex flex-col items-end'>
					<p className='text-2xl font-bold text-right mb-2'>
						Funding Starts Soon
						
					</p>

				</div>
			</div>
		</div>
	);
}
export default Upcoming