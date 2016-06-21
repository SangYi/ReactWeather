var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here area few example locations to try out:</p>
      <ul>
        <li>
          <Link to='/?location=Huntsville'>Huntsville, AL</Link>
        </li>
        <li>
          <Link to='/?location=Seoul'>Seoul, South Korea</Link>
        </li>
      </ul>
    </div>
  );
};
module.exports = Examples;
