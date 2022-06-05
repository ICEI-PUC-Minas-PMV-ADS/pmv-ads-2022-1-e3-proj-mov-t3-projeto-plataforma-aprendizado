import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    BackButtonContainer,
    BackButton,
    Content,
    TeacherImage,
    TeacherName,
    DetailsContainer,
    Detail,
    DetailValue,
    DetailDescription,
    DescriptionContainer,
    Section,
    Title,
    Description,
    BottomContainer,
    Button,
    ButtonText,
} from './styles';

import backicon from '../../../assets/backicon.png';
import teacherImageTemplate from '../../../assets/teacher_template.png';

const TeacherProfile = ({ route }) => {
    const { goBack } = useNavigation();

    const teacher = route.params;

    function handleBackButton() {
        goBack();
    }

    return (
        <Container>
            <BackButtonContainer onPress={handleBackButton}>
                <BackButton source={backicon} />
            </BackButtonContainer>

            <Content
                showsVerticalScrollIndicator={false}
            >
                <TeacherImage source={teacherImageTemplate} />

                <TeacherName>{teacher.name} {teacher.lastname}</TeacherName>

                <DetailsContainer>
                    <Detail>
                        <DetailValue>R${teacher.price}</DetailValue>

                        <DetailDescription>Preço hora/aula</DetailDescription>
                    </Detail>

                    <Detail>
                        <DetailValue>35+</DetailValue>

                        <DetailDescription>Número de alunos</DetailDescription>
                    </Detail>
                </DetailsContainer>

                <DescriptionContainer>
                    <Section>
                        <Title>Sobre a aula</Title>

                        <Description>
                            {teacher.about_class}
                        </Description>
                    </Section>

                    <Section>
                        <Title>Mais sobre {teacher.name} {teacher.lastname}</Title>

                        <Description>{teacher.about_me}</Description>
                    </Section>
                </DescriptionContainer>

                <BottomContainer>
                    <Button>
                        <ButtonText>Solicitar aulas</ButtonText>
                    </Button>
                </BottomContainer>
            </Content>
        </Container>
    );
}

export default TeacherProfile;