import { IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, useIonAlert, useIonRouter } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../../provider/ContextProvider';
import { validateEmail } from '../../services/validationServices';
import { getService, postService, serviceStatus } from '../../services/httpServices';
import myLogo from '../../assets/logo/icon.jpg';
import {BiUserPin} from 'react-icons/bi';
import {RiLockPasswordLine} from 'react-icons/ri';

import loginModule from '../../css/Login.module.css';
import {authChecker, ServiceCallBack} from '../../services/authServices';
import { useHistory } from 'react-router';

interface LoginPayload {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // Navigations
    // const navigation = useIonRouter()
    const navigation = useHistory();

    // States
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();

    // Alerts
    const [loginAlert] = useIonAlert();

    // References
    const emailRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);
    const {setToken, setUser} = useStateContext();

    useEffect(() => {
        authChecker(ServiceCallBack.LOGIN).then(result => {
            if (!result) {
                setToken(null);
                setUser(null);
                return;
            }

            if (result) {
                navigation.replace('/app/home', 'root');
            }
        });
    }, [])

    const formLogin = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        doLogin()
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

    const handleEnterKey = (event: React.KeyboardEvent<HTMLIonInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            doLogin()
        }
    }

    const doLogin = () => {
        const payload: LoginPayload = {
            email: (emailRef.current ? emailRef.current.value : '') as string,
            password: (passwordRef.current ? passwordRef.current.value : '') as string
        }

        loginCreds(payload);
    }

    const loginCreds = function(payload: LoginPayload)
    {
        if (process.env.REACT_APP_ENV == 'static') {
            if (payload.email == 'admin@gmail.com' && payload.password == 'password') {
                setUser({
                    name: 'Admin Test',
                    email: 'admin@gmail.com',
                    cellphone_number: '09068765047',
                    genealogy_invitation_code: null,
                    role_id: 1,
                    id: 1,
                    avatar: 'https://www.chronostep.com/cswp/wp-content/uploads/2022/03/jul.png',
                    person: {
                        firstname: 'Admin',
                        middlename: 'Admin',
                        lastname: 'Admin',
                        suffix: null,
                        fullname: 'Admin A. Admin',
                        civil_status: 'Single',
                        gender: 'Male',
                        birthdate: '06/22/1997'
                    }
                });
                setToken('testToken');
                localStorage.removeItem('ACCESS_TOKEN');
                localStorage.setItem('ACCESS_TOKEN', 'testToken');
                navigation.replace('/app/home', 'root');
            }
        } else {
            postService('/login', payload).then(function (response) {
                const data = response.data;
                if (serviceStatus(response.status)) {
                    setUser(data.user)
                    setToken(data.token)
                    localStorage.removeItem('ACCESS_TOKEN');
                    localStorage.setItem('ACCESS_TOKEN', data.token);
                    navigation.replace('/app/home', 'root');
                } else {
                    loginAlert({
                        header: 'Oh oh!',
                        message: 'No user match for given credentials',
                        buttons: ['OK']
                    })
                }
            })
        }
    }

    return (
        <IonPage className={loginModule['epa-login-signup']}>
            <IonContent className="ion-padding">
                <IonRow className={loginModule['epa-login-logo-container']}>
                    <IonCol class='center'>
                        <img src={myLogo} alt="Logo" className={loginModule['epa-login-logo']}/>
                    </IonCol>
                </IonRow>
                <form onSubmit={formLogin} className={loginModule['epa-login-form']}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem className={loginModule['epa-login-input']} fill="solid">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} ref={emailRef}></IonInput>
                                    <BiUserPin className={loginModule['epa-login-icons']}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='solid' className={loginModule['epa-login-input']}>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" ref={passwordRef} onKeyPress={handleEnterKey} className='testInput'/>
                                    <RiLockPasswordLine className={loginModule['epa-login-icons']}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" type='submit' shape='round' className='epa-button'>
                                    Login
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className={loginModule['epa-login-remember-me']}>
                                    <IonItem>
                                        <IonCheckbox slot="start" />
                                        <IonLabel>Remember me</IonLabel>
                                    </IonItem>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div className={loginModule['epa-login-forgot-password']}>
                                    <IonItem>
                                        <IonRouterLink routerLink='/forgot-password'>Forgot your password?</IonRouterLink>
                                    </IonItem>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
            <IonFooter className={`${loginModule['epa-login-lower-portion']} ion-no-border`} no-border>
                <IonRow>
                    <IonCol class='center'>
                        <p style={{'color': '#fff', 'margin': '0'}}>Not a member?</p>
                        <IonButton routerLink='/signup' shape='round' fill='outline' className={loginModule['epa-login-signup-link']}>
                            Create account
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class='center'>
                        <IonRouterLink routerLink='/app/home' style={{'--color': '#fff'}}>Visit Store</IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonFooter>
        </IonPage>
    );
};

export default Login;
