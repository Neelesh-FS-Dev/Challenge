/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import styles from './style';
const data = [
  {
    id: '1',
    title: 'First Stripe Earned',
    description: 'Top 10% of highest spending players in a month',
  },
  {
    id: '2',
    title: 'Monthly Top Player',
    description: 'Earned the highest points in the last month',
  },
  {
    id: '3',
    title: 'Lucky Draw Winner',
    description: 'Won a lucky draw and received amazing rewards',
  },
  {
    id: '4',
    title: 'Early Bird Bonus',
    description: 'One of the first 100 users to sign up and get a bonus',
  },
  {
    id: '5',
    title: 'Community Contributor',
    description: 'Contributed significantly to the community discussions',
  },
  {
    id: '6',
    title: 'Level Up',
    description: 'Reached the next level in the game',
  },
  {
    id: '7',
    title: 'Weekend Warrior',
    description: 'Played games consistently on weekends',
  },
  {
    id: '8',
    title: 'Social Media Influencer',
    description: 'Promoted the app on social media and got recognition',
  },
  {
    id: '9',
    title: 'Super Referrer',
    description: 'Referred a large number of friends to join the app',
  },
  {
    id: '10',
    title: 'Grand Prize Winner',
    description: 'Won the grand prize in a special event',
  },
];
const Screen3 = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <Image source={require('../../../assets/images/Vector.png')} />
          <Text style={{color: '#727682', fontSize: 14}}>Profile</Text>
          <Image source={require('../../../assets/images/message.png')} />
        </View>
        <View style={styles.profileImage}>
          <Image source={require('../../../assets/images/profile.png')} />
          <Text style={styles.profileName}>Jina Simons</Text>
          <Text style={styles.profilePoints}>6000 Pts</Text>
          <Text style={styles.profileDescription}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
          <View style={styles.logoutContainer}>
            <Image source={require('../../../assets/images/sign.png')} />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsText}>
            <Text>under or over</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('../../../assets/images/up.png')} />
              <Text style={styles.statsPercentage}>81%</Text>
            </View>
          </View>
          <View style={styles.statsText}>
            <Text>Top 5</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('../../../assets/images/down.png')} />
              <Text style={styles.statsPercentage}>-51%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <Text style={{fontSize: 14, fontWeight: '600'}}>Games played</Text>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#6231AD'}}>
          Badges
        </Text>
      </View>
      {data.map(item => (
        <View key={item.id} style={styles.listItem}>
          <Image
            source={require('../../../assets/images/menducky.png')}
            style={styles.listItemIcon}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemDescription}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Screen3;
