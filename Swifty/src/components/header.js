import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../Styles';

const Header = ({ userData, view, setView, setUserData }) => {
  const username = userData ? userData.login : 'Guest';
  const wallet = userData ? userData.wallet : 0;
  const correctionPoints = userData ? userData.correction_point : 0;
  const imageUrl = userData ? userData.image.versions.medium : '';
  const email = userData ? userData.email : 'N/A';
  const displayName = userData ? userData.displayname : 'N/A';
  const campus = userData && userData.campus && userData.campus.length > 1 ?
    userData.campus[1].name : userData && userData.campus ? userData.campus[0].name : 'N/A';
  const cursus = userData && userData.cursus_users && userData.cursus_users.length > 1 ?
    userData.cursus_users[1].cursus.name : userData && userData.cursus_users ? userData.cursus_users[0].cursus.name : 'N/A';
  const cursusLevel = userData && userData.cursus_users && userData.cursus_users.length > 1 ?
    userData.cursus_users[1].level : userData && userData.cursus_users ? userData.cursus_users[0].level : 'N/A';
  
  const everyInfo = `Login: ${username} · Wallet: ${wallet}$ · Correction Points: ${correctionPoints} · Display Name: ${displayName} · Email: ${email} · Campus: ${campus} Cursus: ${cursus} (Level ${cursusLevel})`;

  return (
    <View style={styles.header}>
  {userData ? (
    <>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.avatar}
          resizeMode="cover"
            />
          
          ) : null}
        {view === '42InfoScreen' && (
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => { setView('loginScreen');  setUserData(null); }}
          >
            <Text style={styles.footerButtonText}> Login</Text>
          </TouchableOpacity>
        )}
      {/* Profile Info */}
      <View style={styles.profileBox}>
            <Text style={styles.infoText}>{everyInfo}</Text>
            
      </View>
    </>
  ) : (
    <Text style={styles.headerText}>42 Users</Text>
  )}
</View>
  );
}

export default Header;