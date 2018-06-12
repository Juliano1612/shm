import React, {Component} from 'react';
import Dropzone from 'react-dropzone'

class Feed extends Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    var tag = document.getElementById("iconUpload")
    if (tag) {
      tag.remove()
    }

    this.setState({files});
  }

  // uploadSuccess({data}) {
  //   return {type: 'UPLOAD_DOCUMENT_SUCCESS', data};
  // }

  // uploadFail(error) {
  //   return {type: 'UPLOAD_DOCUMENT_FAIL', error};
  // }

  // uploadDocumentRequest({file, name}) {
  //   let data = new FormData();
  //   data.append('file', document);
  //   data.append('name', name);

  //   return (dispatch) => {
  //     axios.post('/files', data)
  //   };
  // }

  render() {
    return (
      <div className="ui container center aligned">
        <Dropzone
          className="dragdrop"
          onDrop={this.onDrop.bind(this)}>
          <div className="ui two column grid middle aligned centered " id="iconUpload">
            <div className="two wide column">
              <span className="left">
                <i className="big upload icon"></i>
              </span>

            </div>
            <div className="ten wide column">
              <h3 align="left">Arraste uma imagem ou clique para enviar</h3>
            </div>
          </div>
          <div>
            <ul className="padZero">
              {
                this.state.files.map(f =>{<img width="70%" height="auto" src={f.preview}> </img>})
                // this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
            </ul>
          </div>

        </Dropzone>

    
        {/* <div className="ui four column grid">

          <div class="ui card column ">
            <div class="image">
              <img src="/images/avatar2/large/kristy.png"/>
            </div>
            <div class="content">
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="heart outline like icon"></i>
                22 Likes
              </a>
            </div>
          </div>
        </div> */}

      </div>
    )
  }
}

export default Feed;