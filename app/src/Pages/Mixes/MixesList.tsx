import { Box, Typography } from "@mui/material";
import React from "react";
import { mixes } from "../../Types/Mixes";

interface MixesListProps {
    mixList: mixes,
    year: string
  }
  

const MixesList: React.FC<MixesListProps> = ({ mixList, year }) => {
    return (
        <>
            <Typography variant="h3" marginTop={6}>{year}</Typography>
            {Object.keys(mixList).map((month) => (
                <Box>
                    <Typography variant="body1" marginTop={3}>{month}</Typography>
                        {mixList[month].map(x => (
                        <Box marginTop={2}>
                            <a href={x.link} target="_blank">{x.name}</a>
                        </Box>))}
                </Box>
            ))}
        </>
    );
}
export { MixesList };
