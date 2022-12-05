function Blog(props) {
    return (
        <div className="blog">
            <img className="blog--pic" src={props.imageUrl} alt={props.title} />
            <div className="blog--desc">
                <p>
                    <img className="pin" src="../images/map-logo.png" alt="pin"/>
                    <span className="location">{props.location}</span>
                    <span className="map"><a className="map-link" href={props.googleMapsUrl}>View on Google maps</a></span>
                </p>
                <h1 className="blog--title">{props.title}</h1>
                <h3 className="blog--date"> {props.startDate} - {props.endDate}</h3>
                <p className="blog--content">{props.description}</p>
            </div>
        </div>
    );
}

export default Blog;