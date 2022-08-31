import styles from './Ksat.module.css';
import { Trash } from 'phosphor-react';


export function Ksat({ title, id, onDeleteTask, onCompleteTask, isCompleted }) {


    function handleDeleteTask() {
        onDeleteTask(id);
    }

    function handleCompleteTask() {
        onCompleteTask(id);
    }

    return (
        <div className={styles.tasksArea}>
            <div className={styles.taskStyle}>

                <button onClick={handleCompleteTask} type='checkbox' className={styles.buttonCheckBox} ></button>



                <p className={isCompleted ? styles.taskCompleted : null}>{title}</p>

 
                <Trash onClick={handleDeleteTask} className={styles.buttonTrash} size={32} color="#fcfcfc" />

            </div>

        </div>
    );
};