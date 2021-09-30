import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Detect from './components/Detect';
import Rank from './components/Rank';
import Signout from './components/Signout';
import SignIn from './components/SignIn';
import Register from './components/Register';
import FaceRecognition from './components/FaceRecognition';
import 'tachyons';
import Particles from 'react-particles-js'; 
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '08a2df825bf64ad1b819cf33abc1ff21'
});

const particleParam = {
                particles: {
                 number:{
                  value:100,
                  density:{
                    enable:true,
                    value_area:800
                  }
                 }
                }
              }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map(region => region.region_info.bounding_box)
    const image = document.getElementById('input_image')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    return clarifaiFace.map(face => {
      return{
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
    })
  }

  displayBoundingBox = (boxes) => {
    // console.log(box)
    this.setState({boxes: boxes})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetect = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayBoundingBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

  // onRouteChange = (route) => {
  //   if(route === 'signout')
  //     this.setState({isSignedIn: false})
  //   else if(route === 'home'){
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route:route})
  // }

  render(){
    return (
      <div>
        <Particles params={particleParam} className='particle'/>
        {/*<Signout isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>*/}
        {/*{ this.state.route==='home' ?*/}
          
          <div>
            <Logo />
            <Rank />
            <Detect onInputChange = {this.onInputChange} onDetect = {this.onDetect}/>
            <FaceRecognition boxes={this.state.boxes} imgUrl={this.state.imgUrl} />
          </div>
         {/* : (
              this.state.route ==='signin' ?
              <SignIn onRouteChange={this.onRouteChange}/> 
              : <Register onRouteChange={this.onRouteChange}/>
            )
        }*/}
      </div>
    );
  }
}

export default App;
