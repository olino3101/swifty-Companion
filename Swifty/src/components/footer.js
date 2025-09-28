import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Styles';
const Footer = ({view, setView}) => {
    return (
      <View style={styles.footer}>
        {view === '42InfoScreen' && (
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => setView('loginScreen')}
          >
            <Text style={styles.footerButtonText}>Back to Login</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }


export default Footer;  