import React, {FunctionComponent, useRef} from 'react';
import styled from "styled-components/native";

//types
import { BalanceCardProps } from './types';

//components
import BalanceCard from './BalanceCard';

const BalanceCardBackground = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
  
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <BalanceCardBackground>
      <BalanceCard {...props}/>
    </BalanceCardBackground>
  )
}

export default BalanceCardSection;