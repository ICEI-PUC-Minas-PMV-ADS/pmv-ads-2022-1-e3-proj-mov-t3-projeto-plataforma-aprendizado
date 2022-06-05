import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { 
    Container,
    Header,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    Teachers,
    Teacher,
    TeacherImage,
    TeacherInfo,
    TeacherName,
    TeacherClasses,
    TeacherDescription,
    TagsContainer,
    Tag,
} from './styles';

import searchIcon from '../../../assets/searchicon2.png';
import teacherImageTemplate from '../../../assets/teacher_template.png';
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

const TeachersList = ({ route }) => {
    const { navigate } = useNavigation()

    const { subject: routeSubject } = route.params;

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [subject, setSubject] = useState(routeSubject);

    async function fetchTeachers() {
        try {
            const response = await api.get('teachers', { params: { class_types: subject } });

            setTeachers(response.data);
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchTeachers();
    }, []);

    function handleOpenTeacherProfile(teacher: Teacher) {
        navigate('TeacherProfile' as never, teacher as never);
    };

    return (
        <Container>
            <Header>
                <SearchInputContainer>
                    <SearchButton onPress={fetchTeachers}>
                        <Image style={{ width: 16, height: 16 }} source={searchIcon} />
                    </SearchButton>

                    <SearchInput 
                        placeholder="O que você deseja estudar?"
                        onChangeText={value => setSubject(value)}
                        value={subject}
                    />
                </SearchInputContainer>
            </Header>

            <Teachers
                showsVerticalScrollIndicator={false}
            >
                { teachers.map(teacher => (
                    <Teacher key={teacher.id} onPress={() => handleOpenTeacherProfile(teacher)} >
                        <TeacherImage source={teacherImageTemplate} />

                        <TeacherInfo>
                            <TeacherName>{teacher.name} {teacher.lastname}</TeacherName>
                            <TeacherClasses>Professora de {teacher.class_types}</TeacherClasses>
                            <TeacherDescription>Aulas Particulares e de Reforço</TeacherDescription>

                            <TagsContainer>
                                <Tag>{Number(teacher.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Tag>

                                <Tag>1a hora grátis</Tag>
                            </TagsContainer>
                        </TeacherInfo>
                    </Teacher>
                ))}
            </Teachers>
        </Container>
    );
}

export default TeachersList;