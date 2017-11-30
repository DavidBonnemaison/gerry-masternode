import React, { Component } from 'react';
import gerry from './gerry.png';
import discord from './discord.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="light">
          <div className="container">
            <div className="half">
              <img src={gerry} className="App-logo" alt="logo" />
            </div>
            <div className="half">
              <h1>Masternode Services platform</h1>
              <p>Coming soon</p>
              <a
                href="https://discord.gg/cSnnWAg"
                className="Discord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Join the Discord</span>
                <img src={discord} alt="Join the discord" />
              </a>
            </div>
          </div>
        </section>
        <section className="dark">
          <h2>Services offered</h2>
          <div className="half">
            <ul>
              <li>Escrow any coin pair 3.5% fee</li>
              <li>Masternode installation, maintenance, and repair</li>
              <li>Shared masternode services</li>
            </ul>
          </div>
          <div className="half">
            <blockquote>
              Shared hosting is offered for any good masternode coin. I charge 5% of the seat up
              front as setup costs and take 5% of the rewards, paid weekly.
              <br />
              <br />
              So if a node costs 1000 coins, it is divided into 10 seats of 100 each. The upfront
              fee is 5, so 105 per seat. If the node earns 100 coins that week, each seat receives 10
              coins, minus the 5% fee, so 9.5 coins per seat.
              <br />
              <div>
                - Gerry, on{' '}
                <a
                  href="https://bitcointalk.org/index.php?topic=2380941.0"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  bitcointalk.org
                </a>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
