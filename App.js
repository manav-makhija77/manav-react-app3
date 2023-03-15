import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  name = "Manav Makhija";
  apiKey=process.env.REACT_APP_API;
  pageSize=6;
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <NavBar />
      <LoadingBar
        height={3} 
        color='#f11946'
        progress={this.state.progress}
        />
          <Routes>
            <Route  path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key={'general'} pagesize={this.pageSize} category={'general'} country={'in'} />} />
            <Route path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={'busniess'} pagesize={this.pageSize} category={'business'} country={'in'} />}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={'entertainment'} pagesize={this.pageSize} category={'entertainment'} country={'in'} />} />
            <Route path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={'general'} pagesize={this.pageSize} category={'general'} country={'in'} />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key={'health'} pagesize={this.pageSize} category={'health'} country={'in'} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={'science'} pagesize={this.pageSize} category={'science'} country={'in'} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  key={'sports'} pagesize={this.pageSize} category={'sports'} country={'in'} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key={'technology'} pagesize={this.pageSize} category={'technology'} country={'in'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

