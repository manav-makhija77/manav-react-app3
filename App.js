import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  name = "Manav Makhija";
  pageSize=6;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route  path="/" element={<News key={'general'} pagesize={this.pageSize} category={'general'} country={'in'} />} />
            <Route path="/business" element={<News key={'busniess'} pagesize={this.pageSize} category={'business'} country={'in'} />}/>
            <Route path="/entertainment" element={<News key={'entertainment'} pagesize={this.pageSize} category={'entertainment'} country={'in'} />} />
            <Route path="/general" element={<News key={'general'} pagesize={this.pageSize} category={'general'} country={'in'} />} />
            <Route path="/health" element={<News key={'health'} pagesize={this.pageSize} category={'health'} country={'in'} />} />
            <Route path="/science" element={<News key={'science'} pagesize={this.pageSize} category={'science'} country={'in'} />} />
            <Route path="/sports" element={<News key={'sports'} pagesize={this.pageSize} category={'sports'} country={'in'} />} />
            <Route path="/technology" element={<News key={'technology'} pagesize={this.pageSize} category={'technology'} country={'in'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

