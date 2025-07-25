import {Link} from "react-router";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold">Talentra</p>
            </Link>
            <Link to="/upload">
                Upload Resume
            </Link>
        </nav>
    );
};

export default NavBar;
