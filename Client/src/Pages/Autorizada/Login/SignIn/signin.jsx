import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';

import "./signin.css";
import MenulateralNoUser from '../../../../Components/NavBar No user/menulateralNoUser';

const PageLoginSignIn = () => {
    const navigate = useNavigate();

    const escolheuSignUp = () => {
        navigate(`/SignUp`);
    }

    const handleClickLogin = (values) => {
        window.alert("enviado");
        console.log(values);
    }

    const validationLogin = yup.object().shape({
        email : yup.string().email("insira um email valido").required("Este campo é obrigatório"),
        password : yup.string().min(6, "Sua senha deve ter pelo menos 6 caracteres").required("Este campo é obrigatório"),   
    });


    return(
        <div className="signin-container">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="signin-container-direita">
                <div className="signin-container-direita-main">
                    <h1>Sign In to continue!</h1>
                    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                        <Form className="signin-form">
                            <div className="signin-form-input">
                                <Field
                                    name="email"
                                    className="form-field"
                                    placeholder="Email Do Usuário"
                                    autocomplete="off"
                                ></Field>
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="form-error"
                                ></ErrorMessage>
                            </div>

                            <div className="signin-form-input">
                                <Field
                                    name="password"
                                    className="form-field"
                                    placeholder="Senha Do Usuário"
                                    autocomplete="off"
                                ></Field>
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                ></ErrorMessage>
                            </div>

                            <button
                                className="signin-form-button"
                                type="submit"
                            >SIGN IN</button>

                            <h2 className='signin-container-direita-footer__account'>Você ainda não tem uma conta ? <a onClick={escolheuSignUp}>SIGN UP</a></h2>
                        </Form>
                    </Formik>
                </div>

                <div className="signin-container-direita-footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageLoginSignIn;