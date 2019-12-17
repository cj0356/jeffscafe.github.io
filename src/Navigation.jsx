import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isHomePage: props.isHomePage }
    }
    render() {
        let navbarUrlLabel = {
            "/help": "Help",
            "/about": "About",
            "/menu": "Menu"
        }
        let navbarItemClass = this.state.isHomePage ? "homepage-navbar-item" : "navbar-item"
        const navbarHTML = Object.keys(navbarUrlLabel).map((url, idx) => {
            let label = navbarUrlLabel[url]
            return (
                <a className={"navbar-brand " + navbarItemClass} href={url} key={idx}>{label}</a>)
        })
        const navClass = this.state.isHomePage ? "" : "standard-navbar-header"
        const logoClass = this.state.isHomePage ? "homepage-navbar-logo" : ""
        return (
            <nav className={"navbar navbar-expand-lg homepage-navbar " + navClass}>
                <a className={"navbar-brand navbar-logo " + logoClass} href="/">Jeff's Cafe</a>

                <div className="navbar-items">
                    {navbarHTML}
                </div>

            </nav>
        )
    }
}

export default Navigation;
