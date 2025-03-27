import Select, {components, DropdownIndicatorProps} from "react-select";
import variables from '../../../styles/variables.module.scss';
import styles from './SelectFilter.module.scss';
import ArrowDownIcon from "../../icons/ArrowDownIcon.tsx";
import FilterType from "../../../types/FilterType.ts";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowDownIcon color={'rgba(0,0,0,.1)'}/>
        </components.DropdownIndicator>
    );
};

export default function SelectFilter(
    {
        options,
        placeholder,
        value
    }: FilterType) {
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
                    "&:first-child": {
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
                    backgroundColor: "transparent",
                    borderRadius: 0
                }),
            }}
            options={options}
            components={{DropdownIndicator, IndicatorSeparator: () => null}}
        />
    )
}