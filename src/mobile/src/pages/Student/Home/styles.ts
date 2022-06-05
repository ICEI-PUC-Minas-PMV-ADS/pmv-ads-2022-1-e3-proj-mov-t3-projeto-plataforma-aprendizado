import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    width: 300px;
    margin-bottom: 64px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #452E4F;
`;

export const Subtitle = styled.Text`
    width: 280px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #452E4F;
`;

export const SearchInputContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 304px;
    height: 68px;
    padding: 8px;
    margin-bottom: 96px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

export const SearchInput = styled.TextInput`
    width: 240px;
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
    width: 40px;
    height: 40px;
    background: #C4C4C4;
    border-radius: 12px;
`;
