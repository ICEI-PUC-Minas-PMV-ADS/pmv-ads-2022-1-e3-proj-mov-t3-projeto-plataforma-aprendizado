import styled from 'styled-components';

export const Container = styled.View`
    padding: 0 24px;
`;

export const BackButtonContainer = styled.TouchableOpacity`
    margin: 24px 0 32px;
`;

export const BackButton = styled.Image`

`;

export const Content = styled.ScrollView`

`;

export const TeacherImage = styled.Image`
    width: 100%;
`;

export const TeacherName = styled.Text`
    margin: 16px auto 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #452E4F;
`;

export const DetailsContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

export const Detail = styled.View`
    align-items: center;
`;

export const DetailValue = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #452E4F;
`;

export const DetailDescription = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #C4C4C4;
`;

export const DescriptionContainer = styled.View`
    margin-top: 8px;
`;

export const Section = styled.View`

`;

export const Title = styled.Text`
    margin-top: 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    color: #452E4F;
`;

export const Description = styled.Text`
    margin-top: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #452E4F;
`;

export const BottomContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    margin-bottom: 60px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 48px;
    margin: auto;
    padding: 8px;
    background: #D8D8D8;
    border-radius: 20px;
`;

export const ButtonText = styled.Text`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
`;
