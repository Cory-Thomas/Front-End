import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import style from 'styled-components';

const StyledDiv = style.div`
  padding: 1%;
`;

export default function Post({user}){
    return(
        <StyledDiv>
            <motion.div
                whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0px 0px 8px rgba(0,0,0, 0.3)'
                }}
            >
                <Card>
                <div className='image'><CardImg src={user.picture} alt='Journal entry'/></div>
                <CardBody>
                <CardTitle><div className='card-title'>User: <Link to='/Profile' style={{color: '#89c9b8', fontWeight: 'bold'}}>{user.first_name} {user.last_name}</Link></div></CardTitle>
                <CardSubtitle><div className='card-subtitle'>{user.bio}</div></CardSubtitle>
                <CardSubtitle><div className='card-subtitle'>Comments: ...</div></CardSubtitle>
                </CardBody>
            </Card>
            </motion.div>
        </StyledDiv>
    )
}