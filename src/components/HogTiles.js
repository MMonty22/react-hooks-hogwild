import HogInfo from "./HogInfo"

function HogTiles(
    {hogs,
    showGreased,
    setShowGreased,
    setSortNames,
    setSortWeights,
    })
    {
    return (
        <>
            <button onClick={() => setShowGreased(!showGreased)}>{showGreased ? "Show All Hogs" : "Show Only Greased Hogs"}</button>
            <div></div>
            <button onClick={() => setSortNames()}>Sort By Name</button>
            <button onClick={() => setSortWeights()}>Sort By Weight</button>
            {(hogs.map(hog => ((<HogInfo key={hog.name} hog={hog}/>))))}
        </>
    )
}

export default HogTiles