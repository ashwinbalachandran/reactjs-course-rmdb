import React from 'react'
import PropTypes from 'prop-types'
// Styles
import {Wrapper, Content} from './Grid.styles'

//children is a default prop that we can use in React
const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid
