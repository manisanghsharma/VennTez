import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useState } from "react";
import { fundraise } from "../utils/operation";
interface GoalBarProps {
	goal: number;
	curGoal: number;
	donators: number;
}
const GoalBar = ({goal, curGoal, donators}: GoalBarProps) => {
    const [amount, setAmount] = useState(0);

     const onContribute = async () => {
				try {
					await fundraise(amount);
					alert("Transaction Succesful!");
                    window.location.reload();
				} catch (err) {
					 if (err instanceof Error) {
							alert("Transaction Failed: " + err.message);
						}
				}
			};

	return (
		<div className='flex flex-col mx-auto w-[95%] h-fit bg-white rounded-xl shadow-md p-8'>
			<div className='flex justify-between items-center  pb-0'>
				<div className='flex items-center ju'>
					<p className='text-3xl font-bold text-left mb-2 flex items-center'>
						{curGoal} XTZ
						<span className='text-[18px] font-medium text-base ml-3'>
							{donators} Supporters
						</span>
					</p>
				</div>
				<div>
					<p className='text-[21px] font-medium text-base ml-3'>{goal} XTZ</p>
				</div>
			</div>
			<div className='mt-2'>
				<Box sx={{ width: "100%" }}>
					<LinearProgress
						variant='determinate'
						value={(curGoal / goal) * 100}
					/>
				</Box>
			</div>
			<div className='flex justify-between items-center mt-4'>
				<div className='flex items-center'>
					<button
						onClick={() => {
							if (amount) onContribute();
						}}
						className='px-4 py-2 text-xl font-medium rounded-lg border-[3px] border-gray-300 hover:border-green-600 hover:bg-green-600 hover:text-white transition-all'
					>
						Fundraise
					</button>
					<input
						type='number'
						className='px-2 py-2 w-28 text-xl ml-5 font-medium rounded-lg border-[3px] border-gray-300'
						value={amount}
						onChange={(e) => setAmount(parseInt(e.target.value))}
					/>
					<p className='font-medium text-xl ml-3'>XTZ</p>
				</div>
				<p className='text-[21px] font-medium text-base ml-3'>25 Days Left</p>
			</div>
		</div>
	);
};
export default GoalBar;
