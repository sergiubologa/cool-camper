import React from "react";

export default class ScrollListener extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.props.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.onScroll);
  }

  render() {
    return this.props.children;
  }
}
