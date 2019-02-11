import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBSxMAhZ8mtGmT-HhhY6VjFu9YGh-CHDxc",
            authDomain: "manager-d86b6.firebaseapp.com",
            databaseURL: "https://manager-d86b6.firebaseio.com",
            projectId: "manager-d86b6",
            storageBucket: "manager-d86b6.appspot.com",
            messagingSenderId: "355933105639"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
               <LoginForm />
            </Provider>
        );
    }
}

export default App;