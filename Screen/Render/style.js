import {StyleSheet, Dimensions} from 'react-native';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
 
  },

  mainCon: {
    backgroundColor: 'red',
    width: width * 0.5,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop : height * 0.3,
    borderRadius : width * .3,
  },

  txt: {
    color: 'white',
    alignSelf: 'center',
    fontSize : width * 0.04,
  },
});
