import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
interface GoalBarProps {
	goal: number;
	curGoal: number;
	donators: number;
}

const ProjectDisplay = ({ goal, curGoal, donators }: GoalBarProps) => {
	return (
		<Link to={"/tezplay"} 	className="hover: text-black">
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

				<div className='w-[30%] flex flex-col items-end sca'>
					<p className='text-3xl font-bold text-right mb-2'>
						{curGoal} XTZ
						<span className='text-[17px] font-medium text-base ml-2'>
							raised of {goal} XTZ goal
						</span>
					</p>
					<Box sx={{ width: "290px"}}>
						<LinearProgress variant='determinate' value={curGoal/goal * 100} />
					</Box>

					<p className="text-md">{donators} Donators</p>
          <p className="font-semibold text-xl mt-5">25 Days Left</p>
				</div>
			</div>
		</div>
		</Link>
	);
};
export default ProjectDisplay;
