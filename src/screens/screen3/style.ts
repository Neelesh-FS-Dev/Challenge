import {StyleSheet} from 'react-native';
const fontFamily = 'Montserrat-VariableFont_wght';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 17,
    marginVertical: 20,
  },
  profileImage: {
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
  profileName: {
    fontSize: 14,
    color: '#333',
    fontFamily: fontFamily,
  },
  profilePoints: {
    color: '#727682',
    fontWeight: '500',
    fontFamily: fontFamily,
    fontStyle: 'normal',
    fontSize: 14,
  },
  profileDescription: {
    color: '#727682',
    marginHorizontal: 20,
    fontWeight: '500',
    fontFamily: fontFamily,
    fontStyle: 'normal',
    fontSize: 14,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {
    color: '#727682',
    fontSize: 14,
    fontFamily: fontFamily,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#EEEAF3',
    paddingHorizontal: 70,
    gap: 90,
  },
  statsText: {
    gap: 10,
  },
  statsPercentage: {
    fontSize: 24,
    fontFamily: fontFamily,
    color: '#4F4F4F',
    fontWeight: '700',
  },
  separator: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 210,
    marginTop: 3,
    borderColor: '#F3F2F7',
  },
  listItem: {
    backgroundColor: '#fff',
    margin: 10,
    paddingLeft: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
  },
  listItemIcon: {
    gap: 16,
  },
  listItemTitle: {
    color: '#000',
    textAlign: 'left',
    fontFamily: fontFamily,
    fontSize: 14,
    fontWeight: '600',
  },
  listItemDescription: {
    color: '#727682',
    fontFamily: fontFamily,
    textAlign: 'left',
    marginRight: 50,
    fontWeight: '500',
  },
});

export default styles;
