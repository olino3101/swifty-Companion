import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Styles';
const Footer = ({view, setView, setUserData}) => {
    return (
      <View style={styles.footer}>
        {view === '42InfoScreen' && (
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => { setView('loginScreen');  setUserData(null); }}
          >
            <Text style={styles.footerButtonText}> Login</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }


export default Footer;  