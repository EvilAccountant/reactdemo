import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
// import Title from "./compoments/Title";
// import Servant from "./compoments/Servant";
// import Method from "./compoments/Method";
// import FormMeth from "./compoments/FormMeth";
// import FormMeth2 from "./compoments/FormMeth2";
// import Twowaybind from "./compoments/Twowaybind";
// import ReactForm from "./compoments/ReactForm";
// import Todolist from "./compoments/Todolist";
// import Todolist2 from "./compoments/Todolist2";
// import Home from "./compoments/Home";
// import AxiosTest from "./compoments/AxiosTest";
// import JsonPTest from "./compoments/JsonPTest";
import Lifecycle from "./compoments/Lifecycle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/*<Title/>*/}
            {/*<Servant/>*/}
            {/*<Method/>*/}
            {/*<FormMeth/>*/}
            {/*<FormMeth2/>*/}
            {/*<Twowaybind/>*/}
            {/*<ReactForm/>*/}
            {/*<Todolist/>*/}
            {/*<Todolist2/>*/}
            {/*<Home/>*/}
            {/*<AxiosTest/>*/}
            {/*<JsonPTest/>*/}
            <Lifecycle/>
        </header>
      </div>
    );
  }
}

export default App;
