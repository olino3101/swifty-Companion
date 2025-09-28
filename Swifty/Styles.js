import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
  },

  // Fixed header height
  header: {
    height: 70,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 1,
  },

  // Flexible content (takes remaining space)
  content: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBox: {
    width: '80%',
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
  },
  infoText: {
    fontSize: 16,
    marginVertical: 4,
    color: '#000',
  },

  // Fixed footer height
  footer: {
    height: 60,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#fff',
  },
  footerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Scrollable user data section
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
    paddingVertical: 20,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  footer: {
    paddingVertical: 15,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#fff',
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'center', // center the buttons in the row
    alignItems: 'center',
    marginVertical: 10,
  },
  
  buttonSmall: {
    width: 110,             // fixed width for all buttons
    height: 45,
    backgroundColor: '#00babc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,    // spacing between buttons
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
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // circular
    borderWidth: 2,
    borderColor: '#00babc',
  },
  username: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  
});

export default styles;
