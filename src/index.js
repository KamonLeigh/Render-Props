import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Central styles object
const styles = {
  fontSize: 20,
  borderRadius: 10,
  letterSpacing: 2,
  color: "#fff",
  padding: "10px 20px"
};

class ClickButton extends React.Component {
  state = {
    clicked: false
  };

  toggleState = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return <>{this.props.children(this.state.clicked, this.toggleState)}</>;
  }
}

// Write three different buttons

const CancelButton = ({ clicked, toggleState }) => {
  const style = {
    ...styles,
    backgroundColor: clicked ? "#868e96" : "#dc3545"
  };

  return (
    <button onClick={toggleState} style={style}>
      cancel
    </button>
  );
};

const PrimaryButton = ({ clicked, toggleState }) => {
  const style = {
    ...styles,
    backgroundColor: clicked ? "#868e96" : "#007bff"
  };

  return (
    <button onClick={toggleState} style={style}>
      Primary
    </button>
  );
};

const WarningButton = ({ clicked, toggleState }) => {
  const style = {
    ...styles,
    backgroundColor: clicked ? "#868e96" : "#ffc107"
  };

  return (
    <button onClick={toggleState} style={style}>
      Warning!
    </button>
  );
};

//
function App() {
  return (
    <div className="App">
      <h1> Render Props!!</h1>
      <ClickButton>
        {(clicked, toggleState) => (
          <CancelButton clicked={clicked} toggleState={toggleState} />
        )}
      </ClickButton>
      <ClickButton>
        {(clicked, toggleState) => (
          <PrimaryButton clicked={clicked} toggleState={toggleState} />
        )}
      </ClickButton>
      <ClickButton>
        {(clicked, toggleState) => (
          <WarningButton clicked={clicked} toggleState={toggleState} />
        )}
      </ClickButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
