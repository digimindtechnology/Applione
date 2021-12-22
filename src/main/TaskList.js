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
} from 'react-native';
import {Button, Avatar, Input, Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TakList extends Component {
  Item = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Comments');
        }}
        style={{
          backgroundColor: '#ffffff',
          //   margin: 10,
          //   borderRadius: 10,
          //   marginVertical: 5,
          borderBottomWidth: 0.3,
          borderBottomColor: 'grey',
          flexDirection: 'row',
        }}>
        <Avatar
          size={40}
          // onPress={() => this.chooseImage()}

          containerStyle={{margin: 10}}
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
                    width: '80%',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: 17,
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
                        marginBottom: 3,
                        marginLeft: 5,
                        fontFamily: 'sans-serif',
                      }}>
                      {/* {item.booking_code} */}
                      12 Jun 2021
                    </Text>
                  </View>
                  {/* <View>
                    <Entypo
                      name="dots-three-vertical"
                      size={18}
                      style={{marginTop: 5, marginLeft: -85}}
                    />
                  </View> */}

                  <View
                    style={{
                      backgroundColor: '#2452c9',
                      alignSelf: 'center',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'flex-end',
                        color: 'white',
                        margin: 10,
                        marginTop: 2,
                        marginBottom: 2,
                      }}>
                      17
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 18,
                      borderColor: 'red',
                      borderRadius: 10,
                      borderWidth: 0.3,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 8,
                        fontFamily: 'sans-serif',
                        marginRight: 5,
                      }}>
                      nihalasdfghjkj{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 18,
                      borderColor: 'blue',
                      borderRadius: 10,
                      borderWidth: 0.3,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
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
                      height: 18,
                      borderColor: 'green',
                      borderRadius: 10,
                      borderWidth: 0.3,
                      marginRight: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        marginLeft: 8,
                        marginRight: 5,
                        fontFamily: 'sans-serif',
                      }}>
                      nihal{' '}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'sans-serif',
                    width: '83%',
                    marginBottom: 5,
                    marginTop: 3,
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
                  style={{width: '80%', height: 200, borderRadius: 10}}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              marginBottom: 15,
              justifyContent: 'space-between',
              width: '80%',
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

          {/* <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 10}}>
             <Avatar
              size={30}
              containerStyle={{
                backgroundColor: '#5f5c94',
                position: 'absolute',
                left: 5,
                borderRadius: 100 / 2,
                padding: 0,
              }}
              // onPress={() => this.chooseImage()}
              rounded
              source={{
                uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
              }}
            />

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
                name="magnifying-glass"
                size={25}
                style={{marginRight: 5, marginTop: 5}}
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
                  width: 300,
                  marginLeft: 5,
                }}>
                Smart Traffic Monitoring
              </Text>
            </View>
          }
        />
        <View style={{backgroundColor: '#e4e4ed', height: '100%'}}>
          <FlatList
            style={{marginTop: 1}}
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
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:9522332232`)}
            style={{
              // borderWidth: 1,
              borderColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width: 50,
              height: 50,
              bottom: 15,
              right: 10,
              borderRadius: 25,
              backgroundColor: '#2452c9',
              elevation: 10,
            }}>
            {/* <AntDesign name="customerservice" size={25} color="#fff" /> */}

            <Entypo
              name="plus"
              size={30}
              color={'white'}
              style={{elevation: 10}}
              // onPress={() => this.chooseImage()}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
