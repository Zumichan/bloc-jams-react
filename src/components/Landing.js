import React from 'react';

const Landing = () => (
  <main role="main">
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Turn the music up!</h1>
          <p>Sample Sample Sample</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more >></a></p>
      </div>
    </div>
    <div class="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Choose your music</h2>
          <p>The world is full of music; why should you have to music that someone else chose?</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Unlimited, streaming, ad-free</h2>
          <p>No arbitrary limits. No distractions.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Mobile enabled</h2>
          <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      </div>
    </div>
    <footer className="container">
      <p>©︎Bloc Jams 2018</p>
    </footer>
  </main>
);

export default Landing;
