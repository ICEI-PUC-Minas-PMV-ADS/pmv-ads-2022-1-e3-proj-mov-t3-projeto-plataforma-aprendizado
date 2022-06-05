import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    ButtonText,
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    color: 'white' | 'gray',
    text: string
}

const Button = ({ color, text, ...rest }: ButtonProps) => {
    return (
        <Container color={color} {...rest}>
            <ButtonText color={color} >{text}</ButtonText>
        </Container>
    )
}

export default Button;