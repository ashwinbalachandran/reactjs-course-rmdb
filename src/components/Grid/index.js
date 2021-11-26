import React from 'react'
// Styles
import { Wrapper, Content } from './Grid.styles'

//children is a default prop that we can use in React
const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid
