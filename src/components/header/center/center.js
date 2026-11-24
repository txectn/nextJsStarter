import NavBar from "../navBar/navBar";

export default function HeaderCenter({className="", ...props}) {
    return (
        <div className={`${className}`} {...props}>
            <NavBar />
        </div>
    );
}