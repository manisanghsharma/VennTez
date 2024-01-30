import Connect from "../components/Connect"
import Projects from "../components/Projects"
import { fundraise } from "../utils/operation";
import { fetchStorage } from "../utils/tzkt";
import React, { useState, useEffect } from "react";


const Explore: React.FC = () => {
	const [goal, setGoal] = useState(0);
	const [curGoal, setCurGoal] = useState(0);
	const [donators, setDonators] = useState(0);
	// const [account, setAccount] = useState("");
	const [amount, setAmount] = useState("");
	const [contributers, setContributors] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// TODO 9 - Fetch players and tickets remaining from storage
		const fetchData = async () => {
			const storage = await fetchStorage();
			console.log(storage.amount_raised);
			setCurGoal(storage.amount_raised / 1000000);
			setGoal(storage.goal / 1000000);
			setContributors(storage.contributors);
			setDonators(Object.keys(storage.contributors).length);
		};

		fetchData();
	}, []);

	// TODO 7.a - Complete onBuyTicket function
	const onContribute = async () => {
		try {
			setLoading(true);
			await fundraise(amount);
			alert("Sucessfully contributed!");
			window.location.reload();
		} catch (error) {
			throw error;
		}
		setLoading(false);
	};

	return (
		<>
			<Connect />
			<Projects goal={goal} curGoal={curGoal} donators={donators} />
		</>
	);
}
export default Explore