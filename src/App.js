import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: 'Yudai Noda', age: 29},
    {name: "Haruka Tonoike", age: 27},
    {name: "Kishida Minami", age: 34}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}></User>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}. I am {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
