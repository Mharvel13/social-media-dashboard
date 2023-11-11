import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Main from "./components/Main";

function App() {
    const [dark, setDark] = React.useState(false);

    function toggleDark() {
        setDark((prevDark) => !prevDark);
    }

    return (
        <>
            <Header darkMode={dark} toggleDark={toggleDark} />
            <Main darkMode={dark} />
        </>
    );
}

export default App;
