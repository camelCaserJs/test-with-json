import styles from './ProductDetail.module.scss';
import TableRowPropsList from "../table/TableRowPropsList";
import TableRowProp from "../table/TableRowProp";
import ProductDataType from "../../types/ProductDataType.ts";

export default function ProductDetail({productData}: { productData: ProductDataType }) {
    const {
        image,
        amazon_title,
        ASIN,
        barcode,
        category_name,
        weight,
        supplier_brand,
        supplier_name,
        supplier_url,
        match_type
    } = productData

    const weightLb = +weight/100;

    return (
        <div className={styles.ProductDetail}>
            <div className={styles.ProductDetail__imageWrapper}>
                <img src={image}
                     loading="lazy"
                     className={styles.ProductDetail__image}
                     alt="Product Image"/>
            </div>
            <div className={styles.ProductDetail__detailsWrapper}>
                <TableRowPropsList>
                    <TableRowProp name="Name"
                                  alignName="right"
                                  widthName={80}>
                        {amazon_title}
                    </TableRowProp>
                </TableRowPropsList>
                <div className={styles.ProductDetail__split}>
                    <div className={styles.ProductDetail__splitSide}>
                        <TableRowPropsList>
                            <TableRowProp name="ASIN"
                                          alignName="right"
                                          widthName={80}>
                                {ASIN}
                            </TableRowProp>
                            <TableRowProp name="Barcode"
                                          alignName="right"
                                          widthName={80}>
                                {barcode}
                            </TableRowProp>
                            <TableRowProp name="Category"
                                          alignName="right"
                                          widthName={80}>
                                {category_name}
                            </TableRowProp>
                        </TableRowPropsList>
                    </div>
                    <div className={styles.ProductDetail__splitSide}>
                        <TableRowPropsList>
                            <TableRowProp name="Weight"
                                          alignName="right"
                                          widthName={80}>
                                {String(weightLb).replace('.', ',')} lb
                            </TableRowProp>
                            <TableRowProp name="Brand"
                                          alignName="right"
                                          widthName={80}>
                                {supplier_brand || '–'}
                            </TableRowProp>
                            <TableRowProp name="Supplier"
                                          alignName="right"
                                          widthName={80}>
                                <a href={supplier_url} target="_blank">{supplier_name}</a>
                            </TableRowProp>
                            <TableRowProp name="Match type"
                                          alignName="right"
                                          widthName={80}>
                                {match_type}
                            </TableRowProp>
                        </TableRowPropsList>
                    </div>
                </div>
            </div>
        </div>
    );
}