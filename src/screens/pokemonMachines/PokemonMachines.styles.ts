import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loadMorehButton: {
    marginVertical: 20,
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#E60000',
  },
  loadMoreButtonText: {
    color: '#ffffff',
  },
  machinesListContainer: {
    flex: 1,
    width: '100%',
  },
  machinesList: {
    paddingVertical: 20,
  },
  machinesListItem: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe5eb',
  },
});

export default styles;
