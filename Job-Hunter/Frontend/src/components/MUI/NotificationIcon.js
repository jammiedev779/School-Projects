import * as React from 'react';
import Badge from '@mui/material/Badge';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStateContext } from '../../context/ContextProvider';
export default function NotificationIcon() {
    const {numNotification} = useStateContext();
    return (
        <Badge badgeContent={numNotification} color="primary">
            <NotificationsIcon className='text-one hover:text-two'  />
        </Badge>
    );
}