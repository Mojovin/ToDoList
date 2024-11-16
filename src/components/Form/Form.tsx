import { useState } from "react"
import styles from "./form.module.scss"
import IForm from "./IForm"

export default function Form({ addTask }: IForm){
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e:React.FormEvent) => {
       e.preventDefault()
       addTask(taskText);
       setTaskText('');
    }
    
    return(
        <section className={styles.formInner}>
            <h2 className={styles.formInner__title}>Add new task</h2>
            <form className={styles.formInner__form} onSubmit={handleSubmit}>
                <input
                    className={styles.formInner__input}
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    required
                    placeholder="Task text"
                />
                <span className={styles.formInner__span}>What we do, how much time we spend? what results we get</span>
                <button className={styles.formInner__button} type="submit">Add</button>
            </form>
        </section>
    )
}