import React from 'react';

const Landing = () => (
  <main role="main">
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 text-white">Turn the music up!</h1>
          <p className="text-white">Access your music library from anywhere</p>
          <p><a className="btn btn-secondary btn-lg" href="#" role="button">Learn more >></a></p>
      </div>
    </div>
    <div class="container">
      <div className="row">
        <div className="col-md-4 text-white text-center">
          <img className="music-note" src="if_083_Music_183211.png" alt="music note icon"></img>
          <h2>Choose your music</h2>
          <p>The world is full of music; why should you have to music that someone else chose?</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4 text-white text-center">
          <img className="block-icon" src="if_cancel-2_309095.png" alt="block icon"></img>
          <h2>Unlimited, streaming, ad-free</h2>
          <p>No arbitrary limits. No distractions.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4 text-white text-center">
          <img className="mobile-icon" src="if_BT_iphone_905558.png" alt="mobile icon"></img>
          <h2>Mobile enabled</h2>
          <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      </div>
    </div>
    <footer className="container text-white">
      <p>©︎Bloc Jams 2018</p>
    </footer>
  </main>
);

export default Landing;
