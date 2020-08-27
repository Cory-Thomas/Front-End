import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import style from 'styled-components';

const StyledDiv = style.div`
  padding: 1%;
`;

export default function Post({user}){
    return(
        <StyledDiv>
            <Card>
                <div className='image'><CardImg src={user.picture} alt='Journal entry'/></div>
                <CardBody>
                <CardTitle><div className='card-title'>User: {user.first_name} {user.last_name}</div></CardTitle>
                <CardSubtitle><div className='card-subtitle'>{user.bio}</div></CardSubtitle>
                </CardBody>
            </Card>
        </StyledDiv>
    )
}