import "../scss/Toggle.scss";


function Toggle() {
    return (
        <>
        <div className="toggle"></div>
           
            <div>
                <label className="switch">
                    <input type="checkbox" id="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </>
    );
    
}

export default Toggle;