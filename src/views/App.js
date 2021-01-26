import React from 'react'
import './App.css'
import Cards from '../components/Cards/Cards'
import Carousel from '../components/Carousel'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="col-12 row ml-0 pl-0 pr-0">
                    <div className="col-2 left-bar">
                        <h2 className="text-white">Les derniere Big Wins</h2>
                        <div className="row cardcrypto">
                            <div className="cardcrypto-title">
                                <img src="http://via.placeholder.com/72x72" alt=""/>
                            </div>
                            <div className=" cardcrypto-body">
                                <div className="cardcrypto-header">
                                    <h6 className="text-white">Titre<span className="badge rounded-pill bg-primary">Primary</span></h6>
                                    <p className="text-white">lorem ipsum</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-white">Acheter des crypto</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <Cards></Cards>
                    </div>
                </div>
            </div>
        </div>
  );
  }

}

export default App;
