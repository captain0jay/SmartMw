import React, { PureComponent } from 'react'
import Clusteritem from './Clusteritem';
export class Clusterlist extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
        article: [], //<!-- put articles: this.articles when you have samle output instead of link -->
    }
  }

  async selfrun(){
    console.log("componentDidMount called");
    try {
    const  data = await fetch("http://localhost:4000/getclusters?token="+localStorage.getItem('access_tokenn'));
    const parseddata = await data.json();
    console.log("constructor runnin...");
    console.log(parseddata);
    //console.log(parseddata[0].clustername);
    this.setState({
      article: parseddata,
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
      {this.state.article.map((element)=>{//!this.state.loading && 
        return <div className='col-md-3 my-3' key={element.clustername}>
            <Clusteritem clustername={element.clustername?element.clustername:""} pagelink={element.pagelink} />
        </div>

      })}
      </>
    )
  }
}

export default Clusterlist
