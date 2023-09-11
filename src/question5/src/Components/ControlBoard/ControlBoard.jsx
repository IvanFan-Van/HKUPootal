import React from "react";
import css from "./ControlBoard.module.scss";
import { Select, Space } from "antd";
import config from "../../utilities/config.json";

const ControlBoard = ({ setQueryObj }) => {
	function handleChange(key, value) {
		setQueryObj(key, value);
	}

	return (
		<Space wrap>
			<Select
				allowClear
				defaultValue=""
				style={{
					width: 120,
				}}
				onChange={(value) => handleChange("sources", value)}
				options={config.selections.sources}
			/>
			<Select
				allowClear
				defaultValue=""
				onChange={(value) => handleChange("categories", value)}
				style={{
					width: 200,
				}}
				options={config.selections.categories}
			/>
			<Select
				allowClear
				defaultValue=""
				style={{
					width: 120,
				}}
				onChange={(value) => handleChange("languages", value)}
				options={config.selections.languages}
			/>
			<Select
				allowClear
				defaultValue=""
				style={{
					width: 120,
				}}
				onChange={(value) => handleChange("countries", value)}
				options={config.selections.countries}
			/>
		</Space>
	);
};

export default ControlBoard;
