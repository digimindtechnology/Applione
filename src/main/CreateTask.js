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
  Switch,
} from 'react-native';
import {Button, Avatar, Input, Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CreateTask extends Component {
  Item1 = ({item}) => {
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
                        fontSize: 12,
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
                    width: '70%',
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
                    width: '70%',
                    height: 180,
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
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
          margin: 10,
        }}>
        <Image
          // onPress={() => this.chooseImage()}
          source={{
            uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
          }}
          style={{width: 100, height: 100, borderRadius: 5}}
          resizeMode="stretch"
        />
        {/* <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius:10,
            width:20,height:20,marginLeft:85,marginTop:-10
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',margin:5,marginTop:-5,marginLeft:6}}>
            -
          </Text>
        </TouchableOpacity> */}
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
              <Text style={{fontSize: 18, color: '#2452c9', fontWeight: '500'}}>
                Save
              </Text>
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
                Thread Details
              </Text>
            </View>
          }
        />
        <ScrollView style={{backgroundColor: '#e4e4ed', height: '80%'}}>
          <TouchableOpacity
            // onPress={() => {
            //   this.props.navigation.navigate('BookingDetails', {
            //     item: item.booking_id,
            //   });
            // }}
            style={{
              // backgroundColor: '#ffffff',
              //   margin: 10,
              //   borderRadius: 10,
              //   marginVertical: 5,
              flexDirection: 'row',
            }}></TouchableOpacity>
          <View style={{}}>
            {/* <Image
              // onPress={() => this.chooseImage()}
              source={{
                uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/000_9RU7RZ_1200x768.jpeg',
              }}
              style={{
                width: '100%',
                height: 200,
              }}
            /> */}

            <TextInput
              multiline={true}
              value={
                'it would have been nice to have one place to go to see everything and to have been able to find it with a quick google search'
              }
              style={{
                fontSize: 18,
                fontFamily: 'sans-serif',
                width: '90%',
                marginBottom: 5,
                margin: 10,
              }}></TextInput>
            <View style={{flexDirection: 'row', margin: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 20,
                  borderColor: 'red',
                  borderRadius: 10,
                  borderWidth: 0.3,
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 8,
                    fontFamily: 'sans-serif',
                    marginRight: 5,
                  }}>
                  Nihal nagar
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 20,
                  borderColor: 'blue',
                  borderRadius: 10,
                  borderWidth: 0.3,
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 8,
                    fontFamily: 'sans-serif',
                    marginRight: 5,
                  }}>
                  nihal{' '}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 20,
                  borderColor: 'black',
                  borderRadius: 10,
                  borderWidth: 0.3,
                  marginRight: 5,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 8,
                    marginRight: 8,
                    fontFamily: 'sans-serif',
                  }}>
                  + Add Tags
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                  marginLeft: 10,
                }}>
                {/* {item.booking_code} */}
                Created Date : 12 Jun 2021
              </Text>
            </View>

            <View
              style={{
                margin: 10,
                borderRadius: 10,
                height: 200,
                backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  borderBottomWidth: 0.3,
                  borderBottomColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'sans-serif',
                    // fontWeight: 'bold',
                    margin: 10,
                  }}>
                  Status
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    width: 100,
                    height: 30,
                    borderRadius: 10,
                    backgroundColor: '#e1e3eb',
                    margin: 10,
                    alignSelf: 'flex-end',
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                      color: '#2452c9',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Reviewed
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  borderBottomWidth: 0.3,
                  borderBottomColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'sans-serif',
                    // fontWeight: 'bold',
                    margin: 10,
                  }}>
                  Assignees
                </Text>
                {/* <View
                  style={{
                    alignItems: 'center',
                    width: 70,
                    height: 35,
                    borderRadius: 10,
                    backgroundColor: '#e1e3eb',
                    margin: 10,
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                  }}> */}
                <Avatar
                  size={30}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                  containerStyle={{margin: 10}}
                />
                {/* <Avatar
                    size={25}
                    // onPress={() => this.chooseImage()}
                    rounded
                    source={{
                      uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                    }}
                    containerStyle={{marginLeft: -5}}
                  /> */}
                {/* </View> */}
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  borderBottomWidth: 0.3,
                  borderBottomColor: 'grey',
                  height: 50,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'sans-serif',
                    // fontWeight: 'bold',
                    margin: 10,
                  }}>
                  Schedule
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    width: 150,
                    height: 30,
                    // backgroundColor: '#e1e3eb',
                    // margin: 10,
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <Entypo
                    name="calendar"
                    style={{
                      marginLeft: 25,
                    }}
                    color="grey"
                    size={20}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}
                  />
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    12 Jun 2021
                  </Text>

                  {/* <Switch
                    trackColor={{false: 'grey', true: 'grey'}}
                    thumbColor={'#2452c9'}
                    // onValueChange={(_) => {
                    //   this.UpdateDriverOnlineOROffline(_);
                    // }}

                    value={true}
                  /> */}
                </View>
              </View>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'sans-serif',
                    // fontWeight: 'bold',
                    margin: 10,
                  }}>
                  Due Date
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    width: 150,
                    height: 30,
                    // backgroundColor: '#e1e3eb',
                    // margin: 10,
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <Entypo
                    name="calendar"
                    style={{
                      marginLeft: 25,
                    }}
                    color="grey"
                    size={20}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}
                  />
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginLeft: 10,
                    }}>
                    12 Jun 2021
                  </Text>

                  {/* <Switch
                    trackColor={{false: 'grey', true: 'grey'}}
                    thumbColor={'#2452c9'}
                    // onValueChange={(_) => {
                    //   this.UpdateDriverOnlineOROffline(_);
                    // }}

                    value={true}
                  /> */}
                </View>
              </View>
            </View>
            <View style={{backgroundColor: '#ffffff'}}>
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: -10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    margin: 10,
                  }}>
                  Attechments
                </Text>
                <Entypo
                  name="plus"
                  size={30}
                  style={{margin: 10, marginTop: 5}}
                  // onPress={() => {
                  //   this.props.navigation.navigate('CreateProject');
                  // }}
                />
              </View>
              <FlatList
                numColumns={3}
                data={[{key: 'Android'}, {key: 'iOS'}, {key: 'iOS'}]}
                renderItem={this.Item}
                //   ItemSeparatorComponent={this.renderSeparator}
              />
            </View>
            {/* <View style={{backgroundColor: '#ffffff', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  margin: 10,
                }}>
                Comments
              </Text>
              <FlatList
                numColumns={3}
                data={[
                  {key: 'Android'},
                  {key: 'iOS'},
                  {key: 'iOS'},
                  {key: 'iOS'},
                  {key: 'iOS'},
                  {key: 'iOS'},
                ]}
                renderItem={this.Item1}
                //   ItemSeparatorComponent={this.renderSeparator}
              />
            </View> */}
          </View>
        </ScrollView>
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
