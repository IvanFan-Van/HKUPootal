import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import HomeLayout from "./Components/HomeLayout";
import Home from "./Pages/HomePage/Home";
import { loader as homeLoader } from "./Pages/HomePage/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<HomeLayout />}>
			<Route index element={<Home />} loader={homeLoader} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
