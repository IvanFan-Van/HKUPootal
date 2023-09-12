import React from "react";
import { formatDate } from "../../utilities/api";
import css from "./LiveNew.module.scss";

const LiveNew = ({ news }) => {
	return (
		<a href={news.url}>
			<div className={css.newsBox}>
				{/* News Content */}
				<div className={css.content}>
					{/* Upper part */}
					<div className={css.topLine}>
						<h3>{news.source}</h3>
						<div className={css.publishDate}>
							{formatDate(news.published_at)}
						</div>
					</div>

					{/* Lower part */}
					<h2 className={css.title}>{news.title}</h2>

					<p className={css.description}>{news.description}</p>

					<p className={css.author}>Author: {news.author}</p>
				</div>
			</div>
		</a>
	);
};

export default LiveNew;
