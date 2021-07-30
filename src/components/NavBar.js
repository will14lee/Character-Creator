const NavBar= (props) => {
    return (
        <nav>
            <ul>
                <a href="#"> {props.aboutPages.Home}    </a> 
                <a href="#"> {props.aboutPages.Info}    </a> 
                <a href="#"> {props.aboutPages.Character}</a>
            </ul>
        </nav>
    )
}

export default NavBar;