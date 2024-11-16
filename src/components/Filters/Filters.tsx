import styles from "./filters.module.scss"
import IFilters from "./IFilters";

export default function Filters({setFilter, activeFilter}: IFilters){
    const handleFilter = (filter: string) => {
        setFilter(filter)
    }
    return (
        <section className={styles.filtersButtons}>
          <button className={`${styles.filtersButtons__button} ${activeFilter === "all" ? styles.filtersButtons__activeButton : ""}`} onClick={() => handleFilter('all')}>All tasks</button>
          <button className={`${styles.filtersButtons__button} ${activeFilter === "active" ? styles.filtersButtons__activeButton : ""}`} onClick={() => handleFilter('active')}>Active tasks</button>
          <button className={`${styles.filtersButtons__button} ${activeFilter === "completed" ? styles.filtersButtons__activeButton : ""}`} onClick={() => handleFilter('completed')}>Completed tasks</button>
        </section>
    );
}