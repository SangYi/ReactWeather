var React = require('react');

var About = function(props){
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a React Weather App</p>
      <p>Here are some tools I usedp:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS library used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city"
        </li>
      </ul>

    </div>
  );
};

module.exports = About;
