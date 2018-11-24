import React from "react";
import TopProgressBar from "../../components/top-progress-bar";

export default LayoutComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showProgressBar: true
      };
    }

    componentDidMount() {
      this.setState({
        showProgressBar: false
      });
    }

    render() {
      return (
        <React.Fragment>
          <LayoutComponent {...this.props} />
          <TopProgressBar show={this.state.showProgressBar} />
        </React.Fragment>
      );
    }
  };
};
