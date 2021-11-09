import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Provider will allow us to inject the global store and hence we have to wrap our App component with the Provider.
import { Provider } from "react-redux";

import store from "./src/store/store";

// We need to pass the below defined store into the Provider in the property "store". This will make the store available all over the app.
AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <App />
  </Provider>
));

// The store needs to be global, therefore we need to plug-in the store at the highest level.
