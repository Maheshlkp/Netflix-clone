import './App.css';
import React from "react";
import Row from './Row'
import requests from "./requests"
// import { request } from 'http';

function App () {
  return (
    <div className="App">
      <h2>Test App</h2>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>

    </div>
  );
}

export default App;
