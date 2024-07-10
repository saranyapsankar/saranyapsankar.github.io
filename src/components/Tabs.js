const Tabs=()=>{
    return (
        <div className="">
            <div className="flex">
                <button className={`isActive`}>Front End</button>
                <button className={`tab ${isActive ? "active" : ""}`}>Back End</button>
                <button className={`tab ${isActive ? "active" : ""}`}>Tools</button>
                <button className={`tab ${isActive ? "active" : ""}`}>Others</button>
            </div>

        </div>
    )
}

export default Tabs;