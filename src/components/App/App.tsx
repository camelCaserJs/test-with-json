import Toolbar from "../Toolbar";
import styles from "./App.module.scss";
import Table from "../table/Table";
import Pagination from "../Pagination";
import productsData from "../../assets/products.json";
import {useMemo, useState} from "react";
import FilterType, {FilterOptionType} from "../../types/FilterType.ts";
import categories from "../../assets/categories.json";
import matchTypes from "../../assets/matchTypes.json";
import ProductDataType from "../../types/ProductDataType.ts";
import OrderingType, {OrderByType} from "../../types/OrderingType.ts";
import scrollToTop from "../../utils/scrollToTop.ts";

const products = productsData.data;
const allProductsCount = products.length;
const productsPerPage = 20;

function App() {

    /**
     * Get filtered products
     */
    const [filters, setFilters] = useState<FilterType[]>([
        {
            placeholder: "Filter by category",
            field: "category_name",
            value: null,
            options: categories
        },
        {
            placeholder: "Filter by match type",
            field: "match_type",
            value: null,
            options: matchTypes
        }
    ]);

    const filteredProducts = useMemo(() => products.filter((product: ProductDataType) => {
        let isMatch = true;

        filters.forEach((filter) => {
            if (filter.value) {
                // @ts-expect-error: We need to sort by product property that always is string
                if (product[filter.field] !== filter.value.value) isMatch = false;
            }
        })

        return isMatch
    }), [filters]);

    const handleChangeFilter = (field: string, value: FilterOptionType | null) => {

        setFilters((filters) => filters.map((filter) => {
            if (filter.field === field) {
                return {
                    ...filter,
                    value: value
                };
            }

            return filter;
        }));

        setCurrentPage(1);
        scrollToTop();
    }

    const handleResetFilters = () => {
        setFilters((filters) => filters.map((filter) => ({
                ...filter,
                value: null,
            })
        ));

        setCurrentPage(1);
        scrollToTop();
    }

    /**
     * Get ordered products
     */
    const [ordering, setOrdering] = useState<OrderingType>({
        orderBy: "percentage",
        order: "ASC"
    });

    const orderedProducts = useMemo(() => {
        const coef = ordering.order === "DESC" ? -1 : 1;

        return [...filteredProducts].sort((a: ProductDataType, b: ProductDataType) =>
            (+a[ordering.orderBy] > +b[ordering.orderBy] ? -1 * coef : 1 * coef));
    }, [filteredProducts, ordering]);

    const handleChangeOrdering = (newOrderBy: OrderByType) => {
        setOrdering(({orderBy, order}) => {
            if (newOrderBy === orderBy) {
                if (order === "ASC") return {orderBy, order: "DESC"};
                if (order === "DESC") return {orderBy, order: "ASC"};
            }

            return {orderBy: newOrderBy, order: "ASC"};
        });

        setCurrentPage(1);
        scrollToTop();
    }

    /**
     * Get paginated products
     */
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedProducts = useMemo(() => {
        const end = productsPerPage * currentPage;
        const start = productsPerPage * currentPage - productsPerPage;
        return orderedProducts.slice(start, end);
    }, [orderedProducts, currentPage]);

    const handleChangePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);

        scrollToTop();
    }

    /**
     * Calculate pages count
     */
    const productsCount = orderedProducts.length;
    const pagesCount = Math.ceil(productsCount / productsPerPage);

    return (
        <main className={styles.App}>
            <div className="container">
                <h1 className="main-title">Products from Amazon <sup>{allProductsCount}</sup></h1>
                <Toolbar
                    productsCount={productsCount}
                    filters={filters}
                    onChangeFilter={handleChangeFilter}
                    onResetFilters={handleResetFilters}
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onChangePage={handleChangePage}
                />
                <Table
                    productsData={paginatedProducts}
                    ordering={ordering}
                    onChangeOrdering={handleChangeOrdering}
                />
                <div className={styles.App__pagination}>
                    <Pagination
                        currentPage={currentPage}
                        pagesCount={pagesCount}
                        onChange={handleChangePage}
                    />
                </div>
            </div>

        </main>
    )
}

export default App
