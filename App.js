import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { connect } from "react-redux";

class App extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<Text>AGE:{this.props.age}</Text>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return { age: state.age };
};

export default connect(mapStateToProps)(App);

//----------------------------END---------------------------
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onAgeUp: () => dispatch({ type: "AGE_UP", payload: 1 }),
// 		onAgeDown: () => dispatch({ type: "AGE_DOWN", payload: 1 }),
// 	};
// };
// export const Apps = connect(mapStateToProps, mapDispatchToProps)(App);

/* <View>
					<Button title="AGE UP" onPress={this.props.onAgeUp}></Button>
					<Button title="AGE DOWN" onPress={this.props.onAgeDown}></Button>
				</View> */
