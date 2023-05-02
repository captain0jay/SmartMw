import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Clusterform extends Component {
  static propTypes = {}
    constructor(props){
        super(props);
    }
    async turntolist(){
      console.log("stform changed to false");
      this.props.setForm(false);
    }

  render() {
    return (
      <>
      <form method="POST" action="/ccluster">
        <div className="form-group">
            <label>Cluster Name</label>
            <div class="form-group d-none">
                <input type="hidden" class="form-control" name="value" value={localStorage.getItem('access_tokenn')}/>
            </div>
            <input type="text" className="form-control" id="cluster" name="cluster" placeholder="Enter Cluster name"/>
            <small id="emailHelp" className="form-text text-muted">Write the name of your cluster here!</small>
            <input type="text" className="form-control" id="clusterlink" name="clusterlink" placeholder="Cluster link"/>
            <small id="emailHelp" className="form-text text-muted">Enter your cluster Link here!</small>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => this.props.setForm(false)}>Create Cluster</button>
        </form>
      </>
    )
  }
}

export default Clusterform
