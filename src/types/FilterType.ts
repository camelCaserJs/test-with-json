type FilterOptionType = {
    value: string, label: string
}

type FilterType = {
    field: string;
    value: string | null;
    options: FilterOptionType[];
    placeholder: string;
}
export default FilterType;