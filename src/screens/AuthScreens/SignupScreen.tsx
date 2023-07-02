import React, { useState } from 'react';
import { Text as MainText, TouchableOpacity } from 'react-native';
import { Text, TextInput, View } from '../../darkMode/ThemeComponents';
import { Link } from '@react-navigation/native';
import { Routes } from '../../constants';
import { styles } from './styles';
import { PasswordConfirmMemo, Title } from '../../components/Auth';

const SignupScreen = () => {
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Handle login logic
  };

  return (
    <View style={styles.container}>
      <Title title="Welcome to Pinterest!" subTitle="create your profile to start your journey." />
      <View style={styles.inputContainer}>
        {/* --USER Name-- */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={UserName}
          onChangeText={setUserName}
          keyboardType="ascii-capable"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
        <PasswordConfirmMemo />

        {/* --LOGIN BUTTON-- */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <MainText style={styles.loginButtonText}>create</MainText>
        </TouchableOpacity>

        {/* --LINK SIGNUP-- */}
        <TouchableOpacity style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Don&apos;t have an account?</Text>
          {/* @ts-expect-error */}
          <Link to={{ screen: Routes.LOGIN_SCREEN }} style={styles.signupLinkText}>
            {' '}
            Login
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
