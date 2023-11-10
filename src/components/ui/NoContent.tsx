import { Box, Typography } from '@mui/material';
import FolderOffIcon from '@mui/icons-material/FolderOff';


export const NoContent = () => {
  return (
   <Box
    display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
   >
        <FolderOffIcon sx={{ fontSize: 70, color: '#421906' }} />
        <Typography variant='h6' color='#421906'>No hay información que mostrar</Typography>
   </Box>
  )
}
