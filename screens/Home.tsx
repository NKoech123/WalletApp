import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// custom components
import { colors } from '../components/colors';
import { Container } from '../components/shared';
import CardSection from '../components/Cards/CardSection';
import logo1 from '../assets/cards/visa.png';
import logo2 from '../assets/cards/mastercard.png';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

// images
import portrait1 from '../assets/portrait/img1.png';
import portrait2 from '../assets/portrait/img2.png';
import portrait3 from '../assets/portrait/img3.png';

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

//types 
import { RootStackParamList } from '../navigators/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type Props = NativeStackScreenProps<RootStackParamList, "Home">

const Home: FunctionComponent<Props> = ( {navigation} ) => {
  const cardData = [
    {
      id: 1,
      accountNo:"34342535",
      balance:200043.21,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo:"99344335",
      balance:790043.01,
      alias: "Personal prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo:"23425441",
      balance:89043.18,
      alias: "School prepaid",
      logo: logo1,
    },
  ];
  const transactionData = [
    {
      id: 1,
      amount:"-$98.00",
      date:"14 Sep 2022",
      title: "Taxi",
      subtitle: "Uber ride",
      art:{
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount:"-$200.02",
      date:"10 Sep 2022",
      title: "Shopping",
      subtitle: "Amazon Online",
      art:{
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount:"-$970.81",
      date:"10 Sep 2022",
      title: "Travel",
      subtitle: "Emirates",
      art:{
        background: colors.accent,
        icon: "airplane",
      },
    },
  ];
  const sendMoneyData = [
    {
      id: 1,
      amount: "2600.72",
      name: "Ben Davis",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "96.15",
      name: "Ken Dan",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "100.33",
      name: "Charles Harley",
      background: colors.accent,
      img: portrait3,
    },

  ];
  return (
    <HomeContainer>
        <StatusBar style="dark"/>
        <CardSection data={cardData}/>
        <TransactionSection data={transactionData}/>
        <SendMoneySection data={sendMoneyData}/>
    </HomeContainer>
    
  )
}

export default Home;