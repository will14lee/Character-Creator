const NavBar= ({aboutPages}) => {
    return (
        <nav>
            <ul>
                <a href="http://localhost:3000/"> {aboutPages.Home}    </a> 
                <a href="http://localhost:3000/"> {aboutPages.Info}    </a> 
                <a href="http://localhost:3000/"> {aboutPages.Character}</a>
            </ul>
        </nav>
    )
}

export default NavBar;