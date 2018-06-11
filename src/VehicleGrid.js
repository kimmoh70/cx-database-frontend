import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { vehicles, vehicleStore } from './reducer';
import { fetchVehicles } from './actions';
import { connect } from 'react-redux';

class VehicleGrid extends Component {
  constructor(props) {
    super(props);
    this.getVehicles = this.getVehicles.bind(this);
    const unsubscribe = vehicleStore.subscribe(function () {
      this.props.vehicles = vehicleStore.getState();
    });
  }

  getVehicles(params) {
    this.props.fetchVehicles(params);
  }

  componentDidMount() {
    this.getVehicles();
  }

  render() {
    const data = this.props.vehicles || [];

    // const data = [{
    //     id: '1',
    //     year: '1980',
    //     model: 'CX',
    //     variant: 'GTI',
    //     colour: 'Rouge Massena',
    //     description: 'good',
    //     friend: {
    //       name: 'Jason Maurer',
    //       age: 23,
    //     }
    //   }]
    
      const columns = [{
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Year',
        accessor: 'year'
      },
      {
        Header: 'Model',
        accessor: 'model'
      },{
        Header: 'Colour',
        accessor: 'colour'
      }, {
        Header: 'Variant',
        accessor: 'variant'
      }, {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Location',
        accessor: 'location'
      },
      {
        Header: 'Owners',
        accessor: 'owners'
      },{
        Header: 'Other',
        accessor: 'other'
      },
        {
            Header: 'Vin',
            accessor: 'vin'
          },
          {
            Header: 'Gearbox',
            accessor: 'gearbox'
          },
          {
            Header: 'Rego',
            accessor: 'rego'
          },
          {
            Header: 'Engine',
            accessor: 'engine'
          }
    //       ,
    //   {
    //     id: 'friendName', // Required because our accessor is not a string
    //     Header: 'Friend Name',
    //     accessor: d => d.friend.name // Custom value accessors!
    //   }, {
    //     Header: props => <span>Friend Age</span>, // Custom header components!
    //     accessor: 'friend.age'
    //   }
    ]
    return (
      <div className="VehicleGrid">
        <h1>Vehicles</h1>
        <ReactTable
            data={data}
            columns={columns}
        />
      </div>
    );
  }
}

// export default VehicleGrid;

const mapStateToProps = state => ({
  vehicles: state.vehicles
});

const mapDispatchToProps = {
  fetchVehicles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleGrid);
