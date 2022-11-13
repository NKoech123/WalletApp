import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// custom components
import { colors } from '../components/colors';
import { Container } from '../components/shared';
import CardSection from '../components/Cards/CardSection';
import logo1 from '../assets/cards/visa.png';
import logo2 from '../assets/cards/mastercard.png';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardData = [
    {
      id: 1,
      accountNo:"343425.35",
      balance:200043.21,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo:"993443.35",
      balance:790043.01,
      alias: "Personal prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo:"23425.41",
      balance:89043.18,
      alias: "School prepaid",
      logo: logo1,
    },
  ];
  return (
    <HomeContainer>
        <StatusBar style="dark"/>
        <CardSection data={cardData}/>
    </HomeContainer>
  )
}

export default Home;