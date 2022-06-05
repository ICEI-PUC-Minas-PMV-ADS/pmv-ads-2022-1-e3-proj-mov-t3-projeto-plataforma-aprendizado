import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 32px 16px 0;
`;

export const Header = styled.View`

`;

export const SearchInputContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 8px;
    margin-bottom: 32px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0 0 0 0.25);
    border-radius: 20px;
`;

export const SearchInput = styled.TextInput`
    width: 300px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #452E4F;
`;

export const SearchButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 12px;
`;

export const Teachers = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

export const Teacher = styled.TouchableOpacity`
    width: 100%;
    height: 320px;
    margin-bottom: 32px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

export const TeacherImage = styled.Image`
    width: 100%;
    border-radius: 20px;
`;

export const TeacherInfo = styled.View`
    padding: 12px;
`;

export const TeacherName = styled.Text`
    margin-bottom: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #452E4F;
`;

export const TeacherClasses = styled.Text`
    margin-bottom: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #452E4F;
`;

export const TeacherDescription = styled.Text`
    margin-bottom: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #452E4F;
`;

export const TagsContainer = styled.View`
    flex-direction: row;
`;

export const Tag = styled.Text`
    padding: 8px 6px 6px;
    margin-right: 24px;
    background: #c4c4c4;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
`;
