
const Box = () => {
  return (
		<div className='border-2 w-fit p-3 rounded-lg bg-[#244256] border-lime-600 flex flex-col justify-center items-center gap-3'>
			<img className='w-[130px]' src='./assets/piggy.png' alt='' />
			<button className='text-[15px] font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all'>
				Contribute
			</button>
		</div>
	);
}
export default Box

