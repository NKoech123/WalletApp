import { StatusBar } from 'expo-status-bar';
import React, {FunctionComponent, useRef} from 'react';
import styled from "styled-components/native";


//component
import { colors } from '../components/colors';
import { Container } from '../components/shared';
import AmountSection from '../components/Balance/AmountSection';
const BalanceContainer = styled(Container)`
  background-colo: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex:1;
`;

//types
import { RootStackParamList } from '../navigators/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
        <StatusBar style="dark" />
        <AmountSection balance={route?.params?.balance}/>
    </BalanceContainer>
  )
}

export default Balance;