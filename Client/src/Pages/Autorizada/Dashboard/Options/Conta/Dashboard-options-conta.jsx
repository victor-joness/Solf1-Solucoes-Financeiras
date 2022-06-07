import React from 'react';
import './Dashboard-options-conta.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Menulateral from '../../../../../Components/NavBar/menulateral';
import avatar from '../../../../../images/AVATAR-ICON.png';
import avatar2 from '../../../../../images/AVATAR.png';

import UserContainer from '../../../../../Components/User/UserContainer';
import OptionsContainer from '../../../../../Components/Options/OptionsContainer';

const PageDashboardOptionsConta = () => {
    const navigate = useNavigate();

    const handleClickRegister = (values) => {
        Axios.post('http://localhost:3001/editar', {
            email: global.email,
            nome: values.nome,
            emailnovo: values.email,
            celular1: values.celular1,
            senha: values.senha
        }).then((response) => {
            console.log(response)

            global.nome = response.data.nome;
            global.email = response.data.email;
            global.celular = response.data.celular;
            global.endereco = response.data.endereco;

            navigate(`/Dashboard`);
        });
    };

    const nome = global.nome;

    const validationRegister = yup.object().shape({
        nome: yup
            .string()
            .min(5, 'Seu nome deve ter pelo menos 5 caracteres')
            .required(),
        email: yup
            .string()
            .email('insira um email valido')
            .required(),
        celular1: yup
            .string()
            .min(11, 'Seu Número deve ter pelo menos 11 caracteres')
            .max(11)
            .required(),
        senha: yup
            .string()
            .min(6, 'Sua senha deve ter pelo menos 6 caracteres')
            .required(),
    });

    return (
        <div className="OptionsConta--container">
            <Menulateral></Menulateral>
            <div className="OptionsConta--container--direita">
                <div className="OptionsConta--Container--direita__usuario">
                    <img src={avatar} alt="avatar do usuario" />
                    <h1>{nome}</h1>
                </div>

                <div className="OptionsConta--container--direita__mid">
                    <div className="OptionsConta--container--direita--mid__esquerda">
                        <UserContainer></UserContainer>
                        <OptionsContainer></OptionsContainer>
                    </div>

                    <div className="OptionsConta--container--direita--mid__direita">
                        <div className="OptionsConta--container--direita--mid--direita__infos">
                            <div className="OptionsConta--container--direita--mid--direita--infos__superior">
                                <h1>Informações pessoais</h1>

                                <h3>Editar</h3>
                            </div>

                            <div className="OptionsConta--container--direita--mid--direita--infos__mid">
                                <div className="OptionsConta--container--direita--mid--direita--infos--mid__image">
                                    <img
                                        src={avatar2}
                                        alt="imagem do usuario"
                                    />
                                </div>
                            </div>

                            <div className="OptionsConta--container--direita--mid--direita--infos--mid__inputs">
                                <Formik
                                    initialValues={{}}
                                    onSubmit={handleClickRegister}
                                    validationSchema={validationRegister}
                                >
                                    <Form className="OptionsConta-form">
                                        <div className="OptionsConta-form-input">
                                            <Field
                                                name="nome"
                                                className="form-OptionsConta"
                                                placeholder="Nome Do Usuário"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="nome"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <div className="OptionsConta-form-input">
                                            <Field
                                                name="email"
                                                className="form-OptionsConta"
                                                placeholder="Email Do Usuário"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="email"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <div className="OptionsConta-form-input">
                                            <Field
                                                name="celular1"
                                                className="form-OptionsConta"
                                                placeholder="Celular 1"
                                                autoComplete="off"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="celular1"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <div className="OptionsConta-form-input">
                                            <Field
                                                name="senha"
                                                className="form-OptionsConta"
                                                placeholder="Nova senha"
                                                autoComplete="off"
                                                type="password"
                                            ></Field>
                                            <ErrorMessage
                                                component="span"
                                                name="senha"
                                                className="form-error"
                                            ></ErrorMessage>
                                        </div>

                                        <button
                                            className="button2--OptionsConta"
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

                <div className="OptionsConta--Container--direita__footer">
                    <h2>
                        Criado por <span>Victor Mesquita</span> &{' '}
                        <span>Livian</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageDashboardOptionsConta;
