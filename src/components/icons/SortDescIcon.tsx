export default function SortDescIcon({size = 12, color = "#000"}: {size?: number, color?: string}) {
    return (
        <svg aria-hidden width={size} height={size*0.65} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98531 7.5996C5.38408 8.06006 6.0984 8.06006 6.49717 7.5996L11.2365 2.12712C11.7973 1.47948 11.3373 0.472471 10.4805 0.472471H1.00194C0.145186 0.472471 -0.314866 1.47948 0.24601 2.12712L4.98531 7.5996Z" fill={color}/>
        </svg>
    );
}