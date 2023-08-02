import {View, Text, Modal, Dimensions, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/button';
import {Picker} from '@react-native-picker/picker';
import styles from './style';

const Screen1 = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Element 1');

  const games = [
    {
      title: 'Under or Over',
      startingIn: '03:23:12',
      description:
        'Bitcoin price will be under $24,524 at 7 a ET on 22nd Jan’21',
    },
  ];

  const gameStats = [
    {title: 'Prize Pool', value: '$12,000'},
    {title: 'Under', value: '3.25x'},
    {title: 'Over', value: '1.25x'},
    {
      title: 'Entry Fees',
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
  const elements = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 6',
    'Element 7',
    'Element 8',
    'Element 9',
    'Element 10',
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor="transparent" />

      <Text style={styles.gamesHeading}>Today’s Games</Text>
      {games.map((game, index) => (
        <View key={index} style={styles.gameCard}>
          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>
              {game.title}
              <Image source={require('../../../assets/images/info.png')} />
            </Text>
            <Text style={styles.startingIn}>
              Starting in{' '}
              <Image source={require('../../../assets/images/Clock.png')} />
              {game.startingIn}
            </Text>
          </View>
          <Text style={styles.gameDescription}>{game.description}</Text>
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
            icon={require('../../../assets/images/up.png')}
            variant="primary"
            title="Under"
            onPress={handleUnderButtonClick}
          />
          <Button
            icon={require('../../../assets/images/down.png')}
            variant="secondary"
            title="Over"
          />
        </View>
      </View>

      <View style={styles.playersChartContainer}>
        <View style={styles.playersChartHeader}>
          <Text>
            <Image source={require('../../../assets/images/icon.png')} />
            355 Players
          </Text>
          <Text>
            <Image source={require('../../../assets/images/chart.png')} />
            View chart
          </Text>
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
            <Picker
              style={styles.picker}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              {elements.map((element, index) => (
                <Picker.Item key={index} label={element} value={element} />
              ))}
            </Picker>
            <Text style={styles.youCanWin}>You can win</Text>
            <View style={styles.rewardContainer}>
              <Text style={styles.rewardAmount}>$2000</Text>
              <Text>
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
