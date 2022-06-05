import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import api from '../../../services/axios';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { 
    Container,
    Title,
    ButtonContainer,
} from './styles';

const Register = ({ route }) => {
    const { navigate } = useNavigation();

    const [classTypes, setClassTypes] = useState('');
    const [aboutClass, setAboutClass] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');

    const { name, lastname, email, password } = route.params;

    async function handleRegister() {
        if (!classTypes || !aboutClass || !aboutMe || !price || !phone || !picture) {
            return;
        }

        try {
            const response = await api.post(
                'teachers', 
                { 
                    name, 
                    lastname, 
                    email, 
                    password, 
                    class_types: classTypes, 
                    about_me: aboutMe, 
                    about_class: aboutClass, 
                    price, 
                    phone,
                    picture_url: picture,
                }
            );

            const { id } = response.data;

            navigate('TeacherEditProfile' as never, { teacherId: id } as never)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Container>
            <Title>Complete seu cadastro</Title>

            <Input
                title="Você dá aula de"
                placeholder='Matemática'
                onChangeText={value => setClassTypes(value)}
            />

            <Input
                title="Sobre a aula"
                onChangeText={value => setAboutClass(value)}
            />

            <Input
                title="Sobre você"
                onChangeText={value => setAboutMe(value)}
            />

            <Input
                title="Tafica horária"
                placeholder='R$'
                onChangeText={value => setPrice(value)}
            />

            <Input
                title="Número de telefone"
                placeholder='(00) 00000-0000'
                onChangeText={value => setPhone(value)}
                />

            <Input
                title="Foto de perfil"
                onChangeText={value => setPicture(value)}
            />

            <ButtonContainer>
                <Button 
                    text="Concluir cadastro" 
                    color="gray" 
                    onPress={handleRegister}
                />
            </ButtonContainer>
        </Container>
    );
}

export default Register;