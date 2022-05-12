const DropdownFilter = (props) => {
    return (
        <>
            <div className={`dropdown ${(props.first==true)?(''):('filter-dropdown')}`}>
                <button className="btn btn-gray" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    {props.title} <i className="fas ml-2 fa-caret-down"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-filter-button" aria-labelledby="dropdownMenuButton">
                    {props.list.map((v, i) => {
                        return <li key={i}><a className="dropdown-item dropdownfilter_item" href="#">{v.value}</a></li>
                    })}
                </ul>
            </div>
        </>
    )
}
export default DropdownFilter;