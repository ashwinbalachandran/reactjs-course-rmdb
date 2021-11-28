import React from 'react'
// Components
import Thumb from '../Thumb'
// Config
import { Image_BASE_URL, POSTER_SIZE } from '../../config'
// Image
import NoImage from '../../images/no_image.jpg'
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles'

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${Image_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
        </Content>
    </Wrapper>
)

export default MovieInfo
