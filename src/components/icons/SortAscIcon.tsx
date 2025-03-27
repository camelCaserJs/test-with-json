export default function SortAscIcon({size = 12, color = "#000"}: {size?: number, color?: string}) {
    return (
        <svg aria-hidden width={size} height={size*0.65} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98531 0.345346C5.38408 -0.115115 6.0984 -0.115115 6.49717 0.345346L11.2365 5.81782C11.7973 6.46547 11.3373 7.47248 10.4805 7.47248H1.00194C0.145186 7.47248 -0.314866 6.46547 0.24601 5.81782L4.98531 0.345346Z" fill={color}/>
        </svg>
    );
}