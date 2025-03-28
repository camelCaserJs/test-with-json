import {getPagesGroups, PageType} from "../../utils/pagination.ts";
import {useMemo} from "react";
import styles from "./Pagination.module.scss";

export default function Pagination({pagesCount, currentPage, siblingsCount = 2, onChange}: {
    pagesCount: number,
    currentPage: number,
    siblingsCount?: number,
    onChange: (page: number) => void,
}) {
    const pagesGroups: PageType[][] = useMemo(
        () => getPagesGroups(pagesCount, currentPage, siblingsCount),
        [pagesCount, siblingsCount, currentPage]
    );

    return (
        <div className={styles.Pagination}>
            {pagesGroups.map((pagesGroup, i) =>
                <div key={i} className={styles.Pagination__group}>
                    {pagesGroup.map(({pageNumber, type}) =>
                        <button key={pageNumber}
                                onClick={() => onChange(pageNumber || 1)}
                                className={`${styles.Pagination__button} ${type === "current" ? styles.Pagination__button_active : ''}`}>
                            {pageNumber}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}