import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home/Home';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloWorld from "./component/HelloWorld";
// import StateFullComponent from "./container/StateFullComponent";
// import YoutubeComp from "./component/YoutubeComp/YoutubeComp";
// import {createStore} from 'redux';
// import {Provider} from 'react-redux'
// import rootReducer from './redux/reducer/globalReducer'

/* const globalState = {
  totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'PLUS_ORDER'){
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if(action.type === 'MINUS_ORDER'){
      let totalOrder = 0;
      if(state.totalOrder > 0){
          totalOrder = state.totalOrder - 1
      }
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
  }
  return state
} */

// Store
/* const storeRedux = createStore(rootReducer); */

/* ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>,document.getElementById('root')); */

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
