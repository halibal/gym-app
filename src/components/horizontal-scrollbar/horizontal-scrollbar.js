import React, { useContext } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BodyPart, ExerciseCard } from '../index';
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, isBodyParts }) => {

    return (
        <>
            {
                data.length
                    ? <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        {
                            data.map((item) =>
                                <Box
                                    key={item.id || item}
                                    itemID={item.id || item}
                                    title={item.id || item}
                                    m="0 40px"
                                >
                                    {
                                        isBodyParts
                                            ? <BodyPart item={item} />
                                            : <ExerciseCard exercise={item} />
                                    }
                                </Box>
                            )
                        }
                    </ScrollMenu>
                    : <Stack direction="row" justifyContent="center">
                        <CircularProgress color='secondary' />
                    </Stack>
            }
        </>
    )
};

export default HorizontalScrollbar;