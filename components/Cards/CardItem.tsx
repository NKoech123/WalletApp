import React, {FunctionComponent} from 'react'
import styled from "styled-components/native";

//components
import { colors } from '../colors';
import { ScreenWidth } from '../shared';

const CardBackground = styled.ImageBackground`
   height: 75%;
   width: ${ScreenWidth*0.67}px;
   resize-mode: cover;
   background-color: ${colors.accent}
   border-radius: 25px;
   margin-right: 25px;
   overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
   height: 100%;
   border-radius: 25px;


`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
   width: 100%;
   height: 80%;
   resize-mode: contain;
   flex: 1;

`;
//images
import cardBg from '../../assets/avi/transparentBackground.jpeg';
//types
import { CardProps } from './types';

const CardItem: FunctionComponent<CardProps> =(props) => {
    const handlePress = () => {};
    return (
    <CardBackground source={cardBg}>
        <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
           <TouchableView>
             <CardRow></CardRow>
             <CardRow></CardRow>
           </TouchableView>
        </CardTouchable>
    </CardBackground>
    
  );
}

export default CardItem