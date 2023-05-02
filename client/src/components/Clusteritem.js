import React, { PureComponent } from 'react'

export class Clusteritem extends PureComponent {
  openform = async()=>{
    window.location.assign('http://localhost:3000'+this.props.pagelink);
  };
  render() {
    return (
      <>
        <div className="card bg-primary text-white mb-4" style={{width: '100%'}}>
            <div className="card-body">{this.props.clustername}</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
                <button className="btn btn-unstyled  shadow-none" onClick={this.openform} href={this.props.pagelink}>Explore collections...</button>
                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
        </div>
      </>
    )
  }
}

export default Clusteritem
