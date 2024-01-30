import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Connect from "./components/Connect";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { fundraise } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App: React.FC = () => {

  const [goal, setGoal] = useState(0);
	const [curGoal, setCurGoal] = useState(0);
	// const [account, setAccount] = useState("");
	const [amount, setAmount] = useState("");
	const [contributers, setContributors] = useState([]);
	const [loading, setLoading] = useState(false);


  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    const fetchData = async () => {
      const storage = await fetchStorage();

      setCurGoal(storage.amount_raised / 1000000);
			setGoal(storage.goal / 1000000);
      console.log((storage.contributors));
      setContributors(storage.contributors);
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

  // TODO 11.a - Complete onEndGame function
  // const onEndGame = async () => {
  //   try {
  //     setLoading(true);
  //     await endGameOperation();
  //     alert("Game Over");
  //   } catch (error) {
  //     throw error;
  //   }
  //   setLoading(false);
  // };

  return (
      <>
        {/* <Navbar />
        <Main /> */}
        <Connect />
        <Projects />
      </>
  );
};

export default App;
