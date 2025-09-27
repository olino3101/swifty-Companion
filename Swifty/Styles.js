import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // black background
    },
    header: {
      flex: 1,
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
    content: {
      flex: 3,
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
      fontSize: 20,
      fontWeight: '700',
      color: '#000',
    },
    footer: {
      flex: 1,
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
});
  
export default styles;
  