import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={1}
            sx={{ m: 3, p: 3, bgcolor: `${'primary.light'}`, borderRadius: '5px' }}
        >
            <>
                <Box>
                    <Typography variant="h6" mb={1}></Typography>
                    <Button
                        color="primary"
                        target="_blank"
                        disableElevation
                        href="https://tma.com.gr/en/"
                        variant="contained"
                        aria-label="Go to TMA website"
                        size="small"
                    >
                        Go to TMA
                    </Button>
                </Box>
                <Box mt="-35px">
                </Box>
            </>
        </Box>
    );
};
