// TODO 1 - Setup Tezos Toolkit
import { TezosToolkit } from "@taquito/taquito";
import { wallet } from "./wallet";

export const tezos = new TezosToolkit("https://ghostnet.smartpy.io");

// TODO 3 - Specify wallet provider for Tezos instance

tezos.setWalletProvider(wallet)
 
export const getBalance = async () => {
	const connectedWallet = await wallet.client.getActiveAccount();
	if (connectedWallet) {
		const balanceMutez = await tezos.tz.getBalance(connectedWallet.address);
		const balanceXTZ = balanceMutez / 1e6; // convert from mutez to XTZ
		return balanceXTZ.toFixed(2).toString()
	} else {
		return "";
	}
};


