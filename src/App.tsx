import { useContext } from 'react';

import { Box, CircularProgress } from '@mui/material';

import { PeopleContext } from './context';
import { Form, CardList, NoContent } from './components';



export const App = () => {
  const { people, isLoading } = useContext( PeopleContext );
  
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      mt={2}
    >
      <Box width='75%' mb={10}>
        <Form />
      </Box>

      {
        isLoading 
        ? <CircularProgress color='secondary' />
        : (
          <>
          {
            people && people.length <= 0 
            ? <NoContent />
            : <CardList people={ people }/>
          }
          </>
        )
      }
    </Box>
  )
}
