import React, { Component } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>AGE:{this.props.age}</Text>
        </View>
        <View>
          <Button title="AGE UP" onPress={this.props.onAgeUp}></Button>
          <Button title="AGE DOWN" onPress={this.props.onAgeDown}></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
