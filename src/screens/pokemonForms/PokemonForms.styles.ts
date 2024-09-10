import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  refetchButton: {
    marginBottom: 20,
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#E60000',
  },
  refetchButtonText: {
    color: '#ffffff',
  },
  formsListContainer: {
    marginTop: 20,
    flex: 1,
  },
  formButton: {
    marginLeft: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: '#dfe5eb',
  },
  formButtonText: {
    color: '#000',
  },
});

export default styles;
