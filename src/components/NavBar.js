import { Link } from 'react-router-dom';
const NavBar= () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/Information">Information</Link></li> 
                <li><Link to="/Created-Characters">Created Characters</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;