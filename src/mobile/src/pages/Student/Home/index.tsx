import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { 
    Container,
    Title,
    Subtitle,
    SearchInputContainer,
    SearchInput,
    SearchButton,
} from './styles';

import searchIcon from '../../../assets/searchicon.png';

const Home = () => {
    const { navigate } = useNavigation()

    const [subject, setSubject] = useState('');

    function handleSearchButton() {
        navigate('TeachersList' as never, { subject } as never);
    };

    return (
        <Container>
            <Title>Encontre os melhores para o seu aprendizado!</Title>

            <SearchInputContainer>
                <SearchInput 
                    placeholder="O que você deseja estudar?"
                    onChangeText={value => setSubject(value)}
                />

                <SearchButton onPress={handleSearchButton}>
                    <Image source={searchIcon} />
                </SearchButton>
            </SearchInputContainer>

            <Subtitle>Aulas online, escolha dentre diversos professores</Subtitle>
        </Container>
    );
}

export default Home;