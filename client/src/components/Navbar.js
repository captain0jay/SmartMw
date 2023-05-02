import React, { Component } from 'react'
import PropTypes from 'prop-types'
import imagelogo from "./images/mAIL-logos_black.png"
export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={imagelogo} width="30" height="30" class="d-inline-block align-top" alt=""/>
          mAIL
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
      </>
    )
  }
}
