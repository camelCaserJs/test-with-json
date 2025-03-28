import styles from './Table.module.scss';
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import ProductDataType from "../../../types/ProductDataType.ts";
import OrderingType, {OrderByType} from "../../../types/OrderingType.ts";

export default function Table(
    {
        productsData,
        ordering,
        onChangeOrdering
    }: {
        productsData: ProductDataType[],
        ordering: OrderingType,
        onChangeOrdering: (orderBy: OrderByType) => void
    }) {
    return (
        <table className={styles.Table}>
            <TableHeader
                ordering={ordering}
                onChangeOrdering={onChangeOrdering}
            />
            <tbody className={styles.TableBody}>
            {productsData.map(productData =>
                <TableRow key={`${productData.barcode}${productData.ASIN}`} productData={productData} />
            )}
            </tbody>
        </table>
    );
}