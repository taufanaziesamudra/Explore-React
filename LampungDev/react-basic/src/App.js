// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import Component1 from './components/Component1';
// import Component2 from './components/Component2';
// import Biodata from './components/Biodata';
// import NewBiodata from './components/NewBiodata';
// import Component4 from './components/Component4';
// import Counter from './components/Counter';
import FormInput from './components/FormInput';
import LatihanState from './components/LatihanState';
// import Posts from './components/Posts';

class App extends Component {
  render () {
    return (
      <div className="App">
      {/* <h1>Hello World {console.log("Halooooooo")}</h1>
      <h2>Hallo</h2>
      <input type="text" placeholder="Belajar React JS"></input> */}
      {/* <Component1 />
      <Component2 /> */}

      {/* Data dari StateFull Component */}
      {/* <Biodata nama="Taufan Ajie Samudro" semester="8" hobi={<Hobi />}/>
      <Biodata nama="Komeng" semester="6"/> */}

      {/* Data dari StateLess Component */}
      {/* <NewBiodata nama="Budi" semester="7" hobi={<Hobi />} /> */}

      {/* <Component4 />  */}

      {/* <Counter /> */}

      {/* <FormInput /> */}

      {/* <Posts /> */}

      <LatihanState />
      </div>
    )
  }
}

/* const Hobi = () => {
  return (
    <ul>
      <li>Jogging</li>
      <li>Berenang</li>
      <li>Bertarung</li>
    </ul>
  )
} */

export default App;
