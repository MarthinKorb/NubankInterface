import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container, Content, Card,
  CardHeader, CardContent, Title,
  Description, CardFooter, Annotation
} from './styles';

export default function Main() {

  return (
    <Container>
      <Header />
      <Content>

        <Menu />

        
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 1.197.546,98</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$150,00 recebida de Maico Kley hoje às 15:00h
            </Annotation>
            </CardFooter>
          </Card>
        

      </Content>

      <Tabs />
    </Container>
  );
}
