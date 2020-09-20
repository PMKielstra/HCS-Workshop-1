import React from "react";
class HiremeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', extramath: props.extramath};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }

  render() {
    return (<>
          <select value={this.state.value} onChange={this.handleChange} ><option value="">Select a job</option><option value={"I'll do your algebra, I'll do your analysis, and, for time and a half, I'll do your "  + this.state.extramath + ".  For your safety and mine do not ask me to do topology."}>Hire me for math</option><option value="I know every programming language there is.  The fact I can't code in most of them is testament to my genius: I have transcended the need to produce to understand.">Hire me for coding</option><option value="I like dogs.">Hire me to walk your dog</option></select>
<p>
{this.state.value}
</p></>
    );
  }
}
export default HiremeForm
