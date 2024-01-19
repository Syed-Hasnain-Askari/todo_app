import { Box } from '@mui/material';
import SideBar from '@/components/SideBar';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}
