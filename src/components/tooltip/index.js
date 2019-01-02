import React from "react";
import Popover from "react-popover";
import QuestionMark from "../svg/question";
import IconButton from "../inputs/icon-button";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <Popover
        isOpen={isOpen}
        body={children}
        place="above"
        onOuterAction={this.onClick}
        tipSize={7}
        enterExitTransitionDurationMs={0}
        refreshIntervalMs={0}
      >
        <IconButton onClick={this.onClick} className="popover__button">
          <QuestionMark width={17} />
        </IconButton>
      </Popover>
    );
  }
}
