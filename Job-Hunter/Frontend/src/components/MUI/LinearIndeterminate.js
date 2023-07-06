import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { CircularProgress } from '@mui/material';

export default function LinearIndeterminate() {
    return <>
        <div className="fixed  w-full h-full top-0 left-0 z-20 flex justify-center items-center">
            <div className="absolute bg-black w-full h-full opacity-30">
            </div>
            <div className='w-full absolute top-0 left-0'>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </div>
            <CircularProgress disableShrink size={50} thickness={3.5} />
        </div>

    </>

}