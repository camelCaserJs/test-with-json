import styles from "./TableRowPropsList.module.scss";
import {ReactNode} from "react";

export default function TableRowPropsList({children}: { children: ReactNode }) {
    return (
        <table className={styles.TableRowPropsList}>
            <tbody className={styles.TableRowPropsList__tbody}>
            {children}
            </tbody>
        </table>
    );
}