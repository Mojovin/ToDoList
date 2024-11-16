import { ITask } from "../TaskItem/ITask";

export default interface IListOfTasks{
    tasks: ITask[],
    toggleTaskCompletion: (id: number) => void,
    deleteTask: (id: number) => void
}