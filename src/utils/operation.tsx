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

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

// export const endGameOperation = async () => {
//   try {
//     const contract = await tezos.wallet.at(
// 			"KT1VqLrXUCDFZnjTQJX9qiDFxNznzsFhfQcA"
// 		);
//     const op = contract.methods.end_game().send();
//     await (await op).confirmation(1);
//   } catch (error) {
//     throw error;
//   }
// };
