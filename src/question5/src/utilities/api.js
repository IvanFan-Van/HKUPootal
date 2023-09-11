import APIFeatures from "./APIFeatures";

// Function for making up a request
// Your proxy doesn't work
// let baseURL = "https://proxy-for-test-2023.hkupootal.com/?q=".concat(
// 	new URL(
// 		"http://api.mediastack.com/v1/news?access_key=a613ed4dd7862fc47e35692127265d45"
// 	).href
// );

let baseURL =
	"http://api.mediastack.com/v1/news?access_key=a613ed4dd7862fc47e35692127265d45";

// Construct query String
export function constructQuery(queryObj) {
	const APIFeatures = new APIFeatures(baseURL, queryObj);
}

export function formatDate(date) {
	const d = new Date(date);
	const month = d.getMonth();
	const day = d.getDate();
	const year = d.getFullYear();
	const monthEnglish = [
		"January",
		"Feburary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return "".concat(monthEnglish[month], " ", day, ", ", year);
}

/**
 *
 * @returns live news
 */
export const getLiveNews = async () => {
	const res = await fetch(baseURL);
	const data = await res.json();
	return data;
};

/**
 *
 * @param {Object} queryObj query object contains all optional parameters
 * @returns
 */
export const getNews = async (queryObj) => {
	// create query string
	const apiFeatures = new APIFeatures(baseURL, queryObj)
		.sort()
		.filter()
		.limitFields()
		.paginate();

	// fetch for data
	console.log("request: ", apiFeatures.query);
	const res = await fetch(apiFeatures.query);
	const data = await res.json();
	console.log("news retrieved: ", data);
	return data;
};
