import styled from 'styled-components';

export const Container = styled.ScrollView`

`;

export const Title = styled.Text`
    margin: 32px auto 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #452E4F;
`;

export const ProfilePicture = styled.Image`
    width: 80px;
    height: 80px;
    margin: 0 auto 32px;
    border-radius: 80px;
`;

export const InputsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ButtonContainer = styled.View`
    margin: 16px auto 32px;
`;