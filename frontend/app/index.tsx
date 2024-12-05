import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MyButton from '../components/MyButton'; // Reusable button component
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  // Handlers for navigation
  const navigateToCampus = () => router.push('/campus/CampusLogin');
  const navigateToCompany = () => router.push('/company/CompanyLogin');
  const navigateToStudent = () => router.push('/student/StudentLogin');

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image 
        source={require('../assets/images/logo.jpg')} // Replace with your logo path
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>TalentConnect</Text>
      <Text style={styles.tagline}>
        Empowering Talent, Connecting Opportunities
      </Text>

      {/* Buttons for navigation */}
      <View style={styles.buttonContainer}>
        <MyButton title="Campus Login" onPress={navigateToCampus} />
        <MyButton title="Company Login" onPress={navigateToCompany} />
        <MyButton title="Student Login" onPress={navigateToStudent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D5006D', // Match your primary color
    marginVertical: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
});

export default index;