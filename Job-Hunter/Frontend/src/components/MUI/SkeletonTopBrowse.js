import { Skeleton } from "@mui/material";


export default function SkeletonTopBrowse() {
    return <>
        <div className="flex gap-x-5 w-max mx-auto mt-10 overflow-hidden">
            <Skeleton variant="rounded" width={150} height={150} />
            <Skeleton variant="rounded" width={150} height={150} />
            <Skeleton variant="rounded" width={150} height={150} />
            <Skeleton variant="rounded" width={150} height={150} />
            <Skeleton variant="rounded" width={150} height={150} />
            <Skeleton variant="rounded" width={150} height={150} />
        </div>
    </>
}