import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import api from '../../../services/axios';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { 
    Container,
    RegisterButtonContainer,
    RegisterButton,
    RegisterButtonText,
    Title,
    ForgotPasswordButton,
    ForgotPasswordText,
} from './styles';

export type RootStackParamList = {
    YourScreen: { id: string };
  };

const Login = () => {
    const { navigate } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        if (!email || !password) {
            return;
        }

        try {
            const response = await api.post('sessions', { email, password, type_account: 'student' });
        
            navigate('StudentHome' as never)
        } catch (error) {
            console.log(error)
        }
    };

    function navigateToRegisterPage() {
        navigate('StudentRegister' as never);
    }

    return (
        <Container>
            <RegisterButtonContainer>
                <RegisterButton onPress={navigateToRegisterPage} >
                    <RegisterButtonText>Inscreva-se</RegisterButtonText>
                </RegisterButton>
            </RegisterButtonContainer>

            <Title>Digite suas credenciais</Title>

            <Input
                title="E-mail"
                placeholder='Digite seu email'
                onChangeText={(value) => setEmail(value)}
                />

            <Input
                title="Senha"
                placeholder='Digite sua senha'
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
            />

            <Button 
                text="Entrar" 
                color="gray" 
                onPress={handleLogin}
            />

            <ForgotPasswordButton>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButton>
        </Container>
    );
}

export default Login;