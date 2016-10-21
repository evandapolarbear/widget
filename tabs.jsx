import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  setContent(num) {
    // e.preventDefault();
    if(num===0) {
      this.setState({index: 0});
    } else if (num===1) {
      this.setState({index: 1});
    } else {
      this.setState({index: 2});
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><h2 onClick={this.setContent.bind(this, 0)}>{this.props.tabs[0].title}</h2></li>
          <li><h2 onClick={this.setContent.bind(this, 1)}>{this.props.tabs[1].title}</h2></li>
          <li><h2 onClick={this.setContent.bind(this, 2)}>{this.props.tabs[2].title}</h2></li>
        </ul>
        <article>
          {this.props.tabs[this.state.index].content}
        </article>
      </div>
    );
  }
}



export default Tabs;
