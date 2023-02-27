import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useRef, useState } from 'react';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const Login: React.FC = () => {
    // Navigations
    const navigation = useIonRouter()
    const toLogin = useIonRouter();

    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();

    // References
    const emailRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);
    const {token} = useStateContext();
  
    if (token) {
      toLogin.push('/app/home', 'root', 'replace');
    }

    const doLogin = () => {
        const payload = {
            email: emailRef.current ? emailRef.current.value : '',
            password: passwordRef.current ? passwordRef.current.value : ''
        }

        axiosClient.post('/login', payload).then(({data}) => {
            console.log(data)
        })

        // if (payload.email === 'admin@gmail.com' && payload.password === 'admin') {
        //     localStorage.setItem('auth', 'true');
        //     navigation.push('/app', 'root', 'replace')
        // } else {
        //     alert('No account matched');
        // }
    }


    const validateEmail = (email: string) => {
        return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;

        setIsValid(undefined);

        if (value === '') return;

        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} ref={emailRef}></IonInput>
                                <IonNote slot="helper">Enter a valid email</IonNote>
                                <IonNote slot="error">Invalid email</IonNote>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" ref={passwordRef}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" onClick={() => doLogin()}>
                                Login
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;
