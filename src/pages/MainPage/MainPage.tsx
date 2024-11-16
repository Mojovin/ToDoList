import { useEffect, useState } from "react";
import { ITask } from "../../components/TaskItem/ITask";
import ListOfTasks from "../../components/ListOfTasks/ListOfTasks";
import Form from "../../components/Form/Form";
import styles from "./mainPage.module.scss"

export default function MainPage(){
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() =>{
        const savedTasks = localStorage.getItem("tasks")
        if (savedTasks){
            setTasks(JSON.parse(savedTasks))
        }
    }, [])

    useEffect(() =>{
        if(tasks.length > 0){
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [tasks])

    const addTask = (taskText: string) => {
        const newTask = {id: Date.now(), text: taskText, completed: false}
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const toggleTaskCompletion = (id : number) => {
        setTasks((prevTasks) =>
            prevTasks.map(task => task.id === id ? {...task, completed : !task.completed} : task)
        )
    }

    const deleteTask = (id : number) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
    }

    return(
        <main className={styles.main}>
            <ListOfTasks tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
            <Form addTask={addTask} />
        </main>
    )
}