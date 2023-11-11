import Toggle from "./Toggle";

function Header() {
    
    return (
        <header className="header dark-bg-top">
            <div>
                <h1>Social Media Dashboard</h1>
                <p className="light__text">Total Followers: 23,000</p>
            </div>
            <div className="toggle__side"> 
                <p>Dark Mode</p>
                <Toggle/>
            </div>
        </header>
    );
}


export default Header;