import React, { useState } from 'react';
import { Text as MainText, View, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Text, TextInput } from '../../darkMode/ThemeComponents';
import { Link } from '@react-navigation/native';
import { Routes } from '../../constants';
import { styles } from './styles';

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
      <EvilIcons name="sc-pinterest" size={84} color="#b8001c" />
      <Text style={styles.title}>Welcome to Pinterest</Text>
      <View style={styles.inputContainer}>
        {/* --USER EMAIL-- */}
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
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
      </View>
    </View>
  );
};
export default LoginScreen;
