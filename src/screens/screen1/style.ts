import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  gamesHeading: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
  },
  gameCard: {
    borderRadius: 1,
    borderColor: '#EEEAF3',
    backgroundColor: '#6231AD',
    padding: 40,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D2BAF5',
  },
  startingIn: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B296DC',
  },
  gameDescription: {
    marginRight: 90,
    marginTop: 10,
    color: '#FFF',
  },
  statsContainer: {
    borderWidth: 0.5,
    borderColor: '#EEEAF3',
    padding: 40,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    justifyContent: 'space-between',
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B5C0C8',
  },
  statValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },
  predictionText: {
    fontSize: 14,
    marginTop: 20,
    color: '#727682',
  },
  predictionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  playersChartContainer: {
    backgroundColor: '#F6F3FA',
  },
  playersChartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 15,
  },
  playersChart: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  predictedUnder: {
    borderColor: '#FE4190',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 5,
    paddingHorizontal: 90,
  },
  predictedOver: {
    borderColor: '#2DABAD',
    borderWidth: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 50,
  },
  playersChartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    padding: 20,
  },
  predictedCount: {
    color: '#B5C0C8',
  },
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeader: {
    marginVertical: 20,
    gap: 10,
  },
  predictionHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  entryTicket: {
    fontSize: 12,
    fontWeight: '600',
    color: '#727682',
  },
  picker: {
    marginVertical: 40,
  },
  youCanWin: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B5C0C8',
    marginTop: 10,
  },
  rewardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardAmount: {
    color: '#03A67F',
    fontSize: 14,
  },
  closeButtonContainer: {
    marginTop: 20,
  },
});

export default styles;
