import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BodyPart } from '../index';
import { useStore } from '../../context/store-context';
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

const HorizontalScrollbar = () => {
    const { exercisesState } = useStore();
    const { bodyParts } = exercisesState;

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                bodyParts.map((item) =>
                    <Box
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        <BodyPart item={item} />
                    </Box>
                )
            }
        </ScrollMenu>
    )
};

export default HorizontalScrollbar;