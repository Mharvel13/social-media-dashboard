function Updates(props) {
    return (
        <>
            <div className={`updates__card  ${props.darkMode ? " dark-card" : " "}`}>
                <div className="updates__card__header">
                    <p>{props.item.title}</p>
                    <img src={props.item.iconImage} alt="social-icon" />
                </div>

                <div className="updates__card__stats">
                    <p>{props.item.numbers}</p>
                    <div className="updates-card-stats">
                        <img src="./images/icon-down.svg" alt="arrow-icon" />
                        <p> {props.item.percentage} % </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Updates;
