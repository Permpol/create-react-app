import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import { Switch, Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class App extends React.Component {
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <View style={styles.container}>
        {/*Text to show the text according to switch condition*/}
        <Text>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>

        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

