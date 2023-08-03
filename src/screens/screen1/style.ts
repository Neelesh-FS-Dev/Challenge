import {StyleSheet} from 'react-native';
const fontFamily = 'Montserrat-VariableFont_wght';
const fontFamily2 = 'AvenirNextLTPro-Bold';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    marginTop: 12,
  },
  gamesHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 10,
  },
  gameCard: {
    borderRadius: 1,
    borderColor: '#EEEAF3',
    backgroundColor: '#6231AD',
    // paddingHorizontal: 40,
    paddingVertical: 25,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  gameTitle: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontFamily,
    color: '#D2BAF5',
  },
  startingIn: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily,

    color: '#B296DC',
  },
  gameDescription: {
    marginRight: 90,
    marginTop: 12,
    color: '#D2BAF5',
    marginHorizontal: 15,

    fontFamily: fontFamily,
  },
  statsContainer: {
    borderWidth: 1,
    borderColor: '#EEEAF3',
    padding: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    justifyContent: 'space-between',
    gap: 3,
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily,

    color: '#B5C0C8',
  },
  statValue: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontFamily2,
    fontStyle: 'normal',
    color: '#333333',
  },
  predictionText: {
    fontSize: 14,
    fontFamily: fontFamily,
    marginTop: 20,
    color: '#727682',
  },
  predictionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 17.5,
    marginTop: 20,
  },
  playersChartContainer: {
    backgroundColor: '#F6F3FA',
    borderWidth: 0.1,
  },
  playersChartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 7,
  },
  playersChart: {
    flexDirection: 'row',
    paddingHorizontal: 29,
  },
  predictedUnder: {
    borderColor: '#FE4190',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 5,
    paddingHorizontal: 120,
  },
  predictedOver: {
    borderColor: '#2DABAD',
    borderWidth: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 36,
  },
  playersChartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 7,
    padding: 20,
  },
  predictedCount: {
    color: '#B5C0C8',
    fontFamily: fontFamily,
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
    marginVertical: 10,
    gap: 10,
  },
  predictionHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily: fontFamily,
  },
  entryTicket: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontFamily,
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
    gap: 50,
  },
  rewardAmount: {
    fontFamily: fontFamily,
    color: '#03A67F',
    fontSize: 14,
  },
  closeButtonContainer: {
    marginTop: 20,
  },
});

export default styles;
