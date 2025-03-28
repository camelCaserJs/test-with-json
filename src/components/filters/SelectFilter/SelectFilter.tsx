import Select from "react-select";
import variables from '../../../styles/variables.module.scss';
import styles from './SelectFilter.module.scss';
import {FilterOptionType} from "../../../types/FilterType.ts";
export default function SelectFilter(
    {
        field,
        value,
        options,
        placeholder,
        onChange
    }: {
        field: string,
        value: FilterOptionType | null,
        options: FilterOptionType[],
        placeholder: string,
        onChange: (field: string, value: FilterOptionType | null) => void,
    }) {

    const handleOnChange = (option: unknown) => {
        const value = option as FilterOptionType;
        onChange(field, value);
    }

    return (
        <Select
            placeholder={placeholder}
            className={styles.SelectFilter}
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    height: "60px",
                    borderRadius: "15px",
                    border: "none",
                    paddingLeft: "5px",
                    color: variables.textBlack,
                    paddingRight: "10px",
                    transition: '0.1s ease',
                    "&:hover": {
                        backgroundColor: variables.backgroundGrayDarken,
                    },
                    backgroundColor: state.isFocused ? `${variables.backgroundWhite} !important` : variables.backgroundGray,
                    outline: state.isFocused ? `2px solid ${variables.textBlack}` : 'none'
                }),
                placeholder: (provided) => ({
                    ...provided,
                    opacity: 0.4,
                    color: variables.textBlack
                }),
                option: (provided, state) => ({
                    ...provided,
                    padding: "0.8em 0.8em",
                    backgroundColor: state.isSelected ? `${variables.backgroundGrayDarkenExtra} !important` : variables.backgroundGray,
                    color: variables.textBlack,
                    cursor: "pointer",
                    marginBottom: "2px",
                    borderRadius: "3px",
                    "&:first-of-type": {
                        borderRadius: "10px 10px 3px 3px"
                    },
                    "&:last-child": {
                        borderRadius: "3px 3px 10px 10px"
                    },
                    "&:hover": {
                        backgroundColor: variables.backgroundGrayDarken,
                    }
                }),
                menu: (provided) => ({
                    ...provided,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: variables.backgroundWhite,
                    borderRadius: 0
                }),
            }}
            options={options}
            components={{IndicatorSeparator: () => null}}
            onChange={handleOnChange}
            value={value}
        />
    )
}