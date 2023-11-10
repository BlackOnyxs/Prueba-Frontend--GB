import { FC } from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { Person } from '../interfaces'
import { calculateAge } from '../helpers';
import dayjs from 'dayjs';

interface Props {
    person: Person;
}

export const PersonCard: FC<Props> = ({ person: { completeName, bornDate, comments } }) => {
  
    return (
    <Grid
        item
        xs={12}
        sm={6}
        p={1}
>
        <Card>
            <CardHeader 
                title={ completeName }
                subheader={ `${dayjs(bornDate).format('DD/MM/YYYY')}, Edad: ${calculateAge(bornDate)} años.` }
            />
            <CardContent>

                <p style={{ textAlign: 'justify'}}><strong>Comentarios:</strong> { comments }</p>
            </CardContent>
        </Card>
    </Grid>
  )
}
