import React, { Component } from 'react';
import moment from 'moment';
import { Image,  StyleSheet, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';


  // Default values. Replace with provided by api when api ready.
const DEFAULT_VALUES = {
  club: {
    name: 'Malevich club',
    logoUrl: 'http://lviv-online.com/ua/wp-content/uploads/2016/09/malevich-club-lviv-logo.jpg',
    rating: 4.5,
  },
  event: {
    photoUrl: 'https://scontent.flwo1-1.fna.fbcdn.net/v/t35.0-12/23516209_1967578123509144_294036789_o.jpg?oh=024b55ac16e78119d6f9b3b4a4b46c44&oe=5A0B9CDA',
  }
}


class EventCard extends Component {
  render () {

    const { data } = this.props;

    const getDayNumber = (date) => {
      const dow = moment(date);
      return dow.format('D')
    }

    const getMonthText = (date) => {
      const dow = moment(date);
      return dow.format('MMM');
    }

    const getWeekDayText = (date) => {
      const dow = moment(date);
      return dow.format('dddd');
    }

    const getDateHour = (date) => {
      const dow = moment(date);
      return dow.format('H');
    }

    const getDateMinute = (date) => {
      const dow = moment(date);
      return dow.format('m');
    }

    return ( 
      <Card style={{ flex: 0, backgroundColor: 'black' }}>
      <CardItem>
        <Left>
           <Thumbnail source={{uri: DEFAULT_VALUES.club.logoUrl }} />
           <Body>
             <Text>{DEFAULT_VALUES.club.name}</Text>
             <Text note>Rating: {DEFAULT_VALUES.club.rating}</Text>
           </Body>
         </Left>
         <Right>
           <Text style={styles.date}>{getDayNumber(data.startAt)} {getMonthText(data.startAt)}</Text>
           <View style={styles.day}>
            <Text style={styles.dateDay}>{getWeekDayText(data.startAt)}</Text>
          </View>
         </Right>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: DEFAULT_VALUES.event.photoUrl }} style={styles.bodyImage}/>
      </CardItem>
      <CardItem style={{flex: 1}}>
        <Text style={styles.nameText}>{data.name}</Text>
        <View style={{marginLeft: 'auto'}}>
          <Text style={styles.time}>
            {getDateHour(data.startAt)}
            <Text style={styles.doubleDot}>:
              <Text style={styles.time}>{getDateMinute(data.startAt)}</Text>
            </Text>
          </Text>
        </View>
      </CardItem>
    </Card>
    );
  }
}

const styles = StyleSheet.create ({  
  mainContaiener: {
    flex: 1,  
    justifyContent: 'space-between',
  },
  bodyImage: {
    height: 200,
    width: 350,
    flex: 1,
  },
  date: {
    fontSize: 21,
  },
  dateDay: {
    color: '#800080',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 21,
    color: '#000000',
  },
  time: {
    fontSize: 24,
    fontWeight:'500',
    lineHeight: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#800080',
    paddingLeft: 10
  },
  doubleDot: {
    fontSize: 25,
    fontWeight:'500',
    color: '#800080',
  }
});

export default EventCard;