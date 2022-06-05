import styled from 'styled-components/native';

interface ButtonProps {
    color: 'gray' | 'white';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 48px;
    padding: 8px;
    margin: 16px auto 0;
    background: ${props => props.color === 'gray' ? '#D8D8D8' : '#fff'};
    border-radius: 22px;
    box-shadow: 10px 5px 5px black;
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${props => props.color === 'gray' ? '#FFF' : '#452E4F'};
`;