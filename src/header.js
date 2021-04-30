import React from 'react'
import styled from 'styled-components'

function Header (props) {
    const {data} = props;
    
    return (
        <div className="Header">
            <Title>{data.title}</Title>
            <Date>Date: {data.date}</Date>
        </div>
    );
};

const Title = styled.h1`
text-decoration: underline;`

const Date = styled.h2`
text-decoration: underline;`

export default Header