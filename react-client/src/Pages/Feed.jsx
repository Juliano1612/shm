import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import database from '../firebase/firebase';

class Feed extends Component {

  constructor() {
    super()
    this.state = {
      files: [],
      selectedFile: null
    }
  }

  handleLikes(s, f){
    // console.log(f.currentTarget, s.state.files)
    // console.log("Likei", f.currentTarget.childNodes[2].childNodes[0])
    var updateImage = s.state.files.find(x => x.key == f.currentTarget.id)
    // console.log(updateImage.likes)
    var newLikes = updateImage.likes + 1
    updateImage.likes = newLikes
    s.forceUpdate()
    database.ref('images/' + f.currentTarget.id).update({
        likes: newLikes
    });
  }

  componentWillMount() {
    this.fileDownloadHandler()
    console.log(this.state.files)
  }

 

  fileSelectHandler (file){
    console.log(file)
    this.state.selectedFile = file[0]

    // this.fileUploadHandler()
  }

  onDrop(files) {
    var tag = document.getElementById("iconUpload")
    // if (tag) {
    //   tag.remove()
    // }
    this.fileSelectHandler(files)
    document.getElementById("hidePreviewCard").hidden = !document.getElementById("hidePreviewCard").hidden
    document.getElementById("dropZone").hidden = !document.getElementById("dropZone").hidden
    document.getElementById("previewImage").src = this.state.selectedFile.preview 
    // this.setState({files});
  }

  fileUploadHandler () {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('https://us-central1-casorio-2206.cloudfunctions.net/uploadFile', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ', Math.abs((progressEvent.loaded / progressEvent.total) * 100, '%'))
      }
    })
      .then(res => { 
        database.ref('images').push({
          url: res.data.message,
          likes: 0,
          submiter: document.getElementById("previewSubmiter").value,
          title: document.getElementById("previewTitle").value,
          description: document.getElementById("previewTextArea").value
        }).then(() => {
            console.log('Data is saved!');
            this.fileDownloadHandler()
        }).catch((e) => {
            console.log('Failed.', e);
        });
      }) 
  }

  handleCancelButton() {
    document.getElementById("hidePreviewCard").hidden = !document.getElementById("hidePreviewCard").hidden
    document.getElementById("dropZone").hidden = !document.getElementById("dropZone").hidden
  }

  handleUploadButton(){
    document.getElementById("hidePreviewCard").hidden = !document.getElementById("hidePreviewCard").hidden
    document.getElementById("dropZone").hidden = !document.getElementById("dropZone").hidden
    this.fileUploadHandler()
  }

  snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

  fileDownloadHandler () {
    database.ref('images')
    .once('value')
    .then((snapshot) => {
        // const key = snapshot.key;
        // const val = snapshot.val();
        var imgArray = this.snapshotToArray(snapshot)
        // var res = []
        this.setState({files: []})
        for(var i = 0; i < imgArray.length; i++){
          // console.log(imgArray[i])
          var img = {
            key: imgArray[i].key,
            url: imgArray[i].url,
            likes: imgArray[i].likes,
            title: imgArray[i].title,
            submiter: imgArray[i].submiter,
            description: imgArray[i].description
          }
          this.setState(prevState => ({
            files: [...prevState.files, img]
          }))
          // res.push(img)
          // console.log(this.state.files)
        }
        console.log(this.state.files)       
    })
    .catch((e) => {
        console.log('Error fetching data', e);
        return null
    });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui center aligned grid">
        <div className="ui row">
          <Dropzone
              id="dropZone"
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
              
          </Dropzone>
          <div id="hidePreviewCard" hidden>
          
          <div id="previewCard" class="ui card">
                <div class="image">
                  <img id="previewImage" src={this.state.selectedFile}></img>
                </div>
                <div class="content center aligned" >
                  <div className="ui form ">
                    <div className="ui fluid input field">
                      <input id="previewSubmiter" placeholder="Digite seu nome" type="text"/>
                    </div>
                    <div className="ui fluid input field">
                      <input id="previewTitle" placeholder="Digite um título" type="text"/>
                    </div>
                    <div class="ui fluid input field">
                      <textarea id="previewTextArea" rows="2" placeholder="Digite uma descrição"></textarea>
                    </div>
                  </div>
                  
                </div>
                <div class="extra content fluid center aligned">
                  <button className="ui red button left aligned" onClick={this.handleCancelButton.bind(this)}>Cancelar</button>
                  <button className="ui green button right aligned" onClick={this.handleUploadButton.bind(this)}>Salvar</button>
                </div>
              </div>
              </div>
        </div>
        <div className="ui row">
          <div className="ui four cards">
            {this.state.files &&
              this.state.files.map(f => { return(
              <div id={f.key} onDoubleClick={this.handleLikes.bind(f, this)} class="ui card" >
                <div class="image">
                  <img src={f.url}/>
                </div>
                <div class="content center aligned">
                  <a class="header">{f.title}</a>
                  <div class="meta">
                    <span class="date">Enviado por {f.submiter}</span>
                  </div>
                  <div class="description">
                    {f.description}
                  </div>
                </div>
                <div class="extra content center aligned">
                  <a>
                    <i class="heart outline like icon" ></i>
                    {f.likes} Likes
                  </a>
                </div>
              </div>)
          })}
        </div>
      </div> 
    </div>
      </div>
        
    )
  }
}

export default Feed;