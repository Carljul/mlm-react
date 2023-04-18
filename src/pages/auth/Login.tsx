import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow, useIonAlert, useIonRouter } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useStateContext } from '../../provider/ContextProvider';
import { validateEmail } from '../../services/validationServices';
import { getService, postService, serviceStatus } from '../../services/httpServices';

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
            <IonContent className="ion-padding">
                <form onSubmit={formLogin}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <h1>MLM</h1>
                            </IonCol>
                            <IonCol>
                                <h1>
                                    <IonRouterLink routerLink='/app/home' className='float-right'>Store</IonRouterLink>
                                </h1>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`} fill="outline">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} ref={emailRef}></IonInput>
                                    <IonNote slot="helper">Enter a valid email</IonNote>
                                    <IonNote slot="error">Invalid email</IonNote>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='outline'>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" ref={passwordRef} onKeyPress={handleEnterKey}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="full" type='submit'>
                                    Login
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class='center'>
                                <IonRouterLink routerLink='/signup'>Sign Up</IonRouterLink>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;
