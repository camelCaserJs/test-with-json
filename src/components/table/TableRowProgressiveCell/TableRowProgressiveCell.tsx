import styles from './TableRowProgressiveCell.module.scss';
import {ReactNode} from "react";

export default function TableRowProgressiveCell({percentage, children}: {percentage: number, children: ReactNode}) {
    percentage = percentage > 100 ? 100 : percentage;

    return (
        <div className={styles.TableRowProgressiveCell}>
            <div className={styles.TableRowProgressiveCell__progress}>
                <div style={{width: `${percentage}%`}} className={styles.TableRowProgressiveCell__progressLine}></div>
            </div>
            <div className={styles.TableRowProgressiveCell__value}>{children}</div>
        </div>
    );
}