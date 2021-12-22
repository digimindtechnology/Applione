import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Modal,
  Picker,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {Button, Avatar, Input, Header, CheckBox} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
// import Rest_Api from './../configs/api';
// import Rest_Api_Auth from './../configs/api_authorization';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
// import Loading from './../components/Loading';
// import ImagePicker from 'react-native-image-picker';

// const API = new Rest_Api();
// var API_AUTH;

const unsubscribe = NetInfo.addEventListener((state) => {
  // console.log("Connection type", state.type);
  // console.log("Is connected?", state.isConnected);
  if (state.isConnected == false) {
    Toast.show('No Internet Connection!!');
  }
});
export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      GetBookingChat: [],
      mediaStore: '',
      chat_text: '',
      s: true,
      Team: false,
    };
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
  }

  _keyboardDidShow() {
    console.log('scrollview', this.scrollView);
    this.scrollView && this.scrollView.scrollToEnd({animated: true});
  }

  refreshControl() {
    this.setState({refreshing: true});
    // this.GetBookingChat();
  }

  componentWillMount() {
    unsubscribe();
    this.getAsyncData();
  }

  getAsyncData = async () => {
    const AccessToken = await AsyncStorage.getItem('AccessToken');
    const LoginInfo = await AsyncStorage.getItem('LoginInfo');
    console.log('AccessToken', AccessToken);
    console.log('LoginInfo', LoginInfo);
    this.setState({AccessToken: JSON.parse(AccessToken)});
    this.setState({LoginInfo: JSON.parse(LoginInfo)});
    console.log('LoginInfo detail', this.state.Logininfo);
    // API_AUTH = new Rest_Api_Auth('token' + ' ' + JSON.parse(AccessToken));
    // this.GetBookingChat();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Header
          backgroundColor={'#F5F5F5'}
          leftComponent={
            <View style={{flexDirection: 'row'}}>
              <Entypo
                name="chevron-left"
                color="black"
                size={28}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
              <Text
                style={{
                  fontSize: 23,
                  fontFamily: 'Lato-Bold',
                  fontWeight: 'bold',
                  width: 250,
                  marginLeft: 5,
                }}>
                Create Channel
              </Text>
            </View>
          }
          rightComponent={
            <Text
              style={{
                alignSelf: 'center',
                marginTop: '5%',
                color: '#2452c9',
                fontSize: 18,
                // fontWeight: 'bold',
              }}>
              Save
            </Text>
          }
        />
        <View>
          {/* first step */}

          <ScrollView style={{height:'88%'}}>
            <View style={{marginTop: 20, marginBottom: 10}}>
              <TouchableOpacity
                style={{
                  height: 100,
                  width: '28%',
                  color: '#495057',
                  backgroundColor: '#eeeeee',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 50,
                  alignSelf: 'center',
                }}>
                <Entypo
                  name="image"
                  color="grey"
                  size={25}
                  style={{alignSelf: 'center', marginTop: '28%'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: '2%',
                    color: 'grey',
                    fontSize: 14,
                  }}>
                  Add Image
                </Text>
              </TouchableOpacity>
              <TextInput
                style={{
                  height: 45,
                  width: '55%',
                  color: '#495057',
                  fontFamily: 'Nunito-Bold',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 15,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 100 / 2,
                  paddingLeft: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                  left: 30,
                }}
                //   onChangeText={(_) => {
                //     this.setState({chat_text: _});
                //   }}
                //   value={this.state.chat_text}
                placeholder="Project Name.."
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Avatar
                    size={50}
                    // onPress={() => this.chooseImage()}
                    rounded
                    source={{
                      uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                    }}
                  />

                  <Entypo
                    name="circle-with-cross"
                    color="grey"
                    size={20}
                    style={{
                      alignSelf: 'flex-end',
                      marginLeft: -10,
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Avatar
                    size={50}
                    // onPress={() => this.chooseImage()}
                    rounded
                    source={{
                      uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                    }}
                  />

                  <Entypo
                    name="circle-with-cross"
                    color="grey"
                    size={20}
                    style={{
                      alignSelf: 'flex-end',
                      marginLeft: -10,
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Avatar
                    size={50}
                    // onPress={() => this.chooseImage()}
                    rounded
                    source={{
                      uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                    }}
                  />

                  <Entypo
                    name="circle-with-cross"
                    color="grey"
                    size={20}
                    style={{
                      alignSelf: 'flex-end',
                      marginLeft: -10,
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>

              <TextInput
                style={{
                  height: 45,
                  width: '80%',
                  color: '#495057',
                  backgroundColor: '#eee',
                  fontFamily: 'Nunito-Bold',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 15,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 100 / 2,
                  paddingLeft: 10,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                //   onChangeText={(_) => {
                //     this.setState({chat_text: _});
                //   }}
                //   value={this.state.chat_text}
                placeholder="Search Team..."
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                justifyContent: 'space-between',
                marginTop: 30,
                paddingBottom: 10,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={35}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: 5,
                      fontWeight: 'bold',
                    }}>
                    Nihal nagar
                  </Text>
                </View>
              </View>
              <Feather
                name="check-square"
                size={20}
                color={'#2452c9'}
                style={{marginTop: 5}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingBottom: 10,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={35}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: 5,
                      fontWeight: 'bold',
                    }}>
                    Nihal nagar
                  </Text>
                </View>
              </View>
              <Feather
                name="square"
                size={20}
                color={'#2452c9'}
                style={{marginTop: 5}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingBottom: 10,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={35}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: 5,
                      fontWeight: 'bold',
                    }}>
                    Nihal nagar
                  </Text>
                </View>
              </View>
              <Feather
                name="check-square"
                size={20}
                color={'#2452c9'}
                style={{marginTop: 5}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingBottom: 10,
                marginLeft: 15,
                marginRight: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={35}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      marginTop: 5,
                      fontWeight: 'bold',
                    }}>
                    Nihal nagar
                  </Text>
                </View>
              </View>
              <Feather
                name="check-square"
                size={20}
                color={'#2452c9'}
                style={{marginTop: 5}}
              />
            </View>
            {/* end first step */}

            <View style={{marginTop: 40, marginBottom: 10}}>
              <TouchableOpacity
                style={{
                  height: 80,
                  width: '90%',
                  color: '#495057',
                  backgroundColor: '#e9eef7',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 10,
                  left: 15,
                  marginTop: 20,
                  borderColor: '#2452c9',
                  // borderWidth: 0.5,
                  flexDirection: 'row',
                  paddingTop: 5,
                  paddingLeft: 5,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '82%',
                  }}>
                  <Feather
                    name="unlock"
                    size={20}
                    color={'#2452c9'}
                    style={{marginTop: 10, marginLeft: 10}}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        // fontWeight: 'bold',
                        marginLeft: 10,
                        marginTop: 10,
                      }}>
                      Public
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                        marginLeft: 10,
                        color: 'grey',
                        width: '75%',
                      }}>
                      Public channels are those with a hashtag (#) in the title
                    </Text>
                  </View>
                </View>

                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  style={{marginTop: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 80,
                  width: '90%',
                  color: '#495057',
                  backgroundColor: '#e9eef7',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 16,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 10,
                  left: 15,
                  marginTop: 20,
                  borderColor: '#2452c9',
                  // borderWidth: 0.5,
                  flexDirection: 'row',
                  paddingTop: 5,
                  paddingLeft: 5,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '82%',
                  }}>
                  <Feather
                    name="lock"
                    size={20}
                    color={'#2452c9'}
                    style={{marginTop: 10, marginLeft: 10}}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        // fontWeight: 'bold',
                        marginLeft: 10,
                        marginTop: 10,
                      }}>
                      Private
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginBottom: 5,
                        marginLeft: 10,
                        color: 'grey',
                        width: '75%',
                      }}>
                      Private channels are those with a padlock icon in the
                      title.
                    </Text>
                  </View>
                </View>

                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                  style={{marginTop: 5}}
                />
              </TouchableOpacity>
            </View>

            {/* end second step */}

            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 60,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      // fontWeight: 'bold',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    #Private
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      // fontWeight: 'bold',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    #Private
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      // fontWeight: 'bold',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    #Private
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({Team: true});
              }}
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => {
                    this.setState({Team: true});
                  }}
                  style={{
                    fontSize: 18,
                    // fontWeight: 'bold',
                    marginLeft: 80,
                    marginTop: 10,
                    color: '#2452c9',
                    alignSelf: 'center',
                  }}>
                  + Add Custom Tags
                </Text>
              </View>
            </TouchableOpacity>

            {/* end trird step */}

            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 80,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    // fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  High
                </Text>
                <Feather
                  name="menu"
                  size={20}
                  color={'#2452c9'}
                  style={{marginTop: 10, marginLeft: 20}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    // fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  Medium
                </Text>
                <Feather
                  name="menu"
                  size={20}
                  color={'#2452c9'}
                  style={{marginTop: 10, marginLeft: 20}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    // fontWeight: 'bold',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  Low
                </Text>
                <Feather
                  name="menu"
                  size={20}
                  color={'#2452c9'}
                  style={{marginTop: 10, marginLeft: 20}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({Team: true});
              }}
              style={{
                height: 50,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 10,
                left: 15,
                marginTop: 20,
                borderColor: '#2452c9',
                // borderWidth: 0.5,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => {
                    this.setState({Team: true});
                  }}
                  style={{
                    fontSize: 18,
                    // fontWeight: 'bold',
                    marginLeft: 80,
                    marginTop: 10,
                    color: '#2452c9',
                    alignSelf: 'center',
                  }}>
                  + Add Custom Status
                </Text>
              </View>
            </TouchableOpacity>
            {/* End of four step */}

            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 60,
              }}>
              View
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                marginTop: 10,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Admin
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                All Team Members
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Assignee
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 10,
              }}>
              Comment
            </Text>

            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                marginTop: 10,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Admin
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                All Team Members
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Assignee
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 10,
              }}>
              Create
            </Text>

            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                marginTop: 10,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Admin
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                All Team Members
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Assignee
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                />
              </View>
            </TouchableOpacity>

            {/* End of five step */}

            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 60,
              }}>
              Chat Access
            </Text>

            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 10,
              }}>
              View
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                marginTop: 10,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Admin
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                All Team Members
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Assignee
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                color: '#2452c9',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 5,
                marginTop: 10,
              }}>
              Comment
            </Text>

            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                marginTop: 10,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Admin
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                All Team Members
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '90%',
                color: '#495057',
                backgroundColor: '#e9eef7',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                left: 15,
                flexDirection: 'row',
                paddingTop: 5,
                paddingLeft: 5,
                justifyContent: 'space-between',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginLeft: 10,
                  marginBottom: 5,
                }}>
                Assignee
              </Text>
              <View style={{marginTop: -10}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={false}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* end of six step */}
        </View>
        {this.state.loading == true ? <Loading /> : null}

        <Modal transparent={true} visible={this.state.Team}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              padding: 15,
              paddingTop: 230,
              paddingBottom: 230,
            }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                flex: 1,
                padding: 10,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>
                  Add Custom Tags
                </Text>
                <Entypo
                  name="cross"
                  size={16}
                  color={'white'}
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: 100,
                    padding: 5,
                  }}
                  onPress={() => {
                    this.setState({Team: false});
                  }}
                />
              </View>

              <TextInput
                style={{
                  height: 45,
                  width: '95%',
                  color: '#495057',
                  backgroundColor: '#eee',
                  fontFamily: 'Nunito-Bold',
                  paddingHorizontal: 5,
                  paddingVertical: 0,
                  fontSize: 15,
                  fontFamily: 'Lato-Bold',
                  borderRadius: 10,
                  paddingLeft: 10,
                  alignSelf: 'center',
                  marginTop: 30,
                }}
                //   onChangeText={(_) => {
                //     this.setState({chat_text: _});
                //   }}
                //   value={this.state.chat_text}
                placeholder="Add Tags..."
              />

              {/* <ScrollView> */}
              <Button
                buttonStyle={{
                  backgroundColor: '#2452c9',
                  borderRadius: 10,
                  paddingRight: 0,
                  marginTop: 30,
                  marginLeft: 15,
                  marginRight: 15,
                }}
                title="Submit"
                titleStyle={{fontSize: 13}}
                onPress={() => {
                  this.setState({Team: false});
                }}
              />
              {/* </ScrollView> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },

  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  inputContainer: {
    borderColor: '#cccccc',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 1,
    paddingVertical: 0,
    marginBottom: 5,
  },
  inputs: {
    height: 38,
    color: '#3279b1',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
});
