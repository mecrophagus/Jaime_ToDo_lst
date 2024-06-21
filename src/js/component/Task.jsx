import React, { useState } from "react";

export const Task = () => {
    const [check1, setChecked1] = useState(false) 

    return(
        <div className="task">
            <div className="checkbox unchecked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"/></svg>
            </div>
            <div className="checkbox checked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h352v352zm-35.9-241.7L191.5 361.5c-4.7 4.7-12.3 4.6-17-.1l-90.8-91.5c-4.7-4.7-4.6-12.3 .1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l59.8 60.3 141.4-140.2c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.1 17z"/></svg>
            </div>
				una prueba para las demas tareas
			</div>
    )
}