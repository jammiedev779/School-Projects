import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularUnderLoad() {
    return <>
    <div className="fixed  w-full h-full top-0 left-0 z-20 flex justify-center items-center">
            <div className="absolute bg-black w-full h-full opacity-30">
            </div>
            <CircularProgress disableShrink size={50} thickness={3.5}/>
        </div>
    </>
}