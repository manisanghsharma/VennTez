// TODO 8 - Fetch storage of the Lottery by completing fetchStorage
import axios from "axios";

export const fetchStorage = async() =>{
    const res = await axios.get(
			"https://api.ghostnet.tzkt.io/v1/contracts/KT1VqLrXUCDFZnjTQJX9qiDFxNznzsFhfQcA/storage"
		);

    return res.data;
}

export const fetchStorage2 = async () => {
	const res = await axios.get(
		"https://api.ghostnet.tzkt.io/v1/contracts/KT1C6MK92zJiN6hk1CbZPbabDaZE6iC9b1jh/storage"
	);

	return res.data;
};