import styles from "./SearchFilter.module.scss";
import SearchIcon from "../../icons/SearchIcon.tsx";

export default function SearchFilter() {
    return (
        <form className={styles.SearchFilter}>
            <label className={styles.SearchFilter__label}>
                <input className={styles.SearchFilter__input} name="search" type="text" placeholder=""/>
                <div className={styles.SearchFilter__placeholder}>Search</div>
                <button className={styles.SearchFilter__button} aria-label="Search">
                    <SearchIcon  />
                </button>
            </label>
        </form>
    );
};