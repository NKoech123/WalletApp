import React, {FunctionComponent} from 'react'
import styled from "styled-components/native";

//components
const cardList = styled.FlatList`
   width: 100%;
   flex: 1;
   padding-left: 25px;
   padding-bottom: 15px;
`;

//types
import { CardSectionProps } from './types';

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <cardList
     data = {props.data}
     horizontal={true}
     showHorizontalScrollIndicator={false}
     contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
     }}
     keyExtractor={({id}:any)=>id.toString()}
     renderItem={}
    />

    
  );
}

export default CardSection;