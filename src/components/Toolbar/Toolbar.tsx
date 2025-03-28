import styles from './Toolbar.module.scss';
// import SearchFilter from "../filters/SearchFilter";
import SelectFilter from "../filters/SelectFilter";
import Pagination from "../Pagination";
import FilterType, {FilterOptionType} from "../../types/FilterType.ts";

export default function Toolbar(
    {
        productsCount,
        filters,
        onChangeFilter,
        onResetFilters,
        pagesCount,
        currentPage,
        onChangePage
    }: {
        productsCount: number,
        filters: FilterType[],
        onChangeFilter: (field: string, value: FilterOptionType | null) => void,
        onResetFilters: () => void,
        pagesCount: number,
        currentPage: number,
        onChangePage: (pageNumber: number) => void,
    }) {
    return (
        <div className={styles.Toolbar}>
            <div className={styles.Toolbar__filters}>
                {/*<SearchFilter />*/}
                {filters.map(({field, options, placeholder, value}) =>
                    <SelectFilter
                        key={field}
                        value={value}
                        field={field}
                        options={options}
                        placeholder={placeholder}
                        onChange={onChangeFilter}
                    />
                )}
                <button
                    className={styles.Toolbar__clearButton}
                    onClick={() => onResetFilters()}
                >Clear filters
                </button>
            </div>
            <div className={styles.Toolbar__pagination}>
                <p className={styles.Toolbar__paginationInfo}>
                    Showing {productsCount} products
                </p>
                <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    siblingsCount={2}
                    onChange={onChangePage}
                />
            </div>
        </div>
    );
}