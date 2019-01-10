import React from "react";
import Button from "../../../components/inputs/button";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {}

  render() {
    return (
      <div>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Numele complet..."
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="you@example.com"
        />
        <label htmlFor="message">Mesaj</label>
        <textarea
          name="message"
          id="message"
          placeholder="Mesajul pe care vrei sa ni-l trimiti..."
        />
        <Button onClick={this.onSubmit}>Trimite mesajul</Button>
      </div>
    );
  }
}
