import React from "react";

export default class ScrollListener extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.props.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
  }

  render() {
    return this.props.children;
  }
}
