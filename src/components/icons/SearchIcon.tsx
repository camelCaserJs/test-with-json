export default function SearchIcon({size = 23, color = "#000"}: {size?: number, color?: string}) {
    return (
        <svg aria-hidden width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5Z" fill={color}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.23223 7.23223C8.20854 6.25592 9.79146 6.25592 10.7678 7.23223L22.5355 19L19 22.5355L7.23223 10.7678C6.25592 9.79146 6.25592 8.20854 7.23223 7.23223Z" fill={color}/>
        </svg>
    );
}