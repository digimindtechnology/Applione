import React, {Component} from 'react';
import { Tab, Text, TabView } from 'react-native-elements';

export default class example extends Component {


  render() {
    return (
        <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Recent"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="favorite"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="cart"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
  
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
            <Text h1>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>
      </>
    );
  }
}























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
  Animated,
  ScrollView,
} from 'react-native';
import {Button, Avatar, Input, Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: 0,
      s: false,
      array: [
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 2,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
        {
          key: 1,
          title: 'Data assemble assigned by nihal nagar',
          subtitle: 'Data assemble > assigned > nihal',
        },
      ],
    };
  }

  Item = ({item}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 5,
            // borderRadius: 10,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Chats');
            }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                padding: 8,
                justifyContent: 'space-between',
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  size={60}
                  // onPress={() => this.chooseImage()}
                  rounded
                  source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                  }}
                />

                <View
                  style={{
                    alignSelf: 'flex-end',
                    marginLeft: -20,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#2452c9',
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginTop: 40,
                    marginLeft: -17,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      color: 'white',
                      margin: 5,
                      marginTop: 2,
                      marginBottom: 2,
                      fontSize: 10,
                    }}>
                    7
                  </Text>
                </View>

                <View style={{width: '77%'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'sans-serif',
                        marginLeft: 13,
                        fontWeight: 'bold',
                        marginTop: 5,
                      }}>
                      {/* {item.booking_code} */}
                      Smart Traffic Monitoring
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'sans-serif',
                      marginLeft: 13,
                      marginTop: 5,
                    }}>
                    {/* {item.booking_code} */}
                    Detction will update
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({s: !this.state.s, keys: item.key});
                }}
                style={{
                  flexDirection: 'row',
                  borderRadius: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  marginTop: 15,
                  marginLeft: -35,
                  height: 35,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Lato-Black',
                    fontWeight: 'bold',
                    marginTop: 5,
                    marginLeft: 5,
                    color: '#2452c9',
                    // GREY
                  }}>
                  {/* {item.booking_code} */}17
                </Text>
                <Entypo
                  name={
                    this.state.s && this.state.keys == item.key
                      ? 'chevron-down'
                      : 'chevron-right'
                  }
                  size={25}
                  style={{marginTop: 5}}
                  color="#2452c9"
                  // GREY
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {this.state.s && this.state.keys == item.key ? (
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
                Threads
              </Text>
              <Entypo
                name="plus"
                size={30}
                style={{margin: 10, marginTop: 5}}
              />
            </View>
          ) : null}

          {this.state.s && this.state.keys == item.key
            ? this.state.array.map((element) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('Comments');
                    }}
                    style={{
                      marginTop: 3,
                      marginLeft: 15,
                      marginBottom: 5,
                      flexDirection: 'row',
                      borderTopWidth: 0.3,
                      borderTopColor: 'grey',
                      paddingTop: 5,
                    }}>
                    {/* <FontAwesome Comments
                    name="square"
                    size={20}
                    style={{margin: 10}}
                    color="grey"
                  /> */}
                    <Avatar
                      size={30}
                      // onPress={() => this.chooseImage()}
                      containerStyle={{marginTop: 10}}
                      rounded
                      source={{
                        uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
                      }}
                    />

                    <View
                      style={{
                        marginTop: 0,
                        marginBottom: 5,
                        marginLeft: 10,
                        width: '65%',
                      }}>
                      <Text style={{fontSize: 16, fontFamily: 'sans-serif'}}>
                        Nihal nagar
                      </Text>
                      <Text style={{color: 'grey', fontFamily: 'sans-serif'}}>
                        {element.title} {element.subtitle}
                      </Text>
                    </View>
                    <View style={{marginLeft: 20, marginBottom: 5}}>
                      <Text
                        style={{
                          alignSelf: 'flex-end',
                          color: 'grey',
                          fontFamily: 'sans-serif',
                        }}>
                        17 Jun
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#2452c9',
                          alignSelf: 'center',
                          borderRadius: 10,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            alignSelf: 'flex-end',
                            color: 'white',
                            margin: 5,
                            marginTop: 2,
                            marginBottom: 2,
                          }}>
                          17
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            : null}

          {this.state.s && this.state.keys == item.key ? (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TaskList');
              }}
              style={{
                alignItems: 'center',
                width: 100,
                height: 30,
                borderRadius: 10,
                backgroundColor: '#e1e3eb',
                marginBottom: 10,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  marginTop: 5,
                  color: '#2452c9',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                View all
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };

  render() {
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 70);
    const transtaleY = diffClamp.interpolate({
      inputRange: [0, 70],
      outputRange: [0, -70],
    });
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Animated.View
          style={{
            transform: [
              {
                translateY: transtaleY,
              },
            ],
            elevation: 4,
            zIndex: 100,
          }}>
          <Header
            containerStyle={{position: 'absolute', right: 0, top: 0, left: 0}}
            // style={
            //   {

            //   }
            // }
            backgroundColor={'#F5F5F5'}
            rightComponent={
              <TouchableOpacity
                //   onPress={() => this.props.navigation.toggleDrawer()}
                style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Entypo
                  name="magnifying-glass"
                  size={23}
                  style={{marginRight: 10, marginTop: 5}}
                />
                {/* <Entypo name="menu" size={30} /> */}
              </TouchableOpacity>
            }
            leftComponent={
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: 'Lato-Bold',
                    fontWeight: 'bold',
                    width: 250,
                  }}>
                  Applicone
                </Text>
              </View>
            }
          />
        </Animated.View>

        <ScrollView
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: -5,
              paddingTop: 80,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                margin: 10,
              }}>
              Channels
            </Text>
            <Entypo
              name="plus"
              size={30}
              style={{margin: 10, marginTop: 5}}
              onPress={() => {
                this.props.navigation.navigate('CreateProject');
              }}
            />
          </View>
          <FlatList
            // stickyHeaderIndices={[0, 2, 4]}
            data={this.state.array}
            renderItem={this.Item}
            //   ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
