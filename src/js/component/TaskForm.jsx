import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUndo, faTrashAlt, faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';

/* Se puede importar font awesome a traves de npm install es una pasadota, y 
luego podemos escoger nuestros logos, es más engorroso, pero he visto muchos 
videos donde hacen eso, y la verdad no esta nada mal, si vuelves alguna ves en el futuro 
aqui recuerda qué a traves de consola puedes hacer muchas cosas, y qué todo lo qué se 
instale en npm queda en "dependencies"
*/

export function Task() {
    const [tasks, setTasks] = useState([]);                         //useState te permite modificar una constante, recuerda, nombre, valor = useState
    const [taskInput, setTaskInput] = useState('');                 //Hacerte con un entendimiento claro de la sintaxis y la forma de escribirlo ayudara ocn tu falta
    const [title, setTitle] = useState('Your Tasks');               //de logica aprende como se declara un hook
                                                                    //
    useEffect(() => {
      if (tasks.length === 0) {
        setTitle('No eres bronce');
      } else {
        setTitle('Porqué eres Bronce');
      }
    }, [tasks]);
    const addTask = (event) => {
        event.preventDefault();
        if (taskInput.trim() !== '') {
          setTasks([...tasks, { text: taskInput, completed: false }]);
          setTaskInput('');
        }
      };
    
      const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
    
      const toggleTaskCompletion = (index) => {
        setTasks(
          tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
          )
        );
      };
    
      const resetTasks = () => {
        setTasks([]);
      };


      return (
        <div className="task-container">
          <h1>{title}</h1>
          <form onSubmit={addTask}>
            <input
              type="text"
              value={taskInput}
              onChange={(event) => setTaskInput(event.target.value)}
              placeholder="Go mad here"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPlus} /> Hit it
            </button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <span>{task.text}</span>
                <div>
                  <button onClick={() => toggleTaskCompletion(index)}>
                    <FontAwesomeIcon icon={task.completed ? faUndo : faCheck} />
                  </button>
                  <button onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={resetTasks} className="reset-button">
            <FontAwesomeIcon icon={faRedo} /> restart the game
          </button>
        </div>
      );

    }