import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonNote, IonPage, IonRouterLink, IonRow } from "@ionic/react";
import { useRef, useState } from "react";
import { validateEmail } from "../../services/emailServices";


const SignUp: React.FC = () => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();
    const fullnameRef = useRef<HTMLIonInputElement>(null);
    const emailRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);
    const confirmPasswordRef = useRef<HTMLIonInputElement>(null);


    const doSignUp = () => {

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
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <form onSubmit={doSignUp}>
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
                                <IonItem fill='outline'>
                                    <IonLabel position="floating">Full name</IonLabel>
                                    <IonInput type="text" ref={fullnameRef}/>
                                </IonItem>
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
                                    <IonInput type="password" ref={passwordRef}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem fill='outline'>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput type="password" ref={confirmPasswordRef}/>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="full" type='submit'>
                                Sign Up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class='center'>
                                <IonRouterLink routerLink="/login">Login</IonRouterLink>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
    );
}

export default SignUp;