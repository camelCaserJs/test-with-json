export default function ArrowDownIcon({size = 18, color = "#000"}: {size?: number, color?: string}) {
    return (
        <svg aria-hidden width={size} height={size * 0.66} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50081 11.3022C8.29694 12.2038 9.70306 12.2038 10.4992 11.3022L17.3234 3.57379C18.4636 2.28255 17.5468 0.25 15.8242 0.25H2.17579C0.453208 0.25 -0.463571 2.28256 0.676601 3.57379L7.50081 11.3022Z" fill={color}/>
        </svg>
    );
}