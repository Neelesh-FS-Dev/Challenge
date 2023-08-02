import {StyleSheet} from 'react-native';

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
  },
  profilePoints: {
    fontWeight: 'bold',
  },
  profileDescription: {
    color: '#727682',
    marginHorizontal: 20,
    fontWeight: '500',
    fontSize: 14,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 30,
    marginHorizontal: 20,
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
  },
  separator: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 210,
    marginTop: 10,
    borderColor: '#F3F2F7',
  },
  listItem: {
    backgroundColor: '#fff',
    margin: 10,
    paddingLeft: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  listItemIcon: {
    gap: 20,
  },
  listItemTitle: {
    color: '#000',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
  },
  listItemDescription: {
    color: '#727682',
    textAlign: 'left',
    marginRight: 50,
    fontWeight: '500',
  },
});

export default styles;
