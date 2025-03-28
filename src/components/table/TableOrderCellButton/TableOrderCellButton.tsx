import styles from './TableOrderCellButton.module.scss';
import {ReactNode} from "react";
import SortAscIcon from "../../icons/SortAscIcon.tsx";
import SortDescIcon from "../../icons/SortDescIcon.tsx";
import variables from '../../../styles/variables.module.scss';
import OrderingType, {OrderByType} from "../../../types/OrderingType.ts";

export default function TableOrderCellButton(
    {
        orderBy,
        children,
        onChange,
        ordering
    }: {
        orderBy: OrderByType,
        children: ReactNode,
        onChange: (orderBy: OrderByType) => void,
        ordering: OrderingType
    }
) {

    const order = ordering.orderBy === orderBy && ordering.order;
    const handleOnChange = () => {
        onChange(orderBy);
    }

    return (
        <button onClick={handleOnChange} className={styles.TableOrderCellButton}>
            <span className={styles.TableOrderCellButton__name}>{children}</span>
            <div className={styles.TableOrderCellButton__arrows}>
                <SortAscIcon color={order && order === 'ASC' ? variables.backgroundBlack : 'rgba(0, 0, 0, 0.15)'}/>
                <SortDescIcon
                    color={order && order === 'DESC' ? variables.backgroundBlack : 'rgba(0, 0, 0, 0.15)'}/>
            </div>
        </button>
    )
}