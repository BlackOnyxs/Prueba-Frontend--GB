import { Box } from '@mui/material';
import { Form } from './components';
import { CardList } from './components/PeopleList';
import { Person } from './interfaces';

const peopleData:Person[] = [
  {
    completeName: 'Robin Avila',
    bornDate: '02/10/2000',
    comments: 'Some comments'
  },
  {
    completeName: 'Robin Avila',
    bornDate: '02/10/2000',
    comments: 'Some comments'
  },
  {
    completeName: 'Robin Avila',
    bornDate: '02/10/2000',
    comments: 'Some comments'
  },
]

export const App = () => {

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Box width='75%' mb={10}>
        <Form />
      </Box>

      <CardList people={ peopleData }/>
    </Box>
  )
}
