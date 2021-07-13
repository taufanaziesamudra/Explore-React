import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import Content from './component/Content';

function Header(props) {
  return (
    <div>
      Header
      <div>
        Ini sub header{props.subHeader}
      </div>
    </div>
  )
}


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tahun: 0
    }
  }
  render() {
    if (this.props.tahun < 2021) {
      return null
    } else {
      return (
        <div>
          Ini halaman Footer {this.props.isiFooter}
          <div>{this.props.tahun + 2}</div>
          <div>{this.state.tahun}</div>
          <button onClick={() => this.setState({ tahun: 202030 })}>Jancuk</button>
        </div>
      )
    }
  }
}



function App() {
  return (
    <div className="App">
      <h1>Helo World</h1>
      <Header subHeader={"Sub header 1"} />
      <Header subHeader={"Sub header 2"} />
      <Content isiContent="Ini dari Content" />
      <Footer isiFooter={"Ini isi halaman footer"} tahun={2021} />
    </div>
  );
}

export default App;
