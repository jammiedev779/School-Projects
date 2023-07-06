import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function SkeletonListJob(){
    return <>
        <div className='w-full'>
            <Stack spacing={1}>
                <Skeleton variant="rounded" height={100} />
                <Skeleton variant="rounded" height={100} />
                <Skeleton variant="rounded" height={100} />
                <Skeleton variant="rounded" height={100} />
                <Skeleton variant="rounded" height={100} />
            </Stack>
        </div>
    </>
}