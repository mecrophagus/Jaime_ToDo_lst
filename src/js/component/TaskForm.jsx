import React, { useState } from "react";



export const TaskForm = () => {
    const [taskName, setTaskName] = useState("");


    return (
        <form action="">
            <button>+</button>
            <input type="text"
            value={taskName}
            onChange={Event => setTaskName(Event.target.value)}
             placeholder="get you shit here" />
        </form>
    )
}