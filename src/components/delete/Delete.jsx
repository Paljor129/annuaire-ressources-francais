import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Delete extends React.Component {

  deleteUser() {
  return axios.delete(`/api/ress/${this.props.id}`);
}

  render() {
    const {titre } = this.props;
    return (
        <div className="card-block mb-4">

            <h2 className='text-center'>{titre}</h2>
            <button onClick={() =>this.deleteUser()} className="btn btn-danger">Danger</button>
        <div className=" card card-block mt-4 mb-4 col-sm-8 col-md-6 col-lg-4">

            <h3 className='text-center'>{titre}</h3>
            <button onClick={() =>this.deleteUser()} className="btn btn-danger">Delete</button>

        </div>
      </div>
    );
  }

}

export default Delete;
