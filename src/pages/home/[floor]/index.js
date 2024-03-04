import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Room() {
    const { query } = useRouter()

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/home" style={{ textDecoration: 'none' }}>
                    Yo'qlama
                </Link>
                <Typography color="text.primary">{query.floor}-Qavat</Typography>
            </Breadcrumbs>
            <Box sx={{ display: 'flex', gap: '10px', mt: 4, flexDirection: 'column' }}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
                        <Link key={el} href={`/home/${query.floor}/${el}`} style={{ textDecoration: ' none' }}>
                            <Card sx={{ p: '8px 15px' }}>
                                <CardContent sx={{ p: '0 !important' }}>
                                    <Typography sx={{ m: 0 }}>{el} - Xona</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    )
}
