import React from "react";
import PropTypes from "prop-types";


class NoteInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      max: 50
    };
  }

  handleTitleChange = (event) => {
    const title = event.target.value.slice(0, 49);
    const max = (50-(event.target.value.length));
  
    this.setState({ title, max });
  };

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Call the parent component's onSubmit handler and pass the new note as an argument
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
    });

    // Clear the form inputs
    this.setState({
      title: "",
      body: "",
      max: 50,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="note-input__title__char-limit">Sisa karakter :{this.state.max}</p>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          className="note-input__body"
          cols="30"
          rows="10"
          value={this.state.body}
          onChange={this.handleBodyChange}
        ></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>
    );
  }
}

NoteInputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoteInputForm;