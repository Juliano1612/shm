import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import database from '../firebase/firebase'

class Feed extends Component {

  constructor() {
    super()
    this.state = {
      files: [],
      selectedFile: null
    }
    
  }

  handleLikes(s, f){
    console.log(f.currentTarget, s.state.files)
    console.log("Likei", f.currentTarget.id)
    var updateImage = s.state.files.find(x => x.key == f.currentTarget.id)
    // this.getState((files) => {  console.log(files)})
    console.log(updateImage.likes)
    var newLikes = updateImage.likes + 1
    // updateImage.likes = newLikes
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
    this.fileUploadHandler()
  }

  onDrop(files) {
    var tag = document.getElementById("iconUpload")
    // if (tag) {
    //   tag.remove()
    // }
    this.fileSelectHandler(files)
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
          likes: 0
        }).then(() => {
            console.log('Data is saved!');
            this.fileDownloadHandler()
        }).catch((e) => {
            console.log('Failed.', e);
        });
      }) 
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
            likes: imgArray[i].likes
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

    // database.ref('images')
    // .on('value',
    // (snapshot) => {
    //     // const key = snapshot.key;
    //     // const val = snapshot.val();
    //     var imgArray = this.snapshotToArray(snapshot)
    //     // var res = []
    //     this.setState({files: []})
    //     for(var i = 0; i < imgArray.length; i++){
    //       // console.log(imgArray[i])
    //       var img = {
    //         key: imgArray[i].key,
    //         url: imgArray[i].url,
    //         likes: imgArray[i].likes
    //       }
    //       this.setState(prevState => ({
    //         files: [...prevState.files, img]
    //       }))
    //       // res.push(img)
    //       // console.log(this.state.files)
    //     }
    //     // console.log(this.state.files)       
    // })
  }

  render() {
    // this.fileDownloadHandler();
    // console.log(this.state.files)
    return (
      <div className="ui center aligned grid">
        <div className="ui row">
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
              {/* <div>
                <ul className="padZero">
                  {
                    // this.state.files.map(f =>{<img width="70%" height="auto" src={f.preview}> </img>})
                    // this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                  }
                </ul>
              </div> */}
          </Dropzone>
        </div>
        <div className="ui row">
          <div className="ui four cards">
            {this.state.files &&
              this.state.files.map(f => { return(
              <div id={f.key} onDoubleClick={this.handleLikes.bind(f, this)} class="ui card" >
                <div class="image">
                  <img src={f.url}/>
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
                    <i class="heart outline like icon" ></i>
                    {f.likes} Likes
                  </a>
                </div>
              </div>)
          })}
        </div>
      </div> 
    </div>  
    )
  }
}

export default Feed;