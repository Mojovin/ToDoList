import { useState } from "react"
import TaskItem from "../TaskItem/TaskItem"
import styles from "./listOfTasks.module.scss"
import Filters from "../Filters/Filters"
import IListOfTasks from "./IListOfTasks"

export default function ListOfTasks({tasks, toggleTaskCompletion, deleteTask}: IListOfTasks){
    const [filter, setFilter] = useState<string>('all')  
    
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return(
        <>
            <Filters setFilter={setFilter} activeFilter={filter}/>
            <section>
                <ul className={styles.list}>
                    {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTaskCompletion={toggleTaskCompletion}
                        deleteTask={deleteTask}
                     />
                    ))}
                </ul>
            </section>
        </>
    )
}