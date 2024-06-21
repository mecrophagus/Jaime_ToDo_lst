import React from "react";
import { TaskForm } from "./TaskForm.jsx"
import { Task } from "./Task.jsx";

//create your first component
const Home = () => {
	return (
		<main>
			<TaskForm />
			<Task />
			<Task />
			<Task />
			<Task />
		</main>
	);
};

export default Home;
