import React, { Component } from 'react';

const Submition = () => {
  return (
    <div className="post-submition card">
        <div className="card-header">
          <h2>Share Your Achievements!</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control form-control-lg" placeholder="What did/will you achieve?" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose Image file</label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">Publish</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Submition;
