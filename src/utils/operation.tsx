
import { tezos } from "./tezos";
export const fundraise = async (val: number) => {
  try {
    const contract = await tezos.wallet.at(
			"KT1VqLrXUCDFZnjTQJX9qiDFxNznzsFhfQcA"
		);
    const op = contract.methods.contribute().send({
      amount: val,
      mutez: false,
    });
    await (await op).confirmation(1);
  } catch (error) {
    throw error;

  }


};

export const fundraise2 = async (val: number) => {
	try {
		const contract = await tezos.wallet.at(
			"KT1C6MK92zJiN6hk1CbZPbabDaZE6iC9b1jh"
		);
		const op = contract.methods.contribute().send({
			amount: val,
			mutez: false,
		});
		await (await op).confirmation(1);
	} catch (error) {
		throw error;
	}
};