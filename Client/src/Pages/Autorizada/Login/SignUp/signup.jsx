import React , {useState}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import contextAdmin from '../../../../Context/ContextAdmin';

import './signup.css';
import MenulateralNoUser from '../../../../Components/NavBar No user/menulateralNoUser';

const PageLoginSignUp = () => {
    const [useLogin, setUseLogin] = useState(1);

    const navigate = useNavigate();

    const escolheuSignIn = () => {
        navigate(`/SignIn`);
    };

    const handleClickRegister = (values) => {
        console.log(values);

        Axios.post('http://localhost:3001/register', {
            nome: values.nome,
            email: values.email,
            password: values.password,
        }).then((response) => {
            alert(response.data.msg);
            //faço um if do response e se a mensage for boa ele ja atualiza o estado de uma variavel global que sera usada para identificar o usuario
            if(response.data.admincode === 1){
                console.log(response);
                global.variavel = 1;
                global.nome = response.data.nome;
                global.email = response.data.email;
                global.celular = "Insira um celular";
                global.endereco = "Insira um endereco";
                navigate(`/dashboard`);
            }else if(response.data.admincode === 2){
                console.log(response);
                global.variavel = 2;
                global.nome = response.data.nome;
                global.email = response.data.email;
                global.celular = "Insira um celular";
                global.endereco = "Insira um endereco";
                navigate(`/admin`);
            }else{
                console.log(response);
                global.variavel = 0
                navigate(`/`);
            }
        });
    };

    const validationRegister = yup.object().shape({
        nome: yup
            .string()
            .min(5, 'Seu nome deve ter pelo menos 5 caracteres')
            .required('Este campo é obrigatório'),
        email: yup
            .string()
            .email('insira um email valido')
            .required('Este campo é obrigatório'),
        password: yup
            .string()
            .min(6, 'Sua senha deve ter pelo menos 6 caracteres')
            .required('Este campo é obrigatório'),
        confirmPassword: yup
            .string()
            .test(
                'passwords-match',
                'A senha deve ser igual',
                function (value) {
                    return this.parent.password === value;
                }
            ),
    });

    return (
        <contextAdmin.Provider value={[useLogin, setUseLogin]}>
            <div className="signup-container">
                <MenulateralNoUser></MenulateralNoUser>
                <div className="signup-container-direita">
                    <div className="signup-container-direita-main">
                        <h1>Sign up to continue!</h1>
                        <Formik
                            initialValues={{}}
                            onSubmit={handleClickRegister}
                            validationSchema={validationRegister}
                        >
                            <Form className="signup-form">
                                <div className="signup-form-input">
                                    <Field
                                        name="nome"
                                        className="form-field"
                                        placeholder="Nome Do Usuário"
                                        autoComplete="off"
                                    ></Field>
                                    <ErrorMessage
                                        component="span"
                                        name="nome"
                                        className="form-error"
                                    ></ErrorMessage>
                                </div>

                                <div className="signup-form-input">
                                    <Field
                                        name="email"
                                        className="form-field"
                                        placeholder="Email Do Usuário"
                                        autoComplete="off"
                                    ></Field>
                                    <ErrorMessage
                                        component="span"
                                        name="email"
                                        className="form-error"
                                    ></ErrorMessage>
                                </div>

                                <div className="signup-form-input">
                                    <Field
                                        name="password"
                                        className="form-field"
                                        placeholder="Senha Do Usuário"
                                        autoComplete="off"
                                        type="password"
                                    ></Field>
                                    <ErrorMessage
                                        component="span"
                                        name="password"
                                        className="form-error"
                                    ></ErrorMessage>
                                </div>

                                <div className="signup-form-input">
                                    <Field
                                        name="confirmPassword"
                                        className="form-field"
                                        placeholder="Confirme sua senha"
                                        autoComplete="off"
                                        type="password"
                                    ></Field>
                                    <ErrorMessage
                                        component="span"
                                        name="confirmPassword"
                                        className="form-error"
                                    ></ErrorMessage>
                                </div>

                                <button
                                    className="signup-form-button"
                                    type="submit"
                                >
                                    SIGN UP
                                </button>

                                <h2 className="signup-container-direita-footer__account">
                                    Você Já tem uma conta ?{' '}
                                    <p onClick={escolheuSignIn}>SIGN IN</p>
                                </h2>
                            </Form>
                        </Formik>
                    </div>

                    <div className="signup-container-direita-footer">
                        <h2>
                            Criado por <span>Victor Mesquita</span> &{' '}
                            <span>Livian</span>
                        </h2>
                    </div>
                </div>
            </div>
        </contextAdmin.Provider>
    );
};

export default PageLoginSignUp;
