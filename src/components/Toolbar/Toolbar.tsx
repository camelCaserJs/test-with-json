import styles from './Toolbar.module.scss';
// import SearchFilter from "../filters/SearchFilter";
import SelectFilter from "../filters/SelectFilter";
import Pagination from "../Pagination";
import FilterType from "../../types/FilterType.ts";

export default function Toolbar({filters}: { filters: FilterType[] }) {
    return (
        <div className={styles.Toolbar}>
            <div className={styles.Toolbar__filters}>
                {/*<SearchFilter />*/}
                {filters.map((filter) =>
                    <SelectFilter key={filter.field} {...filter}/>
                )}
                <button className={styles.Toolbar__clearButton}>Clear filters</button>
            </div>
            <div className={styles.Toolbar__pagination}>
                <Pagination pagesCount={10} currentPage={5} siblingsCount={2}/>
            </div>
        </div>
    );
}