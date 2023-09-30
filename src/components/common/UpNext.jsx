import { Box, Typography , styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 50px;
    & > p {
        color: #F5C518;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

const Wrapper = styled(Box)`
    color: #FFFFFF;
    display: flex;
    & > p {
        margin-left: 50px;
    }
`

const Poster = styled('img')({
    width: '25%'
})

const UpNext = ({ movies }) => {
    return (
        <Component>
            <Typography>Up next</Typography>
            {
                movies.splice(0, 3).map(movie => (
                    <Wrapper>
                        <Poster src={`https://images.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                        <Typography>{movie.original_title}</Typography>
                    </Wrapper>
                ))
            }
        </Component>
    )
}

export default UpNext;