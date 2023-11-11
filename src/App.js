import Header from "./components/Header";
import "./App.scss";
import Main from "./components/Main";

function App() {
    return (
        <>
        <Header />
            <Main darkMode={true }/>
        </>
    );
}

export default App;
