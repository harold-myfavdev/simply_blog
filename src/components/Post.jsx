export default function Post(props) {
    /* Get post start and end dates */
    const postStartDate = props.postStartDate;
    const postEndDate = props.postEndDate;
    const [dayStart, monthNameStart, yearStart] = postStartDate.replace(",", "").split(" ");
    const [dayEnd, monthNameEnd, yearEnd] = postEndDate.replace(",", "").split(" ");
    function getMonthNumber(monthName) {
        const months = {
            Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
            Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
        };
        return months[monthName] || "Invalid month";
    }
    const monthNumStart = getMonthNumber(monthNameStart);    
    const monthNumEnd = getMonthNumber(monthNameEnd);    
    const dateTimeStart = `${yearStart}-${monthNumStart}-${dayStart}`;    
    const dateTimeEnd = `${yearEnd}-${monthNumEnd}-${dayEnd}`;    
    /* End get post start and end dates */

    return (
        <>
            <figure className="postContainer">
                <img src={props.postImg} alt="Mount Fuji" className="postImg"/>
                <div className="postDetails">
                    <p className="postLocation">
                        <img src={props.marker} alt="Location Marker" />
                        JAPAN
                        <a href={props.map} className="googleMap">View on Google Maps</a>
                    </p>
                    <h2 className="postTitle">{props.postTitle}</h2>
                    <p className="postDate"><time dateTime={dateTimeStart}></time>{props.postStartDate} - <time dateTime={dateTimeEnd}>{props.postEndDate}</time></p>
                    <p className="postDesc">{props.postDesc}</p>
                </div>
            </figure>
            <hr />
        </>
    )
}