import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, useIonRouter } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { validateEmail } from "../../services/validationServices";
import { getService, postService } from "../../services/httpServices";
import { useStateContext } from "../../provider/ContextProvider";
import {HiUserAdd} from 'react-icons/hi';

import loginModule from '../../css/Login.module.css';


const SignUp: React.FC = () => {
    // Navigations
    const navigation = useIonRouter()

    // States
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();
    const [errors, setErrors] = useState(null);

    // References
    const fullnameRef = useRef<HTMLIonInputElement>(null);
    const emailRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);
    const confirmPasswordRef = useRef<HTMLIonInputElement>(null);

    // Provider
    const {setUser, setToken} = useStateContext();


    useEffect(() => {
        getService('/user').then((data) => {
            if (typeof data !== 'undefined' && data !== null) {
                navigation.push('/app/home', 'root', 'replace');
            }
        })
    }, [])

    const doSignUp = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            name: fullnameRef.current ? fullnameRef.current.value : '',
            email: emailRef.current ? emailRef.current.value : '',
            password: passwordRef.current ? passwordRef.current.value : '',
            password_confirmation: confirmPasswordRef.current ? confirmPasswordRef.current.value : ''
        }

        postService('/signup', payload).then(function (result) {
            if (result.errors) {
                setErrors(result.errors)
            } else if (result.error) {
                setErrors(result.message)
            } else {
                setUser(result.user)
                setToken(result.token)
                navigation.push('/app/home', 'root', 'replace');
            }
        });
    }

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;
    
        setIsValid(undefined);
    
        if (value === '') return;
    
        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };
    
    const markTouched = () => {
        setIsTouched(true);
    };

    const clearErrorsOnInput = () => {
        setErrors(null);
    }
    return (
        <IonPage className={loginModule['epa-login-signup']}>
            <IonContent className="ion-padding">
                <IonRow className={loginModule['epa-login-logo-container']}>
                    <IonCol class='center'>
                        <HiUserAdd className={`icon ${loginModule['epa-login-logo']}`}/>
                    </IonCol>
                </IonRow>
                <form onSubmit={doSignUp}>
                    <IonGrid>
                        {
                            errors && <IonRow><IonCol><div className="d-block">
                                {Object.keys(errors).map(key => (
                                    <p key={key} className="text-red">{errors[key]}</p>
                                ))}
                            </div></IonCol></IonRow>
                        }
                        <IonRow>
                            <IonCol>
                                <IonItem fill='solid' className={loginModule['epa-login-input']}>
                                    <IonLabel position="floating">Full name</IonLabel>
                                    <IonInput type="text" ref={fullnameRef} onKeyUp={clearErrorsOnInput}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem className={loginModule['epa-login-input']} fill="solid">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} ref={emailRef}  onKeyUp={clearErrorsOnInput} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='solid' className={loginModule['epa-login-input']}>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" ref={passwordRef} onKeyUp={clearErrorsOnInput}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='solid' className={loginModule['epa-login-input']}>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput type="password" ref={confirmPasswordRef} onKeyUp={clearErrorsOnInput}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" type='submit' shape='round' className='epa-button-reverse'>
                                    Sign Up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class='center'>
                                <IonButton routerLink='/login' shape='round' fill='outline' className={loginModule['epa-login-signup-link']}>
                                    Login Instead?
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );
}

export default SignUp;