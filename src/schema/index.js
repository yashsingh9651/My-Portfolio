import * as Yup from 'yup';
export const Schema = Yup.object({
    name:Yup.string().min(2).max(25).required('Please Enter Your Valid Name'),
    email:Yup.string().email().required('Please Enter Your Valid Email'),
    message:Yup.string().min(1).required('Please Enter Your Message')
});