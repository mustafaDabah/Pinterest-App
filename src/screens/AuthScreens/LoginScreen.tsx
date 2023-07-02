import React, { useState } from 'react';
import { Text as MainText, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Text, TextInput, View } from '../../darkMode/ThemeComponents';
import { Link } from '@react-navigation/native';
import { Routes } from '../../constants';
import { styles } from './styles';
import { Title } from '../../components/Auth';
import { useAuth } from '../../context/AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Handle login logic
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Title title="Welcome" subTitle="Welcome again! let's start the journey." />
      <View style={styles.inputContainer}>
        {/* --USER EMAIL-- */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* --PASSWORD CONTAINER-- */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.passwordToggle} onPress={handleTogglePassword}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        {/* --LOGIN BUTTON-- */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <MainText style={styles.loginButtonText}>Login</MainText>
        </TouchableOpacity>

        {/* --LINK SIGNUP-- */}
        <TouchableOpacity style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Don&apos;t have an account?</Text>
          {/* @ts-expect-error */}
          <Link to={{ screen: Routes.SIGNUP_SCREEN }} style={styles.signupLinkText}>
            {' '}
            Sign up
          </Link>
        </TouchableOpacity>
        <Link to={{ screen: Routes.ROOT_TAB }} style={styles.signupLinkText}>
          {' '}
          go to Home
        </Link>
      </View>
    </View>
  );
};
export default LoginScreen;
