
function Card(props) {
    const borderStyle = {
        borderTopWidth: "5px",
        borderTopStyle: "solid",
        borderTopColor: props.item.color,
    };

    // className={`container${some condition ? ' bg-green' : ''}`} - Answer from stackoverflow on how to add multiple classname that also contains a conditional classname
    return (
        <div
            className={`card ${props.darkMode ? " dark-card" : " "}`}
            style={borderStyle}
        >
            <div className="socials__indicator">
                <img src={props.item.iconImage} alt="Social-icon" />
                <p>{props.item.username}</p>
            </div>
            <div className="followers">
                <h2>{props.item.audienceNumbers}</h2>
                <p>{props.item.audience}</p>
            </div>
            <div className="followers__changes">
                <img src="./images/icon-up.svg" alt="down-icon" />
                <p>{props.item.percentage} Today</p>
            </div>
        </div>
    );
}

export default Card;
