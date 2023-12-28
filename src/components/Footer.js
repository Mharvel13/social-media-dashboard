export default function Footer(props) {
    return (
        <footer className={`${props.darkMode ? "dark-bg-top" : " "}`}>
            <div className="attribution">
                <p>
                    Challenge by
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Frontend Mentor.
                    </a>
                </p>
                <p>
                    Coded by{" "}
                    <a href="https://github.com/Mharvel13"> Marvel Victor</a>.
                </p>
            </div>
        </footer>
    );
}
