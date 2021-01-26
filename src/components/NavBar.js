import React from "react";


class NavBar extends React.Component {

    render() {
        return (
            <div className="col-md-12 col-sm-12 navbarCustom">
                <nav className="offset-1 navbar navbar-expand-lg">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#" >Home</a>
                                <a className="nav-link" href="#" >Features</a>
                                <a className="nav-link" href="#" >Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar

