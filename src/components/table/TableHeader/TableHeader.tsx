import styles from "./TableHeader.module.scss";
import TableOrderCellButton from "../TableOrderCellButton";
import OrderingType, {OrderByType} from "../../../types/OrderingType.ts";

export default function TableHeader(
    {
        ordering,
        onChangeOrdering
    }: {
        ordering: OrderingType,
        onChangeOrdering: (orderBy: OrderByType) => void
    }) {

    return (
        <thead className={styles.TableHeader}>
        <tr>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    Product details
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={`${styles.TableHeader__cell} ${styles.TableHeader__cell_right}`}>
                    Costs
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={`${styles.TableHeader__cell} ${styles.TableHeader__cell_right}`}>
                    Fees
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={`${styles.TableHeader__cell} ${styles.TableHeader__cell_right}`}>
                    Price
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    <TableOrderCellButton
                        orderBy="profit"
                        onChange={onChangeOrdering}
                        ordering={ordering}
                    >
                        Profit
                    </TableOrderCellButton>
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    <TableOrderCellButton
                        orderBy="percentage"
                        onChange={onChangeOrdering}
                        ordering={ordering}
                    >
                        ROI
                    </TableOrderCellButton>
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    <TableOrderCellButton
                        orderBy="rank"
                        onChange={onChangeOrdering}
                        ordering={ordering}
                    >
                        Sales rank
                    </TableOrderCellButton>
                </div>
            </th>
        </tr>
        </thead>
    )
}