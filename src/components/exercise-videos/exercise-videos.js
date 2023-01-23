import React from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ name, exerciseVideos, loading }) => {

    <CircularProgress color="secondary" />

    return (
        <Box
            sx={{
                marginTop: { lg: "200px", xs: "20px" }
            }}
            p="20px"
        >
            <Typography
                variant='h4'
                mb="50px"
                textAlign="center"
            >
                Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise
            </Typography>
            <Stack
                justifyContent="center"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },
                    gap: { lg: "100px", xs: "0" }
                }}
            >
                {
                    exerciseVideos.length
                        ? exerciseVideos?.slice(0, 3).map((item, index) => (
                            <a
                                key={index}
                                className="exercise-video"
                                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                                <Box>
                                    <Typography variant='h5' color="#000">
                                        {item.video.title}
                                    </Typography>
                                    <Typography variant='h5' color="#000">
                                        {item.video.channelName}
                                    </Typography>
                                </Box>
                            </a>
                        ))
                        : <CircularProgress color="secondary" />

                }
            </Stack>
        </Box>
    )
};

export default ExerciseVideos;