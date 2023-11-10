import dayjs from 'dayjs';

export const calculateAge = (bornDate: string ) => {
    return  Number(dayjs().get('year') ) - Number(dayjs(bornDate).get('year'))
}