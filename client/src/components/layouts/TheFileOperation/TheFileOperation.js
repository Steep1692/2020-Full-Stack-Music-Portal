import React from 'react';
import './TheFileOperation.scss';

import api from "../../../services/api";

import { connect } from 'react-redux';

class TheFileOperation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      file: null,
    }

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('title', this.state.title)
    formData.append('description', this.state.description)
    formData.append('file', this.state.file)

    api.addFile(formData)
      .then((responce) => {
        console.log(responce)
      });
  }

  render() {
    const { title, description } = this.state;

    return (
      <div className="the-files-operation-component">
        <h1>File Operation</h1>
        <div className="base-div">
          <form
            onSubmit={this.onSubmitForm}
            encType="multipart/form-data">
            <div className="form-field">
              title
               <input
                value={title}
                onChange={e=>this.setState({title: e.target.value})}
                name="title"
                type="text"
                required />
            </div>
            <div className="form-field">
              description
               <input
                value={description}
                onChange={e=>this.setState({description: e.target.value})}
                name="description"
                type="text"
                required />
            </div>
            <div className="form-field">
              file
              <input
                onChange={e=>this.setState({file: e.target.files[0]})}
                name="file"
                type="file"
                accept=".mp3, .wav"
                required />
            </div>
            <div className="form-field">
              <button
                type="submit">add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    store: state.fileReducer,
  };
};

export default connect(mapStateToProps)(TheFileOperation);