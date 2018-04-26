import React, { Component } from 'react';

class Local extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <iframe width="800"
                height="600"
                src="https://www.google.com/maps/d/embed?mid=1s_TKCoBOO5fBYLtIn8NJPz1ZsaO5PXrt"  
                allowfullscreen>
        </iframe>
      </div>
    )
  }
}

export default Local;