import { Box, Card, CardContent, Checkbox, Input, Radio, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function Room() {
    const { query } = useRouter()

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/home" style={{ textDecoration: 'none' }}>
                    Asosiy
                </Link>
                <Link underline="hover" color="inherit" href={`/home/${query.floor}`} style={{ textDecoration: 'none' }}>
                    {query.floor}-Qavat
                </Link>
                <Typography color="text.primary">{query.room}-Xona</Typography>
            </Breadcrumbs>
            <Box sx={{ display: 'flex', gap: '10px', mt: 4, flexDirection: 'column' }}>
                {
                    [1, 2, 3, 4, 5, 6].map((el) => (
                        <Card key={el} sx={{ p: '10px 20px' }}>
                            <CardContent sx={{ p: '0 !important', display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ m: 0, marginRight: '30px' }}>Shohjahon Hamidov</Typography>
                                <label style={{ display: 'flex', alignItems: 'center', marginRight: '20px', gap: '5px' }}>
                                    <Typography sx={{ m: 0 }}>bor</Typography>
                                    <Input name={`user-${el}`} type='radio' />
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <Typography sx={{ m: 0 }}>yo'q</Typography>
                                    <Input name={`user-${el}`} type='radio' />
                                </label>
                            </CardContent>
                        </Card>
                    ))
                }
            </Box>
        </Box>
    )
}
