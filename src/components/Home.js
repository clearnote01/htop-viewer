import axios from 'axios';
import React, { Component } from 'react';
import s from '../styles/home.style';

const URLS = {
  htop: 'http://localhost:5000/api/htop',
  ls: 'http://localhost:5000/api/ls',
  ps: 'http://localhost:5000/api/psauxf',
};

//const URLS = {
  //htop: 'https://db6b4298.ngrok.io/api/htop',
  //ls: 'https://db6b4298.ngrok.io/api/ls',
  //ps: 'https://db6b4298.ngrok.io/api/psauxf',
//};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htopData: 'Loading...',
      lsData: 'Loading...',
      psData: 'Loading...',
      currentCount: 10,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.getHtop();
    this.getLs();
    this.getPs();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  getHtop() {
    axios.get(URLS.htop, {
      crossdomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log('setting state\n\n');
        this.setState({
          htopData: data,
        });
      });
  }
  getLs() {
    axios.get(URLS.ls, {
      crossdomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log('setting state\n\n');
        this.setState({
          lsData: data,
        });
      });
  }
  getPs() {
    axios.get(URLS.ps, {
      crossdomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log('setting state\n\n');
        this.setState({
          psData: data,
        });
      });
  }
  timer() {
    if (this.state.currentCount < 1) {
      this.setState({
        currentCount: 10,
      });
      this.getLs();
      this.getHtop();
      this.getPs();
    } else {
      console.log('Count: ', this.state.currentCount-1);
      this.setState({
        currentCount: this.state.currentCount - 1,
      });
    }
  }
  commandSetter(data) {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '2px',
            borderStyle: 'solid',
            fontSize: '12px',
            overflowY: 'scroll',
            overflowX: 'scroll',
            width: '50vw',
            height: '60vh',
          }}
          className="content" dangerouslySetInnerHTML={{ __html: data }}
        />
        <hr />
      </div>
    );
  }

  render() {
    return (
      <div>
        <pre
          style={{
            position: 'fixed',
            left: '-40%',
            color: 'black',
            fontSize: '1em',
            top: '5%',
          }}
        >
          Refresh in: <span>{this.state.currentCount}</span>
        </pre>
        <p style={s.p}>
          This is pretty useless. htop
          { this.commandSetter(this.state.htopData) }
        </p>
        <p style={s.p}>
          Even more useless things data over here. ls
          { this.commandSetter(this.state.lsData) }
        </p>
        <p style={s.p}>
          You did not think I could go even worse. ps auxf
          { this.commandSetter(this.state.psData) }
        </p>
      </div>
    );
  }
}

export default Home;
