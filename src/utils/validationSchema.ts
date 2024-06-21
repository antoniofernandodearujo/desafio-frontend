import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required('Nome de usuário é obrigatório'),
    fullName: yup.string().required('Nome completo é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    city: yup.string().required('Cidade é obrigatória'),
}).required();

export default schema;
