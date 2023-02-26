import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';

const Login: React.FC = () => {
    const navigation = useIonRouter()
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const doLogin = () => {
        if (email == 'admin@gmail.com' && password == 'admin') {
            localStorage.setItem('auth', 'true');
            navigation.push('/app', 'root', 'replace')
        } else {
            alert('No account matched');
        }
    }


    const validateEmail = (email: string) => {
        return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;

        setEmail(value);

        setIsValid(undefined);

        if (value === '') return;

        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };


    const setPasswordsValue = (event: Event) => {
        setPassword((event.target as HTMLInputElement).value);
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
                                <IonNote slot="helper">Enter a valid email</IonNote>
                                <IonNote slot="error">Invalid email</IonNote>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" onIonInput={(event) => {setPasswordsValue(event)}} />
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
