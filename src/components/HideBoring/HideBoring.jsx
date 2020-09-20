import React from "react";

class HideBoring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hiding: false, boringclass: props.boringclass};
    this.hideOrShowBoring = this.hideOrShowBoring.bind(this);
  }

  hideOrShowBoring(event) {
    this.setState({hiding: !this.state.hiding});
    var eltsToHide = document.getElementsByClassName(this.state.boringclass);
    for(var i = 0; i < eltsToHide.length; i++){
      eltsToHide[i].style.display = this.state.hiding ? "list-item" : "none";
    }
  }

  getMessage() { return this.state.hiding ? "Show all experience" : "Show only interesting experience"; }

  render() {
    return (<>
      <button onClick={this.hideOrShowBoring}>{this.getMessage()}</button>
    </>);
  }
}
export default HideBoring;
