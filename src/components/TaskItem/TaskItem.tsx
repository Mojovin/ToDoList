import styles from "./taskItem.module.scss"
import ITaskItem from "./ITaskItem"

export default function TaskItem({task, toggleTaskCompletion, deleteTask}: ITaskItem){
    return(
        <li className={styles.task}>
            <input
                className={styles.task__checkbox}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <div className={styles.task__text}>
                {task.text}
            </div>
            <button className={styles.task__button} onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}