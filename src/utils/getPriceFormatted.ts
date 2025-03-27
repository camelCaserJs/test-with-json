export default function getPriceFormatted(amount: string | number) {
    return `$${Number(amount).toFixed(2).replace('.', ',')}`;
}