import { ITask } from "./ITask"

export default interface ITaskItem{
    task: ITask,
    toggleTaskCompletion: (id: number) => void,
    deleteTask: (id: number) => void
}