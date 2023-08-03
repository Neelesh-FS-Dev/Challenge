/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, Dimensions, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/button';
import styles from './style';
import {Demo} from '../../components/picker';

const Screen1 = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const fontFamily = 'Montserrat-VariableFont_wght';
  const games = [
    {
      title: 'UNDER OR OVER',
      startingIn: '03:23:12',
      description: 'Bitcoin price will be under ',
      content: '$24,524 at 7 a ET on 22nd Jan’21',
    },
  ];

  const gameStats = [
    {title: 'PRIZE POOL', value: '$12,000'},
    {title: 'UNDER', value: '3.25x'},
    {title: 'OVER', value: '1.25x'},
    {
      title: 'ENTRY FEES',
      value: '5',
      icon: require('../../../assets/images/gold.png'),
    },
  ];
  const handleUnderButtonClick = () => {
    setShowBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
  };
  const screenHeight = Dimensions.get('screen').height;
  const bottomSheetHeight = screenHeight * 0.4;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor="transparent" />

      <Text style={styles.gamesHeading}>Today’s Games</Text>
      {games.map((game, index) => (
        <View key={index} style={styles.gameCard}>
          <View style={styles.gameInfo}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Text style={styles.gameTitle}>{game.title}</Text>
              <Image source={require('../../../assets/images/info.png')} />
            </View>
            <View style={{flexDirection: 'row', gap: 7, alignItems: 'center'}}>
              <Text style={styles.startingIn}>Starting in</Text>
              <Image source={require('../../../assets/images/Clock.png')} />
              <Text style={styles.startingIn}>{game.startingIn}</Text>
            </View>
          </View>
          <Text style={styles.gameDescription}>{game.description}</Text>
          <Text
            style={{
              fontSize: 14,
              color: '#FFF',
              fontFamily: fontFamily,
              marginHorizontal: 15,
              marginTop: 5,
            }}>
            {game.content}
          </Text>
        </View>
      ))}

      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          {gameStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statTitle}>{stat.title}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.predictionText}>What’s your prediction?</Text>
        <View style={styles.predictionButtonsContainer}>
          <Button
            icon={require('../../../assets/images/arrow.png')}
            variant="primary"
            title="Under"
          />
          <Button
            icon={require('../../../assets/images/arrowdown.png')}
            variant="secondary"
            title="Over"
            onPress={handleUnderButtonClick}
          />
        </View>
      </View>

      <View style={styles.playersChartContainer}>
        <View style={styles.playersChartHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 9}}>
            <Image source={require('../../../assets/images/icon.png')} />
            <Text style={{fontFamily: fontFamily}}>355 Players</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 9}}>
            <Image source={require('../../../assets/images/chart.png')} />
            <Text style={{fontFamily: fontFamily}}>View chart</Text>
          </View>
        </View>
        <View style={styles.playersChart}>
          <View style={styles.predictedUnder} />
          <View style={styles.predictedOver} />
        </View>
        <View style={styles.playersChartFooter}>
          <Text style={styles.predictedCount}>232 predicted under</Text>
          <Text style={styles.predictedCount}>123 predicted over</Text>
        </View>
      </View>

      <Modal
        visible={showBottomSheet}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseBottomSheet}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.blurContainer} />
          <View
            style={[styles.bottomSheetContent, {height: bottomSheetHeight}]}>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.predictionHeading}>
                Your Prediction is Under
              </Text>
              <Text style={styles.entryTicket}>Entry Ticket</Text>
            </View>

            <Demo />
            <Text style={styles.youCanWin}>You can win</Text>
            <View style={styles.rewardContainer}>
              <Text style={styles.rewardAmount}>$2000</Text>
              <Text style={{color: '#727682', fontFamily: fontFamily}}>
                Total
                <Image source={require('../../../assets/images/gold.png')} /> 5
              </Text>
            </View>
            <View style={styles.closeButtonContainer}>
              <Button
                variant="secondary"
                title="Submit my prediction"
                onPress={handleCloseBottomSheet}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Screen1;
