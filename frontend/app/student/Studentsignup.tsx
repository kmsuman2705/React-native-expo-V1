import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'expo-checkbox'; // Import Expo CheckBox
import * as DocumentPicker from 'expo-document-picker'; // Import Expo Document Picker for file upload

const Studentsignup = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resume, setResume] = useState(null); // For resume upload
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = () => {
    if (fullName && email && contactNumber && password && confirmPassword && resume) {
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else if (!agreeToTerms) {
        alert('You must agree to the Terms of Service and Privacy Policy.');
      } else {
        // Proceed to the next step (e.g., campus dashboard)
        router.push('/student/student-dashboard');
      }
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleLogin = () => {
    router.push('/student/StudentLogin'); // Redirect to login page
  };

  const handleResumeUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (result.type === 'success') {
      setResume(result);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: 'https://your-image-url.com/signup-banner.png' }} // Replace with your image URL
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>
        Keep your career opportunities open by signing up now!
      </Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        placeholderTextColor="#888"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Resume Upload */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleResumeUpload}>
        <Text style={styles.uploadButtonText}>
          {resume ? `Resume: ${resume.name}` : 'Upload your Resume (PDF/DOCX)'}
        </Text>
      </TouchableOpacity>

      {/* Agreement Section */}
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

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Or Signup With */}
      <Text style={styles.orText}>──────────── Or SignUp With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text> {/* Replace with Google Icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>in</Text> {/* Replace with LinkedIn Icon */}
        </TouchableOpacity>
      </View>

      {/* Already Have an Account? */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={handleLogin}>
          Login here.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  checkbox: {
    marginRight: 8,
  },
  agreementText: {
    fontSize: 12,
    color: '#444',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: '#007BFF',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 12,
    color: '#888',
    marginVertical: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  loginText: {
    fontSize: 12,
    color: '#888',
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
  uploadButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#444',
  },
});

export default Studentsignup;
