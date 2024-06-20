import React from "react";
import { TaskForm } from "./TaskForm.jsx"
import { Task } from "./Task.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			<TaskForm />
			<Task />
			<Task />
			<Task />
			<Task />
		</div>
	);
};

export default Home;
