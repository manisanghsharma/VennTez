import { useEffect, useState } from "react";
import { getBalance } from "../utils/tezos";
import { connectWallet, getAccount } from "../utils/wallet";
const Connect = () => {

  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);

	useEffect(() => {
		(async () => {
			// TODO 5.b - Get the active account
			const account = await getAccount();
			setAccount(account);
      const balance = await getBalance();
      setBalance(balance);
		})();
	}, []);

	// TODO 4.a - Complete onConnectWallet function
	const onConnectWallet = async () => {
		await connectWallet();
		const account = await getAccount();
		setAccount(account);
		window.location.reload();
	};

  return (
		<div className='flex justify-between items-center mr-16 ml-12 '>
			<img src='./assets/logo copy.png' alt='' className='w-[280px] mt-3' />
			<div>
				<button
					onClick={onConnectWallet}
					className='flex gap-10 justify-between ml-4 text-[18px] font-medium text-lime-600 px-4 py-2 border-2 rounded-md border-lime-600 hover:bg-lime-600 hover:text-[#faffef] transition-all mt-4'
				>
					{account ? account : "Connect Wallet"}
					{account && (
						<p className='font-medium text-lg'>{balance.toString()} XTZ</p>
					)}
				</button>
			</div>
		</div>
	);
}
export default Connect