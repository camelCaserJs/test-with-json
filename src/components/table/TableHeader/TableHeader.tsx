import styles from "./TableHeader.module.scss";
import TableOrderCellButton from "../TableOrderCellButton";

export default function TableHeader() {
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
                    <TableOrderCellButton>Profit</TableOrderCellButton>
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    <TableOrderCellButton orderBy={"ASC"}>ROI</TableOrderCellButton>
                </div>
            </th>
            <th className={styles.TableHeader__th}>
                <div className={styles.TableHeader__cell}>
                    <TableOrderCellButton>Sales rank</TableOrderCellButton>
                </div>
            </th>
        </tr>
        </thead>
    )
}