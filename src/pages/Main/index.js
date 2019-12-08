import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { 
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation 
} from './styles';

export default function Main() {
  return(
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 1.201.665,01</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferencia de 20,00 recebida de Leticia Moreira hoje ás 08:00h</Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
