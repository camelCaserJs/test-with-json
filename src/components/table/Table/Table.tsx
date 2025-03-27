import styles from './Table.module.scss';
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import ProductDataType from "../../../types/ProductDataType.ts";

export default function Table({productsData}: { productsData: ProductDataType[] }) {
    return (
        <table className={styles.Table}>
            <TableHeader/>
            <tbody className={styles.TableBody}>
            {productsData.map(productData =>
                <TableRow key={productData.ASIN} productData={productData} />
            )}
            </tbody>
        </table>
    );
}