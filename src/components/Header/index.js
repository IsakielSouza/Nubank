import React from 'react';

import {
    Container, Top, Logo, Title
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/NubankLogo.png';

export default function Herader() {
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Isakiel SS</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}