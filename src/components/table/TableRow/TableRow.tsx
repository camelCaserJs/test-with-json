import styles from './TableRow.module.scss'
import TableRowPropsList from "../TableRowPropsList";
import TableRowProp from "../TableRowProp";
import TableRowProgressiveCell from "../TableRowProgressiveCell";
import ProductDetail from "../../ProductDetail/ProductDetail.tsx";
import ProductDataType from "../../../types/ProductDataType.ts";
import getPriceFormatted from "../../../utils/getPriceFormatted.ts";

export default function TableRow({productData}: { productData: ProductDataType }) {
    const {
        supplier_item_price,
        prep,
        fba_shipment_costs,
        purchase_tax,
        total_fee,
        fba_fee,
        referral_fee,
        vat,
        price,
        profit,
        percentage,
        rank
    } = productData;

    const totalCost = supplier_item_price + +prep + +fba_shipment_costs + +purchase_tax;

    return (
        <tr className={styles.TableRow}>
            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell}`}>
                    <ProductDetail productData={productData} />
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <span className={styles.TableRow__cellValue}>
                        {getPriceFormatted(totalCost)}
                    </span>
                    <TableRowPropsList>
                        <TableRowProp alignName="right" alignValue="right" name="Supplier price">
                            {getPriceFormatted(supplier_item_price)}
                        </TableRowProp>
                        <TableRowProp alignName="right" alignValue="right" name="Preparation">
                            {getPriceFormatted(prep)}
                        </TableRowProp>
                        <TableRowProp alignName="right" alignValue="right" name="Shipment">
                            {getPriceFormatted(fba_shipment_costs)}
                        </TableRowProp>
                        <TableRowProp alignName="right" alignValue="right" name="TAX">
                            {getPriceFormatted(purchase_tax)}
                        </TableRowProp>
                    </TableRowPropsList>
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <span className={styles.TableRow__cellValue}>
                        {getPriceFormatted(total_fee)}
                    </span>
                    <TableRowPropsList>
                        <TableRowProp alignName="right" alignValue="right" name="FBA">
                            {getPriceFormatted(fba_fee)}
                        </TableRowProp>
                        <TableRowProp alignName="right" alignValue="right" name="Referal">
                            {getPriceFormatted(referral_fee)}
                        </TableRowProp>
                        <TableRowProp alignName="right" alignValue="right" name="VAT">
                            {getPriceFormatted(vat)}
                        </TableRowProp>
                    </TableRowPropsList>
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <span className={styles.TableRow__cellValue}>
                        {getPriceFormatted(price)}
                    </span>
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <span className={styles.TableRow__cellValue}>
                        {getPriceFormatted(profit)}
                    </span>
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <TableRowProgressiveCell percentage={Number(percentage)}>
                        {percentage.replace('.', ',')}%
                    </TableRowProgressiveCell>
                </div>
            </td>

            <td className={styles.TableRow__td}>
                <div className={`${styles.TableRow__cell} ${styles.TableRow__cell_right}`}>
                    <span className={styles.TableRow__cellValue}>
                        {rank}
                    </span>
                </div>
            </td>
        </tr>
    );
}