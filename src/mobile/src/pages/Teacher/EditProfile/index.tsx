import React, { useEffect, useState } from 'react';

import { 
    Container,
    Title,
    ProfilePicture,
    InputsContainer,
    ButtonContainer,
} from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import teacherTemplate from '../../../assets/teacher_template.png';
import api from '../../../services/axios';

interface Teacher {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    class_types: string;
    about_class: string;
    about_me: string;
    price: string;
    phone: string;
    picture_url: string;
}

const EditProfile = ({ route }) => {
    const { teacherId } = route.params;

    const [teacher, setTeacher] = useState<Teacher>();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [classTypes, setClassTypes] = useState('');
    const [aboutClass, setAboutClass] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');

    async function submit() {
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
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function fetchTeacher() {
            const response = await api.get(`teachers/:${teacherId}`);

            setTeacher(response.data);
        }        

        fetchTeacher();
    }, []);

    return (
        <Container>
            <Title>Perfil</Title>

            <ProfilePicture source={teacherTemplate} />

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
                onChangeText={(value) => setPassword(value)}
            />

            <Input
                title="Telefone"
                placeholder='(00) 00000-0000'
                onChangeText={(value) => setPhone(value)}
            />

            <Input
                title="Você dá aula de"
                onChangeText={(value) => setClassTypes(value)}
            />

            <Input
                title="Sobre a aula"
                onChangeText={(value) => setAboutClass(value)}
            />

            <Input
                title="Sobre você"
                onChangeText={(value) => setAboutMe(value)}
            />

            <Input
                title="Tarifa horária"
                placeholder='R$'
                onChangeText={(value) => setPrice(value)}
            />

            <ButtonContainer>
                <Button 
                    text="Salvar alterações" 
                    color="gray" 
                    onPress={submit}
                />
            </ButtonContainer>
        </Container>
    );
}

export default EditProfile;