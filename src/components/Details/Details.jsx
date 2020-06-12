import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import image from '../../assets/img/box.svg';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {

            shipment: {}

        }
     this.onEditClicked.bind(this);
    }
    onEditClicked() {

        console.log(this.props.history.location.state)


    }
    componentDidMount() {


        this.setState({

            shipment: this.props.history.location.state

        });
    }
      


   
    render() {
   
    
        return (
            

            <div className="container ">
      
                <div className="jumbotron mt-5">
                    <h1 className="text-center">Shipment Details</h1>
                    <div className="row">
                      
                        <div className="col-lg-5 col-md-6 col-sm-6">


                            <img src={image} height="400" width="400" alt="background" className="img-responsive" />

                        </div>


                        <div className="col-lg-7 col-md-6 col-sm-6 ">


                            <table className="table col-md-6 mt-5 ml-5">
                                <tbody>
                                    <tr>
                                        <td>Shipment ID</td>
                                        <td> {this.state.shipment.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.shipment.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Mode</td>
                                        <td>{this.state.shipment.mode}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{this.state.shipment.type}</td>
                                    </tr>
                                    <tr>
                                        <td>User Id</td>
                                        <td> {this.state.shipment.userId}</td>
                                    </tr>
                                    <tr>
                                        <td>Destination</td>
                                        <td>{this.state.shipment.destination}</td>
                                    </tr>
                                    <tr>
                                        <td>Origin</td>
                                        <td>{this.state.shipment.origin}</td>
                                    </tr>

                                    <tr>
                                        <td>Total</td>
                                        <td>{this.state.shipment.total}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{this.state.shipment.status}</td>
                                    </tr>
                                 

                                </tbody>

                            </table>
                  
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Details;