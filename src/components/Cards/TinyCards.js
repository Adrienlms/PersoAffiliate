import React from 'react'

class TinyCards extends React.Component {

    render() {
        return (
            <div className="col-md-2 col-sm-12">
                <div className="cardsino">
                    <img className="c-img" src="" alt=""/>
                    <h5 className="c-title"></h5>
                    <p className="c-details"></p>
                </div>
            </div>
        );
    }
}

export default TinyCards