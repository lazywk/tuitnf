// ** MUI Imports
import { Box, Card, CardContent, Typography } from '@mui/material'
import Link from 'next/link'

const Home = () => {

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '10px', mt: 4, flexDirection: 'column' }}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <Link key={el} href={`/home/${el}`} style={{ textDecoration: ' none' }}>
              <Card sx={{ p: '8px 15px' }}>
                <CardContent sx={{ p: '0 !important' }}>
                  <Typography sx={{ m: 0 }}>{el} - Qavat</Typography>
                </CardContent>
              </Card>
            </Link>
          ))
        }
      </Box>
    </Box>
  )
}

export default Home
