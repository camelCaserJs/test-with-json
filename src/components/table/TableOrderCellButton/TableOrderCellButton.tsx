import styles from './TableOrderCellButton.module.scss';
import {ReactNode} from "react";
import SortAscIcon from "../../icons/SortAscIcon.tsx";
import SortDescIcon from "../../icons/SortDescIcon.tsx";
import variables from '../../../styles/variables.module.scss';

export default function TableOrderCellButton({children, orderBy}: {children: ReactNode, orderBy?: 'ASC' | 'DESC'}) {
    return (
        <button className={styles.TableOrderCellButton}>
            <span className={styles.TableOrderCellButton__name}>{children}</span>
            <div className={styles.TableOrderCellButton__arrows}>
                <SortAscIcon color={orderBy && orderBy === 'ASC' ? variables.backgroundBlack : 'rgba(0, 0, 0, 0.15)'} />
                <SortDescIcon color={orderBy && orderBy === 'DESC' ? variables.backgroundBlack : 'rgba(0, 0, 0, 0.15)'} />
            </div>
        </button>
    )
}