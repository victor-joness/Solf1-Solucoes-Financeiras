import './Dashboard-options-endereço.css';

import Menulateral from '../../../../../Components/NavBar/menulateral';
import UserContainer from '../../../../../Components/User/UserContainer';
import avatar from '../../../../../images/AVATAR-ICON.png';
import avatar2 from '../../../../../images/AVATAR.png';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import OptionsContainer from '../../../../../Components/Options/OptionsContainer';

const PageDashboardOptionsEndereco = () => {
    const nome = global.nome;

    const navigate = useNavigate();

    const handleClickRegister = (values) => {
        Axios.post('http://localhost:3001/endereco', {
            email: global.email,
            idcliente: 0,
            cidade: values.cidade,
            cep: values.cep,
            numero: values.numero,
        }).then((response) => {
            console.log(response);

            global.endereco = response.data.endereco;

            navigate(`/Dashboard`);
        });
    };

    const validationRegister = yup.object().shape({
        cidade: yup
            .string()
            .min(3, 'Sua cidade deve ter pelo menos 3 caracteres')
            .required(),
        cep: yup
            .string()
            .min(8, 'Seu cep deve ter pelo menos 8 caracteres')
            .required(),
        numero: yup
            .string()
            .min(2, 'Seu Número deve ter pelo menos 5 caracteres')
            .max(5)
            .required(),
    });

    return (
        <div className="endereco--container">
            <Menulateral></Menulateral>
            <div className="endereco--container--direita">
                <div className="endereco--Container--direita__usuario">
                    <img src={avatar} alt="avatar do usuario" />
                    <h1>{nome}</h1>
                </div>

                <div className="endereco--container--direita__mid">
                    <div className="endereco--container--direita--mid__esquerda">
                        <UserContainer></UserContainer>
                        <OptionsContainer></OptionsContainer>
                    </div>

                    <div className="endereco--container--direita--mid__direita">
                        <div className="endereco--container--direita--mid--direita__infos">
                            <div className="endereco--container--direita--mid--direita--infos__superior">
                                <h1>Informações pessoais</h1>

                                <h3>Editar Endereço</h3>
                            </div>

                            <div className="endereco--container--direita--mid--direita--infos--mid__inputs">
                                <Formik
                                    initialValues={{}}
                                    onSubmit={handleClickRegister}
                                    validationSchema={validationRegister}
                                >
                                    <Form className="endereco-form">
                                        <div className="endereco-form-input">
                                            <Field
                                                name="cidade"
                                                className="form-endereco"
                                                placeholder="Cidade"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="cidade"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <div className="endereco-form-input">
                                            <Field
                                                name="cep"
                                                className="form-endereco"
                                                placeholder="Cep"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="cep"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <div className="endereco-form-input">
                                            <Field
                                                name="numero"
                                                className="form-endereco"
                                                placeholder="Numero"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="numero"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <button
                                            className="button2--endereco"
                                            type="submit"
                                        >
                                            Salvar mudança
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="endereco--Container--direita__footer">
                    <h2>
                        Criado por <span>Victor Mesquita</span> &{' '}
                        <span>Livian</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageDashboardOptionsEndereco;
