import React, { Component } from 'react';


class Submition extends Component {
  state = {
    textarea: '',
    image: ''
  }

  handleFileChosen = (e) => {
    let file = e.target.files[0];
    let fileName = e.target.files[0].name;
    document.querySelector('.custom-file-label').innerText = fileName;
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const content = fileReader.result;
      this.setState({
        image: content
      });
    };
    fileReader.readAsDataURL(file);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onCreate(this.state.textarea, this.state.image);
    document.querySelector('textarea').value = "";
    document.querySelector('.custom-file-label').innerText = "Choose Image File";
  }

  render() {
    return (
      <div className="post-submition card">
        <div className="card-header">
          <h2>Share Your Achievements!</h2>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <textarea name="textarea" onChange={this.onChange} className="form-control form-control-lg " placeholder="What did/will you achieve?" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input onChange={this.handleFileChosen} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Image File</label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">Publish</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Submition;
