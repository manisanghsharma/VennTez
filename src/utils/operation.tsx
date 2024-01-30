// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import { tezos } from "./tezos";
export const fundraise = async (val) => {
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

export const fundraise2 = async (val) => {
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