import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { register } from '../api/companyApi';

const CompanySignup: React.FC = () => {
  const router = useRouter();

  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    setError(null);

    if (!companyName || !email || !contactNumber || !password || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    try {
      // Prepare data for API call
      const data = { companyName, email, contactNumber, password };

      // Call the register API
      const response = await register(data);

      if (response.success) {
        setIsDialogVisible(true);
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (e) {
      setError('An error occurred during signup. Please try again.');
    }
  };

  const handleDialogClose = () => {
    setIsDialogVisible(false);
    router.push('/company/CompanyLogin');
  };

  const handleLogin = () => {
    router.push('/company/CompanyLogin');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-image-url.com/signup-banner.png' }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Create a Company Account. Connect with top talent effortlessly!
      </Text>
      <Text style={styles.subtitle}>
        Expand your business and connect with the best candidates.
      </Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Enter Your Company Name"
        placeholderTextColor="#888"
        value={companyName}
        onChangeText={setCompanyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Company Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a contact number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.row}>
        <Checkbox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          style={styles.checkbox}
        />
        <Text style={styles.agreementText}>
          By signing up, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>──────────── Or SignUp With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={handleLogin}>
          Login here.
        </Text>
      </Text>

      <Modal
        transparent={true}
        visible={isDialogVisible}
        animationType="slide"
        onRequestClose={handleDialogClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Thank you for signing up!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleDialogClose}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  errorText: { color: 'red', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkbox: { marginRight: 10 },
  agreementText: { fontSize: 14, color: '#666' },
  linkText: { color: '#007BFF' },
  signupButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5 },
  signupButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#666', marginVertical: 10 },
  socialRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  socialButton: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 50, marginHorizontal: 5 },
  socialText: { fontSize: 16, fontWeight: 'bold' },
  loginText: { textAlign: 'center', color: '#666' },
  loginLink: { color: '#007BFF' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalText: { fontSize: 16, marginBottom: 20 },
  modalButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  modalButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default CompanySignup;
