import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container, Code, Nav, 
    NavItem, NavText, SignOutButton, 
    SignOutButtonText 
} from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],              
            })
          }}>
            <Code>
                <Icon name="attach-money" size={50} color="#8b10ae" />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => { }} >
                <SignOutButtonText>Sair do APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}