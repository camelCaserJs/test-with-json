export type FilterOptionType = {
    value: string, label: string
}

type FilterType = {
    field: string;
    value: FilterOptionType | null;
    options: FilterOptionType[];
    placeholder: string;
}
export default FilterType;