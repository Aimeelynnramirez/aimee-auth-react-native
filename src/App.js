

import React, { Component } from 'react';

import './App.css';
import LoginScreen from './LoginScreen';
import UploadScreen from './UploadScreen';
import UploadPage from './UploadPage';
const list = ["Bill","Jean","Sally","Lucy"]
 let newListItem =["Benny","Louis"]
 list.child = list.newListItem;
//  $( "<div>Names:"+ "<br>"+ list + "," + this.newListItem +"</div>" ).appendTo( ".inner" );

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
        <UploadPage/>
        
      </div>
    );
  }
}


const style = {
  margin: 15,
  backgroundColor: '#000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
};
export default App;
