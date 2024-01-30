import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { fetchStorage2 } from "../utils/tzkt";

const ProjectDisplay2 = () => {
	const [goal, setGoal] = useState(0);
	const [curGoal, setCurGoal] = useState(0);
	const [donators, setDonators] = useState(0);
	const [contributers, setContributors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const storage = await fetchStorage2();
			console.log(storage.amount_raised);
			setCurGoal(storage.amount_raised / 1000000);
			setGoal(storage.goal / 1000000);
			setContributors(storage.contributors);
			setDonators(Object.keys(storage.contributors).length);
		};

		fetchData();
	}, []);
	return (
		<div className='w-full flex justify-center '>
			<div className='flex justify-between p-3 w-[90%] h-[180px] bg-white shadow-md  transition-all mt-10 rounded-lg cursor-pointer border-2 border-lime-600 '>
				<div className='flex justify-start gap-10'>
					<div>
						<img
							src='./assets/teztunes.jpg'
							className='rounded-xl w-[150px] '
							alt=''
						/>
					</div>
					<div className='w-[70%]'>
						<h2 className='font-bold text-3xl'>Tez Tunes</h2>
						<p className='text-xl font-medium text-gray-600 mt-2'>
							Tez Tunes: Empowering Melodies, Unleashing Possibilities on the
							Blockchain Beat!
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
					<Box sx={{ width: "290px" }}>
						<LinearProgress
							variant='determinate'
							value={(curGoal / goal) * 100}
						/>
					</Box>

					<p className='text-md'>{donators} Donators</p>
					<p className='font-semibold text-xl mt-5'>28 Days Left</p>
				</div>
			</div>
		</div>
	);
};
export default ProjectDisplay2;
