import ProjectDisplay from "./ProjectDisplay";
import Upcoming from "./Upcoming";
const Projects = ({goal, curGoal, donators}) => {
  return (
		<div>
			<h1 className='text-center font-bold text-[50px] mt-10 text-[#23394D]'>
				Available Projects
			</h1>
			<ProjectDisplay goal={goal} curGoal={curGoal} donators={donators} />
			<ProjectDisplay goal={goal} curGoal={curGoal} donators={donators} />

			<h1 className='text-center font-bold text-[50px] mt-10 text-[#23394D]'>
				Upcoming Projects
			</h1>
			<Upcoming />
		</div>
	);
}
export default Projects