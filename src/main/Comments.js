import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button, Avatar, Input, Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Comments extends Component {
  Item = ({item}) => {
    return (
      <TouchableOpacity
        // onPress={() => {
        //   this.props.navigation.navigate('BookingDetails', {
        //     item: item.booking_id,
        //   });
        // }}
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          PaddingTop: 5,
        }}>
        <View>
          <Avatar
            size={40}
            containerStyle={{margin: 10, marginTop: 8, marginBottom: 0}}
            rounded
            source={{
              uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            }}
          />
          {/* <View style={{width: 1, backgroundColor: 'grey',height:53,marginLeft:28}} /> */}

          <View
            style={{
              width: 1,
              backgroundColor: 'grey',
              height: 250,
              marginLeft: 28,
            }}
          />
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#ffffff',
              flexDirection: 'row',
              paddingTop: 8,
              paddingBottom: 8,
              padding: 2,
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        marginTop: 5,
                        marginBottom: 5,
                      }}>
                      {/* {item.booking_code} */}
                      Mr. Nihal Nagar
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginTop: 3,
                        marginBottom: 3,
                        marginLeft: 5,
                      }}>
                      {/* {item.booking_code} */}.
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        marginTop: 8,
                        marginBottom: 5,
                        marginLeft: 5,
                      }}>
                      {/* {item.booking_code} */}
                      12 Jun 2021
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'sans-serif',
                    width: '85%',
                    marginBottom: 5,
                  }}>
                  {/* {item.booking_code} */}
                  it would have been nice to have one place to go to see
                  everything and to have been able to find it with a quick
                  google search.
                </Text>
                <Image
                  // onPress={() => this.chooseImage()}
                  source={{
                    uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
                  }}
                  style={{
                    width: '80%',
                    height: 200,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                />
              </View>
            </View>
          </View>
          {/* <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 10}}>
           

            <TextInput
              style={{
                height: 35,
                width: '65%',
                color: '#495057',
                backgroundColor: '#eeeeee',
                fontFamily: 'Nunito-Bold',
                paddingHorizontal: 5,
                paddingVertical: 0,
                fontSize: 14,
                fontFamily: 'Lato-Bold',
                borderRadius: 100 / 2,
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
                backgroundColor: '#094c80',
                borderRadius: 100 / 2,
                padding: 8,marginLeft:15

              }}>
              <Entypo
                name="arrow-with-circle-right"
                size={20}
                color={'white'}
                style={{elevation: 10}}
                // onPress={() => this.AddBookingChat()}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </TouchableOpacity>
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
              <Entypo
                onPress={() => {
                  this.props.navigation.navigate('Chats');
                }}
                name="chat"
                size={23}
                style={{marginTop: 5, marginRight: 5}}
              />
            </TouchableOpacity>
          }
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
                  fontSize: 25,
                  fontFamily: 'Lato-Bold',
                  fontWeight: 'bold',
                  width: 250,
                  marginLeft: 5,
                }}>
                Thread
              </Text>
            </View>
          }
        />
        <ScrollView  style={{backgroundColor: '#e4e4ed', height: '89%'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CreateTask');
            }}>
            <TouchableOpacity
              // onPress={() => {
              //   this.props.navigation.navigate('BookingDetails', {
              //     item: item.booking_id,
              //   });
              // }}
              style={{
                backgroundColor: '#ffffff',
                //   margin: 10,
                //   borderRadius: 10,
                //   marginVertical: 5,
                flexDirection: 'row',
              }}>
              <Avatar
                size={40}
                // onPress={() => this.chooseImage()}

                containerStyle={{margin: 10, marginTop: 5}}
                rounded
                source={{
                  uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                }}
              />
              <View>
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    paddingTop: 8,
                    paddingBottom: 8,
                    padding: 2,
                    justifyContent: 'space-between',
                    borderRadius: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '100%'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 3,
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontSize: 18,
                              fontFamily: 'sans-serif',
                              fontWeight: 'bold',
                              marginTop: 5,
                              marginBottom: 5,
                            }}>
                            {/* {item.booking_code} */}
                            Mr. Nihal Nagar
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              marginTop: 3,
                              marginBottom: 3,
                              marginLeft: 5,
                            }}>
                            {/* {item.booking_code} */}.
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              marginTop: 10,
                              marginBottom: 5,
                              marginLeft: 5,
                            }}>
                            {/* {item.booking_code} */}
                            12 Jun 2021
                          </Text>
                        </View>
                        <View>
                          <Entypo
                            name="dots-three-vertical"
                            size={18}
                            style={{marginTop: 5, marginLeft: -85}}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ffffff',
                borderBottomWidth: 0.3,
                borderBottomColor: 'grey',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                  width: '90%',
                  marginBottom: 5,
                  marginLeft: 15,
                }}>
                {/* {item.booking_code} */}
                it would have been nice to have one place to go to see
                everything and to have been able to find it with a quick google
                search.
              </Text>
              <Image
                // onPress={() => this.chooseImage()}
                source={{
                  uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
                }}
                style={{
                  width: '90%',
                  height: 200,
                  borderRadius: 10,
                  marginLeft: 15,
                  marginTop: 10,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    margin: 10,
                    marginLeft: 15,
                    fontFamily: 'sans-serif',
                    color: 'grey',
                  }}>
                  Created
                </Text>
                <Text
                  style={{
                    fontFamily: 'sans-serif',
                    marginTop: 7,
                    marginLeft: -5,
                    color: 'grey',
                  }}>
                  .
                </Text>
                <Text
                  style={{
                    margin: 10,
                    marginLeft: 5,
                    fontFamily: 'sans-serif',
                    color: 'grey',
                  }}>
                  12 Jun 2021
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 0.5,
                  backgroundColor: '#ccc',
                  marginTop: 5,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginBottom: 15,
                  justifyContent: 'space-between',
                  width: '90%',
                  marginLeft: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome
                    name="comments-o"
                    // comments
                    color="grey"
                    size={18}
                  />
                  <Text style={{fontSize: 14, marginLeft: 5, color: 'grey'}}>
                    125
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="ios-document-attach"
                    color="grey"
                    // color='#c9516d'
                    // bell

                    size={17}
                  />
                  <Text style={{fontSize: 14, marginLeft: 5, color: 'grey'}}>
                    125
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome
                    name="bell-slash-o"
                    color="grey"
                    // color='#c9516d'
                    // bell

                    size={18}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      marginBottom: 3,
                      marginLeft: 10,
                      fontFamily: 'sans-serif',
                      color: 'grey',
                    }}>
                    {/* {item.booking_code} */}
                    12 Jun 2021
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <FlatList 
            data={[
              {key: 'Android'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
              {key: 'iOS'},
            ]}
            renderItem={this.Item}
            //   ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
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
              width: 50,
            }}>
            <MaterialCommunityIcons
              name="send"
              size={25}
              color={'white'}
              style={{elevation: 10, padding: 3, marginLeft: 3}}
              // onPress={() => this.AddBookingChat()}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
