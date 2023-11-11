import "../scss/Toggle.scss";

function Toggle(props) {
    return (
        <>
            <div className="toggle"></div>

            <div>
                <label className="switch">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onClick={props.toggleDark}
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </>
    );
}

export default Toggle;
