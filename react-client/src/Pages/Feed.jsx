import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Feed extends Component {

    constructor() {
        super()
        this.state = { files: [] }
      }
    
      onDrop(files) {
          var tag = document.getElementById("iconUpload")
          if(tag){
            tag.remove()
          }
        
        this.setState({
          files
        });
      }
    
  render() {
    return (
        <div className="ui container center aligned">
            <Dropzone className="dragdrop"  onDrop={this.onDrop.bind(this)}>
                <div id="iconUpload">
                    <i className="huge upload icon" ></i>
                    <h3>Arraste uma imagem ou clique para enviar</h3>
                </div>
                <div >
                <ul className="padZero">
                    {
                    //   this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    this.state.files.map(f => <img width="70%" height="auto" src={f.preview}></img>)
                    }
                </ul>
                </div>
                
            </Dropzone>
          {/* <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside> */}


            <div class="ui feed ">
                <div class="event">
                    <div class="label">
                        <img src="/images/avatar/small/helen.jpg"/>
                    </div>
                    <div class="content">
                        <div class="date">
                            3 days ago
                        </div>
                        <div class="summary">
                            <a>Helen Troy</a> 
                            added 2 photos
                        </div>
                        <div class="extra images">
                            <a><img src="/images/wireframe/image.png"/></a>
                            <a><img src="/images/wireframe/image.png"/></a>
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="label">
                        <img src="/images/avatar/small/laura.jpg"/>
                    </div>
                    <div class="content">
                        <div class="date">
                            3 days ago
                        </div>
                        <div class="summary">
                            <a>Laura Faucet</a> created a post
                        </div>
                        <div class="extra text">
                            Have you seen what's going on in Israel? Can you believe it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Feed;