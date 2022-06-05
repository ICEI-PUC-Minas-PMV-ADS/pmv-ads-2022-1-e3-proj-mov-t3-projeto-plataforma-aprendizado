import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { 
    Container,
    Title,
} from './styles';

const Home = () => {
    const { navigate } = useNavigation()

    function handleStudentButton() {
        navigate('StudentLogin' as never);
    };

    function handleTeacherButton() {
        navigate('TeacherLogin' as never);
    };

    return (
        <Container>
            <Title>Entrar como estudante ou professor?</Title>

            <Button 
                text="Sou estudante" 
                color="gray" 
                onPress={handleStudentButton}
            />
            
            <Button 
                text="Sou professor" 
                color="white" 
                onPress={handleTeacherButton}
            />
        </Container>
    );
}

export default Home;