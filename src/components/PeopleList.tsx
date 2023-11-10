import { FC } from 'react';
import { Person } from '../interfaces';
import { Grid } from '@mui/material';
import { PersonCard } from '.';

interface Props {
    people: Person[];
}

export const CardList: FC<Props> = ({ people }) => {
  return (
    <Grid container spacing={ 4 }>
      {
        people.map( (person, index) => (
          <PersonCard 
            key={index}
            person={ person }
          />
        ))
      }
    </Grid>
  )
}
