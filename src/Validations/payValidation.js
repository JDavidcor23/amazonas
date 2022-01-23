import * as yup from 'yup';

export const paySchema = yup.object().shape({
    creditCard: yup.number().required(),
    date: yup.string().required(),
    number:yup.number().required(), 
})