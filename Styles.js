import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  headerText: {
    fontSize: isLandscape ? 18 : 22, // smaller in landscape
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  content: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: isLandscape ? 40 : 20,
  },

  loginBox: {
    width: isLandscape ? '60%' : '80%', // wider in landscape
    alignItems: 'center',
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#00babc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },

  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#00babc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  infoText: {
    fontSize: 16,
    marginVertical: 8,
    color: '#000',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  footer: {
    flex: 0.2,
    paddingVertical: 10,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },

  userDataContainer: {
    flex: 1,
    width: '100%',
  },

  scrollContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    flex: 1.2,
    paddingVertical: 15,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

  section: {
    flexDirection: 'row', // row in landscape, stacked in portrait
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  buttonSmall: {
    width: 110,
    height: 45,
    backgroundColor: '#00babc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: isLandscape ? 0 : 5, // extra spacing in portrait
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  avatarContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  avatar: {
    width: isLandscape ? 80 : 100,
    height: isLandscape ? 80 : 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00babc',
  },

  username: {
    marginTop: 8,
    fontSize: isLandscape ? 16 : 18,
    fontWeight: '700',
    color: '#000',
  },
  footerButton: {
  position: 'absolute',
  top: 20,       // distance from the top
  right: 20,     // distance from the right
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#fff',
  backgroundColor: '#00babc', // optional for visibility
  zIndex: 10,   // make sure it floats above content
},
footerButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

});

export default styles;



