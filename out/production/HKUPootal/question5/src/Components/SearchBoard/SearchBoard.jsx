import React from "react";
import css from "./SearchBoard.module.scss";
import { Input } from "antd";
import ControlBoard from "../ControlBoard/ControlBoard";
import { getNews } from "../../utilities/api.js";

const { Search } = Input;

let queryObj = {};
const SearchBoard = ({ setLiveNews }) => {
	// constructing the query object containing optional params
	function setQueryObj(type, value) {
		if (value == undefined || value == null || value === "") {
			delete queryObj[type];
			return;
		}
		queryObj[type] = value;
	}

	/**
	 *
	 * @param {string} keywords keywords
	 * send request to retreieve data from mediastack
	 */
	const onSearch = async (keywords) => {
		setQueryObj("keywords", keywords);
		console.log("queryobj :", queryObj);
		const res = await getNews(queryObj);
		setLiveNews(res);
	};

	return (
		<div className={css.board}>
			<h2 className={css.title}>Search News</h2>

			<div className={css.searchBox}>
				<Search
					placeholder="input search text"
					allowClear
					enterButton="Search"
					size="large"
					onSearch={onSearch}
					style={{
						width: 400,
					}}
				/>
			</div>
			<div className={css.controlBox}>
				<ControlBoard setQueryObj={setQueryObj} />
			</div>
		</div>
	);
};

export default SearchBoard;
