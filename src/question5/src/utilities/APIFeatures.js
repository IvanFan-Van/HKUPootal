class APIFeatures {
	/**
	 *
	 * @param {string} query query string that sends to mediastack
	 * @param {Object} queryObj an object that contains all the optional parameters
	 */
	constructor(query, queryObj) {
		this.query = query;
		this.queryObj = queryObj;
	}

	filter() {
		let queryObj = { ...this.queryObj };
		const excludeFields = ["sort", "offset", "limit"];
		excludeFields.forEach((field) => delete queryObj[field]);
		for (const key in queryObj) {
			this.query = this.query.concat(`&${key}=${queryObj[key]}`);
		}
		return this;
	}

	sort() {
		// wait for completion
		return this;
	}

	limitFields() {
		// wait for completion
		return this;
	}

	paginate() {
		// wait for completion
		return this;
	}
}

export default APIFeatures;
