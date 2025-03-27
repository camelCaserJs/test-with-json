import styles from "./TableRowProp.module.scss";
import {ReactNode} from "react";

export default function TableRowProp(
    {
        name,
        children,
        alignName = 'left',
        alignValue = 'left',
        widthName,
        widthValue
    }:
    {
        name: string,
        children: ReactNode,
        alignName?: 'left' | 'right',
        alignValue?: 'left' | 'right',
        widthName?: number,
        widthValue?: number
    }
) {
    return (
        <tr className={styles.TableRowProp}>
            <td style={{
                textAlign: alignName,
                ...(widthName && {width: widthName}),
            }}
                className={styles.TableRowProp__name}>
                {name}
            </td>
            <td style={{
                textAlign: alignValue,
                ...(alignValue && {width: widthValue}),
            }}
                className={styles.TableRowProp__value}>
                {children}
            </td>
        </tr>
    );
}