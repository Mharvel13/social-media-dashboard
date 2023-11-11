import Card from "./Card";
import Updates from "./Updates";
import data from "../data/CardData";
import updates from "../data/UpadateData";

const cardData = data.map((item) => {
    return (
        // <h2>{ item.social}</h2>
        
        <Card key={item.id} item={item} darkMode={false} />
    );
});

const updatesData = updates.map((item) => {
    return (
        // <h2>{ item.social}</h2>
        <Updates key={item.id} item={item} />
    );
});

function Main(props) {
    console.log(data);
    return (
        <main className= {props.darkMode ? " dark" : " "}>
            <section className="social__cards">
                {/* <Card/> */}
                {cardData}
            </section>

            <section>
                <h3 className="overview">Overview - Today</h3>
                <div className="updates__cards__section">
                    {/* <Updates/> */}
                    {updatesData}
                </div>
            </section>
        </main>
    );
}

export default Main;
