import React, { Component } from 'react'

export default class Pageitem extends Component {
  render() {
    return (
      <>
      <div className="card bg-primary text-white mb-4" style={{width: '100%'}}>
            <div className="card-body">{this.props.message}</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
                <p>{this.props.emotion}</p>
                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
        </div>
      </>
    )
  }
}
