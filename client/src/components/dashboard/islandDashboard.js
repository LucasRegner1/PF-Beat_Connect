export default function IslandDashboard(props) {
    return(
        <>
        <div className={`padding-island-estilo1 dark:text-gray-300 dark:bg-neutral-900  border-radius-estilo1 background-neutral-white ${props.className ? "" : "w-full"} ${props.className} `}
        style={props.style}
        >
            {props.children}
        </div>
        </>
    )
}