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
import {Button, Avatar, Input, Header} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      GetBookingChat: [],
      mediaStore: '',
      chat_text: '',
      s: true,
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

  //   GetBookingChat = () => {
  //     var data = {
  //       companyID: this.state.LoginInfo.companyID,
  //       bookingID: this.props.route.params.booking_id,
  //     };
  //     console.log('GetBookingChat data', data);
  //     this.setState({loading: true});
  //     API_AUTH.GetBookingChat(data)
  //       .then((response) => {
  //         console.log('GetBookingChat response', response);
  //         this.setState({
  //           GetBookingChat: response.results,
  //           loading: false,
  //           refreshing: false,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log('GetBookingChat Error:', error);
  //       });
  //   };

  // hide show modal
  displayModal(show) {
    this.setState({isVisible: show});
  }

  //   chooseImage = () => {
  //     var options = {
  //       title: 'Select Picture',
  //       mediaType: 'photo',
  //       allowsEditing: true,
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //       quality: 1.0,
  //     };
  //     ImagePicker.showImagePicker(options, (response) => {
  //       console.log('Response Farmer photo ', response);
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else {
  //         let source1 = {uri: response.uri};
  //         let source = response;
  //         var data = {
  //           imageUri: source.uri,
  //           imageName: source.fileName,
  //           imageType: source.type,
  //           type: 'image',
  //           media_type_id: 1,
  //           path: source.path,
  //           data: source.data,
  //         };
  //         this.setState({mediaStore: data, ImageSource: source1});
  //         // this.UpdateMyProfilePicture();
  //         console.log('chooseImage mediaStore:', this.state.mediaStore);
  //       }
  //     });
  //   };

  //   AddBookingChat = () => {
  //     const data = new FormData();
  //     data.append('companyID', this.state.LoginInfo.companyID);
  //     data.append('bookingID', this.props.route.params.booking_id);
  //     data.append('chat_text', this.state.chat_text);
  //     if (this.state.mediaStore) {
  //       data.append('chat_image', {
  //         uri: this.state.mediaStore.imageUri,
  //         type: this.state.mediaStore.imageType, // or photo.type
  //         name: this.state.mediaStore.imageName,
  //       });
  //     }
  //     console.log('AddBookingChat data:', data);
  //     this.setState({loading: true});
  //     fetch('https://everdriver.in/booking/v1.0/AddBookingChat/', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: 'token' + ' ' + this.state.AccessToken,
  //       },
  //       body: data,
  //     })
  //       .then((response) => response.json())
  //       .then((res) => {
  //         console.log('AddBookingChat res:', res);
  //         Toast.show(res.message);
  //         if (res.status == true) {
  //           this.setState({
  //             AddBookingChat: res,
  //             loading: false,
  //             ImageSource: null,
  //             chat_text: null,
  //           });
  //           this.GetBookingChat();
  //         }
  //       })
  //       .catch((err) => {
  //         console.log('AddBookingChat err:', err);
  //         // Toast.show('Failed to Save Farmer photo...')
  //       });
  //   };

  Item = ({item}) => {
    return (
      <View style={{}}>
        {this.state.s == true ? (
          <View style={{alignItems: 'flex-end', justifyContent: 'center',flexDirection:'row'}}>
          <FontAwesome name="mail-forward" size={20} style={{color:'grey',marginLeft:150,marginBottom:100}}/>
            <View
              style={{
                backgroundColor: '#cee2eb',
                padding: 5,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
                marginLeft: 10,
                marginRight:10,
                marginVertical: 8,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                width:330
              }}>
              {/* {item.chat_image ? ( */}
                <Image
                  source={{
                    uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
                  }}
                  resizeMode="stretch"
                  style={{
                    width: 250,
                    height: 170,
                    borderRadius: 10,
                    marginBottom: 5,
                  }}
                />
              {/* ) : null} */}
              <Text style={{fontSize: 14,fontFamily:'sans-serif',
                width:250}}>
                hello nihal nagar react native 11
                hello nihal nagar react native 11
              </Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 10,
                  fontFamily: 'notoserif',
                  marginBottom: 2,
                  alignSelf: 'flex-end',
                }}>
                12:00 am
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Avatar
              size={40}
              containerStyle={{margin: 10, marginTop: 0, marginBottom: 0}}
              rounded
              source={{
                uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
              }}
            />
            <View>
            <Text
              style={{
                color: 'grey',
                fontSize: 12,
                fontFamily: 'notoserif',
                marginBottom:-5
              }}>
              nihal nagar
            </Text>
              <View
                style={{
                  backgroundColor: '#cdd2d4',
                //   
                  padding: 5,
                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                  marginRight: 120,
                  marginVertical: 8,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                {/* {item.chat_image ? ( */}
                  <Image
                   source={{
                    uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
                  }}
                    resizeMode="stretch"
                    style={{
                      width: 230,
                      height: 170,
                      borderRadius: 10,
                      marginBottom: 5,
                    }}
                  />
                {/* ) : null} */}
                <Text style={{fontSize: 14, }}>
                  hello nihal nagar react native
                hello nihal nagar react native 11
                hello nihal nagar react native 11
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 10,
                    fontFamily: 'notoserif',
                    marginBottom: 2,
                    alignSelf: 'flex-end',
                  }}>
                  12:00 am
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
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
          rightComponent={
            <TouchableOpacity
              //   onPress={() => this.props.navigation.toggleDrawer()}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Ionicons name="refresh" size={25} />
            </TouchableOpacity>
          }
          leftComponent={
            <View style={{flexDirection:'row'}}>
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
                  fontSize: 25,
                  fontFamily: 'Lato-Bold',
                  fontWeight: 'bold',
                  width: 250,marginLeft: 5
                }}>
                Chats
              </Text>
            </View>
          }
        />
        <View style={{height: '85%'}}>
          <FlatList
            ref={(ref) => (this.scrollView = ref)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.scrollView.scrollToEnd({animated: true});
            }}
            refreshControl={
              <RefreshControl
                onRefresh={() => this.refreshControl()}
                refreshing={this.state.refreshing}
                enabled={true}
              />
            }
            data={[
              {key: 'Android'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
            ]}
            renderItem={this.Item}
          />
          {this.state.ImageSource ? (
            <Image
              source={this.state.ImageSource}
              resizeMode="stretch"
              style={{
                width: 70,
                height: 50,
                margin: 20,
              }}
            />
          ) : null}
          <View style={{flexDirection: 'row', marginTop: 10,marginBottom:10}}>
            <View
              style={{
                backgroundColor: '#2452c9',
                position: 'absolute',
                left: 15,
                borderRadius: 100 / 2,
                padding: 8,
                elevation: 10,
              }}>
              <Entypo
                name="plus"
                size={30}
                color={'white'}
                style={{elevation: 10}}
                // onPress={() => this.chooseImage()}
              />
            </View>
            <TextInput
              style={{
                height: 45,
                width: '60%',
                color: '#495057',
                backgroundColor: '#eeeeee',
                fontFamily: 'Nunito-Bold',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                borderRadius: 100 / 2,
                left: 70,
                paddingLeft: 10,
              }}
              //   onChangeText={(_) => {
              //     this.setState({chat_text: _});
              //   }}
              //   value={this.state.chat_text}
              placeholder="Send message..."
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#2452c9',
                position: 'absolute',
                right: 10,
                borderRadius: 100 / 2,
                padding: 8,
                elevation: 10,
                width:50
              }}>
              <MaterialCommunityIcons
                name="send"
                size={25}
                color={'white'}
                style={{elevation: 10,padding:3,marginLeft:3}}
                // onPress={() => this.AddBookingChat()}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.loading == true ? <Loading /> : null}
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
