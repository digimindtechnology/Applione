import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Chats from './Chats';
import Comments from './Comments';
import CreateTask from './CreateTask';
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import CreateProject from './CreateProject';

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async componentWillMount() {
    setTimeout(() => this.setState({loading: true}), 5000);
  }

  // StackScreen() {
  //     return (
  //         <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
  //             {/* <Stack.Screen name="Login" component={Login} /> */}
  //             <Stack.Screen name="Login1" component={Login1} />
  //             <Stack.Screen name="Auth" component={Auth} />
  //             <Stack.Screen name="Register" component={Register} />
  //             <Stack.Screen name="ForgetPass" component={ForgetPass} />
  //         </Stack.Navigator>
  //     );
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ProjectList"
          screenOptions={{headerShown: false}}>
          {/* {this.state.loading == false ?
                        <Stack.Screen name="Splash" component={Splash} />
                        : null} */}
          {/* <Stack.Screen name="StackScreen" component={this.StackScreen} /> */}
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="Comments" component={Comments} />
          <Stack.Screen name="CreateTask" component={CreateTask} />
          <Stack.Screen name="ProjectList" component={ProjectList} />
          <Stack.Screen name="TaskList" component={TaskList} />
          <Stack.Screen name="CreateProject" component={CreateProject} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
