import { useContext } from 'react';

import { Box, Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';

import { Person } from '../interfaces';
import { PeopleContext } from '../context';

export const Form = () => {

    const { isLoading, addPerson, toggleLoading } = useContext( PeopleContext )

    const { handleSubmit, formState: { errors }, getValues, control, reset } = useForm<Person>({
        defaultValues: {
            completeName: '',
            bornDate: dayjs().format('DD/MM/YYYY'),
            comments: ''
        }
    });

    const submit = ( formData: Person ) => {
        toggleLoading();
        addPerson(formData);
        reset();
        toggleLoading();
    }

    return (
        <form onSubmit={handleSubmit(submit)} >
            <Controller
                name='completeName'
                rules={{
                    required: 'Su nombre completo es requerido',
                    pattern: {
                        value: /^[\u00F1A-Za-z _]*[\u00F1A-Za-z][\u00F1A-Za-z _]*$/,
                        message: 'Solo Caracteres Alfabéticos de A-Z, espacio en blanco y tildes.'
                    },                    
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                }}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label='Nombre completo'
                        variant='filled'
                        fullWidth
                        rows={1}
                        sx={{ mb: 5, mt: 5 }}
                        error={!!errors.completeName}
                        helperText={errors.completeName?.message}
                    />
                )}
            />
            <Controller
                name='bornDate'
                control={ control }
                rules={{
                    required: 'La Fecha de nacimiento es requerida',
                    minLength: { value: 10, message: 'La fecha debe ir en el formato dd/mm/yyyy' }
                }}
                render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            {...field}
                            value={ dayjs(getValues('bornDate'))}
                            disableFuture
                            minDate={ dayjs('01/01/1990') }
                            label='Fecha de Nacimiento'
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
                )}
            />

            <Controller
                name='comments'
                rules={{
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                }}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label='Comentarios'
                        variant='filled'
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ mb: 5, mt: 5 }}
                        error={!!errors.comments}
                        helperText={errors.comments?.message}
                    />
                )}
            />

            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Button
                    type='submit'
                    disabled={ isLoading }
                >
                    Guardar
                </Button>
            </Box>
        </form>
    )
}
