import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

//connect is used to connect store and (props and state) functions below.
import { connect } from "react-redux"; // The react-redux package is the one which allows us to connect react to redux.
//The way we will connect is by using connect in the export as shown in this file.

// In class components "state" and "props" are properties of the context, i.e. this. Hence, accessible by this.state
const App = () => {
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
};

//  Whatever state is changed we need to subscribe, but here instead of subscribing we are going to map it to our props so it is automatically available to us.
const mapStateToProps = (state) => {
	return { age: state.age };
};

// If we want to access the store, we need to map our props with it. And we would need to do it for every single page.
// How do we do it? We need to be able to subscribe to the store, so any changes that happens to the store should be automatically coming to the component and secondly, we will be able to dispatch actions from every page/container.
// Why do we need 2 objects 1.state 2.props? Inside a component everything you can access is the local state or props. Since, we are  not using local state so state is out of question. Hence, we are left with props and therefore we need to map our props to "store" and "acitons"
// We will make a function mapDispatchToProps which will take dispatch as an arguement and the function returns the object(which we will map to event)
const mapDispatchToProps = (dispatch) => {
	return {
		onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
		onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
	};
};
// The "type:" are defined in the reducer, AGE_UP and AGE_DOWN type are defined inside the reducer

// This is the way we connect, by using imported connect (from react-redux) and pass these two arguements 1.mapStateToPropsand 2.mapDispatchToProps
// connect(mapStateToProps, mapDispatchToProps) running this command will give us the one higher level component. What higher level component is, it basically takes a component as an arguement and set few things and it returns another component
// Then I can pass the App component, which will return a component
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
