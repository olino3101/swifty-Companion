import { View, Text, Image } from 'react-native';
import styles from '../../Styles';


const Header = ({ userData }) => {
  const username = userData ? userData.login : 'Guest';
  const level = userData ? userData.level : 'N/A';
  const wallet = userData ? userData.wallet : 0;
  const correctionPoints = userData ? userData.correction_point : 0;
  const imageUrl = userData ? userData.image.versions.medium : '';
  const email = userData ? userData.email : 'N/A';
  const phone = userData ? userData.phone : 'N/A';
  const location = userData ? userData.location : 'N/A';
  const displayName = userData ? userData.displayname : 'N/A';
  const campus = userData && userData.campus && userData.campus.length > 0 ? userData.campus[0].name : 'N/A';
  const cursus = userData && userData.cursus_users && userData.cursus_users.length > 0 ? userData.cursus_users[0].cursus.name : 'N/A';
  const cursusLevel = userData && userData.cursus_users && userData.cursus_users.length > 0 ? userData.cursus_users[0].level : 'N/A';
  return (
    <View style={styles.header}>
  {userData ? (
    <>
      <Text style={styles.headerText}>Welcome, {username}!</Text>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.avatar}
          resizeMode="cover"
        />
        ) : null}
      <Text style={styles.infoText}>
        Level {level} · Wallet {wallet}$ · Correction Points {correctionPoints}
      </Text>

      {/* Profile Info */}
      <View style={styles.profileBox}>
        <Text style={styles.infoText}>Display Name: {displayName}</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Phone: {phone}</Text>
        <Text style={styles.infoText}>Location: {location}</Text>
        <Text style={styles.infoText}>Campus: {campus}</Text>
        <Text style={styles.infoText}>
          Cursus: {cursus} (Level {cursusLevel})
        </Text>
      </View>
    </>
  ) : (
    <Text style={styles.headerText}>42 Users</Text>
  )}
</View>
  );
}

export default Header;