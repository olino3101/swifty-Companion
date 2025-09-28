import { View, Text } from 'react-native';
import styles from '../../Styles';


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>42 Swifty Companions</Text>
    </View>
  );
}

export default Header;