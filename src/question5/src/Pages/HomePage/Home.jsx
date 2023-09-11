import React, { useState } from "react";
import { getLiveNews } from "../../utilities/api";
import { useLoaderData } from "react-router-dom";
import LiveNew from "../../Components/LiveNew/LiveNew";
import css from "./Home.module.scss";
import SearchBoard from "../../Components/SearchBoard/SearchBoard";

export async function loader({ params }) {
	const liveNews = await getLiveNews();
	return liveNews;
}

const Home = () => {
	const [liveNews, setLiveNews] = useState(useLoaderData());

	const newsList = liveNews.data.map((news, index) => {
		return <LiveNew news={news} key={index} />;
	});

	return (
		<main>
			<SearchBoard setLiveNews={setLiveNews} />
			<div className={css.newsList}>{newsList}</div>
		</main>
	);
};

export default Home;
