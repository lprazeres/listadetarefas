import styles from './Post.module.css';

import { Ksat } from './Ksat.jsx';
import { Plus, ClipboardText, AddressBook } from 'phosphor-react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";





export function Post() {

    const initialTasks = [
        {
            id: 2,
            title: 'Oi',
            isCompleted: true
        },
        {
            id: 4,
            title: 'tchau',
            isCompleted: false,
        },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [title, setTitle] = useState('');



    function handleAddNewTask(event) {
        event.preventDefault();

        const task = {
            id: uuidv4(),
            title: title,
            isCompleted: false,
        }

        setTasks([...tasks, task]);
        setTitle('');

    }


    function handleNewTitle(event) {
        setTitle(event.target.value);
    }

    function handleClearTasks() {
        setTasks([]);
    }

    function deleteTask(id) {

        const newTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(newTasks);
    }

    function completeTask(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id == id) {
                task.isCompleted = !task.isCompleted
            }
            return task
        });
        setTasks(updatedTasks);
    }

    return (
        <div className={styles.mainArea}>

            <form onSubmit={handleAddNewTask} className={styles.formArea}>

                <textarea
                    className={styles.inputTasks}
                    required
                    value={title}
                    onChange={handleNewTitle}
                ></textarea>

                <Button type='submit' variant="primary">Criar <Plus size={32} color="#fcfcfc" /></Button>

            </form>


            <div className={styles.countTask}>
                <div>Tarefas criadas <span>{tasks.length}</span></div>
                <div>Concluidas <span>
                    {tasks.reduce(
                        (count, task) => {
                            if (task.isCompleted) {
                                return count + 1;
                            }
                            return count;
                        },
                        0
                    )}
                </span>
                </div>
            </div>

            <div>
                {tasks.map(task => {
                    return (
                        <Ksat
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            isCompleted={task.isCompleted}
                            onDeleteTask={deleteTask}
                            onCompleteTask={completeTask}
                        />
                    );
                })}
            </div>

                <>
                <AddressBook size={32} color="#fcfcfc" />
                </>

            {tasks.length == 0 ? (
                <div className={styles.noTasksArea}>
                    <div><ClipboardText size={32} /></div>
                    <div className={styles.firstMessage}>Você ainda não têm tarefas cadastradas.</div>
                    <div>Crie tarefas e organize seus itens a fazer.</div>
                </div>

            ) : (
                <Button onClick={handleClearTasks} variant="primary">CLEAR ALL</Button>
            )}



        </div>
    );
};