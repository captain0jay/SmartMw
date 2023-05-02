import React, { Component } from 'react';
import Pageitem from './Pageitem';
export class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
        pagemessage: [], //<!-- put articles: this.articles when you have samle output instead of link -->
    }
  }

  async selfrun(){
    console.log("componentDidMount called");
    try {
    const  data = await fetch("http://localhost:4000/refmsg?plink="+this.props.pagelink);
    const parseddata = await data.json();
    console.log("constructor runnin...");
    console.log(parseddata);
    //console.log(parseddata[0].clustername);
    this.setState({
      pagemessage: parseddata,
    })
  } catch (error) {
    console.error(error);
  }
  }
  async componentDidMount(){
    this.selfrun();
  }
  render() {
    return (
      <>
      {this.state.pagemessage.map((element)=>{//!this.state.loading && 
        return <div className='col-md-3 my-3' key={element.message}>
            <Pageitem clusterlink={element.clusterlink?element.clusterlink:""} emotion={element.emotion} message={element.message}/>
        </div>

      })}
      </>
    )
  }
}

export default Page