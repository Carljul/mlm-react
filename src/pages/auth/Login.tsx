import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, useIonAlert, useIonRouter } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../../provider/ContextProvider';
import { validateEmail } from '../../services/validationServices';
import { getService, postService, serviceStatus } from '../../services/httpServices';
import myLogo from '../../assets/logo/icon.jpg';

import test from '../../css/Login.module.css';

const Login: React.FC = () => {
    // Navigations
    const navigation = useIonRouter()

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
        // authChecker();
    }, [])
  

    const authChecker = function () {
        if (localStorage.getItem('ACCESS_TOKEN') === null) return false;
        getService('/user').then((data) => {
            serviceStatus(data.status)
            navigation.push('/app/home', 'root', 'replace');
        });
    }

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
        const payload = {
            email: emailRef.current ? emailRef.current.value : '',
            password: passwordRef.current ? passwordRef.current.value : ''
        }

        postService('/login', payload).then(function (response) {
            const data = response.data;
            if (serviceStatus(response.status)) {
                setUser(data.user)
                setToken(data.token)
                localStorage.removeItem('ACCESS_TOKEN');
                localStorage.setItem('ACCESS_TOKEN', data.token);
                navigation.push('/app/home', 'root', 'replace');
            } else {
                loginAlert({
                    header: 'Oh oh!',
                    message: 'No user match for given credentials',
                    buttons: ['OK']
                })
            }
        })
    }

    return (
        <IonPage>
            <IonContent className={`${test['epa-login']} ion-padding`}>
                <IonRow>
                    <IonCol class='center'>
                        <img src={myLogo} alt="Logo"  className="backgroundLogo"/>
                    </IonCol>
                </IonRow>
                <form onSubmit={formLogin} className='epa-login-form'>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem className={`${isValid && 'ion-valid loginInput'} ${isValid === false && 'ion-invalid loginInput'} ${isTouched && 'ion-touched loginInput'}`} fill="solid">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} ref={emailRef}></IonInput>
                                    <IonNote slot="helper" className='loginNote'>Enter a valid email</IonNote>
                                    <IonNote slot="error" className='loginNote'>Invalid email</IonNote>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='solid' className="loginInput">
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" ref={passwordRef} onKeyPress={handleEnterKey} className='testInput'/>
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
                                <IonButton routerLink='/signup' expand="block" shape='round' className='epa-button'>
                                    Sign up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class='center'>
                                <IonRouterLink>Forgot your password?</IonRouterLink>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
                <IonRow>
                    <IonCol class='center'>
                        <IonRouterLink routerLink='/app/home' style={{'--color': '#fff'}}>Visit Store</IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
