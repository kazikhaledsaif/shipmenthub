import React, { Component } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import  './Home.css'
import axios from 'axios';
export class Home extends Component {
    constructor() {
        super();
        this.state = {
            shipments: [],
            columns: [{
                dataField: 'id',
                text: 'Id',
                filter: textFilter()

            },

            {

                dataField: 'name',

                text: 'Name',

                sort: true,
                editable: true,
                editor: {
                    type: Type.TEXTAREA
                },
                editCellClasses: 'custom-class'


            },
            {

                dataField: 'mode',

                text: 'Mode',

                sort: true

            },
            {

                dataField: 'type',

                text: 'Type',

                sort: true

            },
            {

                dataField: 'destination',

                text: 'Destination',

                sort: true

            },
            {

                dataField: 'origin',

                text: 'Origin',

                sort: true

            },
            {

                dataField: 'total',

                text: 'Total',

                sort: true

            }
                ,
            {

                dataField: 'userId',

                text: 'User Id',

                sort: true

            },
            {

                dataField: 'status',

                text: 'Status',

                sort: true

            },
            {
                dataField: "Action",
                text: "Action",
                formatter: this.linkView,
                sort: true
            }],
            show: false,
        }

        this.onViewClicked.bind(this);
        this.onSaveClicked.bind(this);
    }

    componentDidMount() {


        this.tableItemLoad()
    }

    tableItemLoad() {
        axios.get('/shipments').then(response => {

            console.log(response.data);

            this.setState({

                shipments: response.data

            });

        });
    }

    linkView = (cell, row, rowIndex, formatExtraData) => {
        return (
            <button
                onClick={() => {
                    this.onViewClicked(row);
                }}
            >
                View
            </button>
        );
    };
    onViewClicked(row) {

        //console.log(row);

        this.props.history.push({
            pathname: '/details',
            state: row
        }
        );
    }
    onSaveClicked(oldValue, newValue, row) {
        console.log(oldValue)
        console.log(newValue)
        console.log(row.id)
        const data = {
            name: newValue,
        }
        axios.patch('/shipments/' + row.id, data)
            .then((response) => {
                console.log(response)
                this.tableItemLoad()
            })
            .catch((error) => {
                throw ('error', error);
            });


    }
    render() {


        return (

            <div className="container-fluid">



                <div className="container">
                <h1 className="heading-class"> All Shipments</h1>
                <p className="tooltip-class">double click on Name field to edit and click any wahre to update the value</p>

                </div>

                


                <div  className="container" >

                    <BootstrapTable

                        bootstrap4
                        striped

                        cellEdit={cellEditFactory(
                            {
                                mode: 'dbclick',
                                blurToSave: true,
                                afterSaveCell: this.onSaveClicked.bind(this)
                            })}

                        hover

                        keyField='id'

                        data={this.state.shipments}

                        columns={this.state.columns}
                        filter={filterFactory()}
                        pagination={paginationFactory({ sizePerPage: 20, hideSizePerPage: true })}></BootstrapTable>

                </div>

            </div>

        )

    }

}



export default Home 