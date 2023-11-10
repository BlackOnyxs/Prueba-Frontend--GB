import { FC } from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { Person } from '../interfaces'
import { calculateAge } from '../helpers';

interface Props {
    person: Person;
}

export const PersonCard: FC<Props> = ({ person: { completeName, bornDate, comments } }) => {
  
    return (
    <Grid
        item
        xs={12}
        sm={4}
        p={1}
>
        <Card>
            <CardHeader 
                title={ completeName }
                subheader={ `${bornDate}, Edad: ${calculateAge(bornDate)} años.` }
            />
            <CardContent>

                <p style={{ textAlign: 'justify'}}>Comentarios: { comments }</p>
            </CardContent>
        </Card>
    </Grid>
  )
}
