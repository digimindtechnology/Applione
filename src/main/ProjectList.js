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
  SectionList,
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
      padd: 70,
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

  Item2 = ({item}) => {
    return null;
  };

  Item1 = ({item}) => {
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
          <Text
            numberOfLines={1}
            style={{fontSize: 16, fontFamily: 'sans-serif'}}>
            Nihal nagar
          </Text>
          <Text
            numberOfLines={2}
            style={{color: 'grey', fontFamily: 'sans-serif'}}>
            Data assemble assigned by nihal nagar 
            Data assemble  assigned  nihal
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
  };

  Item = ({item}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#ffffff',
            // borderRadius: 10,
            // marginBottom: 5,
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
                    borderRadius: 100/8,
                    width: 20,
                    height: 20,
                  }}></View>
                <View
                  style={{
                    backgroundColor: '#2452c9',
                    alignSelf: 'center',
                    borderRadius: 100/8,
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
                      numberOfLines={1}
                      style={{
                        fontSize: 16,
                        fontFamily: 'sans-serif',
                        marginLeft: 13,
                        fontWeight: 'bold',
                        marginTop: 5,
                        width: '80%',
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
                  this.setState({s: !this.state.s});
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
                  name={this.state.s ? 'chevron-down' : 'chevron-right'}
                  size={25}
                  style={{marginTop: 5}}
                  color="#2452c9"
                  // GREY
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {this.state.s ? (
            <View
              style={{
                marginLeft: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: -40,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  color: 'transparent',
                  margin: 10,
                }}>
                .
              </Text>
              {/* <Entypo
                name="plus"
                size={30}
                style={{margin: 10, marginTop: 5}}
              /> */}
            </View>
          ) : null}

          {this.state.s ? (
            <View
              style={{
                width: '100%',
                backgroundColor: '#F5F5F5',
                marginTop: -10,
                flexDirection: 'row',
                justifyContent: 'space-between',
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
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('TaskList');
                }}
                style={{
                  alignItems: 'center',
                  width: 100,
                  height: 30,
                  borderRadius: 10,
                  // backgroundColor: '#e1e3eb',
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
            </View>
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Entypo
                  name="magnifying-glass"
                  size={23}
                  style={{marginRight: 10, marginTop: 5}}
                />
                {/* <Entypo name="menu" size={30} /> */}
              </TouchableOpacity>
            }
            leftComponent={
              <View style={{marginLeft: 5, marginTop: 10}}>
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

        {/* <View
          style={{
            marginLeft: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingTop: 30,
          }}>
          <Text
            style={{
              fontSize: 23,
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              margin: 10,
            }}>
            Channels
          </Text>
          <Entypo
            name="plus"
            size={27}
            style={{margin: 10}}
            onPress={() => {
              this.props.navigation.navigate('CreateProject');
            }}
          /> */}
        {/* </View> */}
        <SectionList
          // onTouchStart={() => this.setState({padd: 30})}
          contentContainerStyle={{paddingTop: 80, marginTop: 7}}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          sections={[
            {
              title: {key: 1, name: 'ANGUISH'},
              key: 1,
              data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'],
            },
            {
              title: {key: 3, name: 'ANGUISH'},
              key: 15,
              data: [
                'BEST MEN',
                'BEYOND JUSTICE',
                'BLACK GUNN',
                'BLOOD RANCH',
                'BEASTIES',
              ],
            },
            {
              title: {key: 3, name: 'ANGUISH'},
              key: 3,
              data: [
                'CARTEL',
                'CASTLE OF EVIL',
                'CHANCE',
                'COP GAME',
                'CROSS FIRE',
              ],
            },
            {
              title: {key: 4, name: 'ANGUISH'},
              key: 1,
              data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'],
            },
            {
              title: {key: 5, name: 'ANGUISH'},
              key: 2,
              data: [
                'BEST MEN',
                'BEYOND JUSTICE',
                'BLACK GUNN',
                'BLOOD RANCH',
                'BEASTIES',
              ],
            },
            {
              title: {key: 6, name: 'ANGUISH'},
              key: 4,
              data: [
                'CARTEL',
                'CASTLE OF EVIL',
                'CHANCE',
                'COP GAME',
                'CROSS FIRE',
              ],
            },
          ]}
          renderItem={this.state.s ? this.Item1 : this.Item2}
          renderSectionHeader={this.Item}
          stickySectionHeadersEnabled={true}
          stickyHeaderIndices={[0]}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CreateProject');
          }}
          style={{
            backgroundColor: '#2452c9',
            position: 'absolute',
            borderRadius: 100 / 2,
            padding: 8,
            elevation: 10,
            right: 10,
            bottom: 10,
          }}>
          <Entypo
            name="plus"
            size={30}
            color={'white'}
            style={{elevation: 10}}
            // onPress={() => this.chooseImage()}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8fb1aa',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
