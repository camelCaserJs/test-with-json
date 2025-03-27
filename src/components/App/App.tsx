import Toolbar from "../Toolbar";
import styles from "./App.module.scss";
import Table from "../table/Table";
import Pagination from "../Pagination";
import productsData from "../../assets/products.json";
import {useState} from "react";
import FilterType from "../../types/FilterType.ts";

const exampleOfProducts = productsData.data.slice(0, 20);

function App() {

    const [filters, setFilters] = useState<FilterType[]>([
        {
            placeholder: "Filter by category",
            field: "category_name",
            value: 'Automotive',
            options: [
                {
                    value: "Beauty & Personal Care\n",
                    label: "Beauty & Personal Care\n"
                },
                {
                    value: "Grocery & Gourmet Food\n",
                    label: "Grocery & Gourmet Food\n"
                },
                {
                    value: "Automotive",
                    label: "Automotive"
                }
            ]
        },
        {
            placeholder: "Filter by match type",
            field: "match_type",
            value: null,
            options: [
                {
                    value:"Barcode",
                    label:"Barcode"
                },
                {
                    value: "Title",
                    label: "Title"
                }
            ]
        }
    ]);

    return (
        <main className={styles.App}>
            <div className="container">
                <h1 className="main-title">Products from Amazon <sup>403</sup></h1>
                <Toolbar filters={filters}/>
                <Table productsData={exampleOfProducts} />
                <div className={styles.App__pagination}>
                    <Pagination currentPage={5} pagesCount={10} />
                </div>
            </div>

        </main>
    )
}

export default App
