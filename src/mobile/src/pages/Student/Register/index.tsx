import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { 
    Container,
    LoginButtonContainer,
    LoginButton,
    LoginButtonText,
    Title,
    InputsContainer,
} from './styles';
import api from '../../../services/axios';

const Register = () => {
    const { navigate, goBack } = useNavigation();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleCreateAccount() {
        if (!name || !lastname || !email || !password) {
            return;
        }

        try {
            const response = await api.post('students', { name, lastname, email, password });
        
            navigate('StudentHome' as never)
        } catch (error) {
            console.log(error)
        }
    };

    function navigateToLoginPage() {
        goBack();
    }

    return (
        <Container>
            <LoginButtonContainer>
                <LoginButton onPress={navigateToLoginPage} >
                    <LoginButtonText>Entrar</LoginButtonText>
                </LoginButton>
            </LoginButtonContainer>

            <Title>Inscreva-se</Title>

            <InputsContainer>
                <Input
                    title="Nome"
                    halfSize={true}
                    placeholder='Digite seu nome'
                    onChangeText={(value) => setName(value)}
                />

                <Input
                    title="Sobrenome"
                    halfSize={true}
                    placeholder='Digite seu sobrenome'
                    onChangeText={(value) => setLastname(value)}
                />
            </InputsContainer>

            <Input
                title="E-mail"
                placeholder='Digite seu e-mail'
                onChangeText={(value) => setEmail(value)}
            />

            <Input
                title="Senha"
                placeholder='Digite sua senha'
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
            />

            <Button 
                text="Concluir cadastro" 
                color="gray" 
                onPress={handleCreateAccount}
            />
        </Container>
    );
}

export default Register;