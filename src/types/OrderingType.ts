export type OrderByType = 'percentage' | 'profit' | 'rank';

type OrderingType = {
    orderBy: OrderByType;
    order: string;
}
export default OrderingType;