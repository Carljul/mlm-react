import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';

const Login: React.FC = () => {
    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('/app', 'root', 'replace')
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonButton expand="full" onClick={() => doLogin()}>
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
