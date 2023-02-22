import { isPlatform, IonAvatar, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonToast } from '@ionic/react';
import Header from '../../components/HeaderComponent';
import {
    chevronForward,
    pencilOutline,
    locationOutline,
    heartOutline,
    timeOutline,
    receiptOutline,
    cardOutline,
    notificationsOutline,
    closeCircle,
    chevronForwardOutline
} from 'ionicons/icons'; 

const Account: React.FC = () => {
    const isIos = isPlatform('ios');
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonAvatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" className='profile'/>
                            </IonAvatar>
                        </IonCol>
                        <IonCol>
                            <h1>John Doe</h1>
                            <p>john.doe2023@gmail.com</p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem button key="profile">
                                    <IonIcon icon={pencilOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Edit Profile</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="shipping">
                                    <IonIcon icon={locationOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Shipping Address</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="wishlist">
                                    <IonIcon icon={heartOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Wishlist</IonLabel>
                                    <IonCard className='tagCard'>
                                        <IonCardContent>New</IonCardContent>
                                    </IonCard>
                                    {isIos ? <></> : <IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="history">
                                    <IonIcon icon={timeOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Order History</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="order">
                                    <IonIcon icon={receiptOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Track Order</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="cards">
                                    <IonIcon icon={cardOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Cards</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="notifications">
                                    <IonIcon icon={notificationsOutline} slot="start" className='profileIcons'></IonIcon>
                                    <IonLabel>Notifications</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* Toast */}
                <IonToast
                    isOpen={true}
                    message="Got a component with the name 'index' for the ..."
                    duration={3000}
                    buttons={[{
                        side: 'start',
                        text: '11',
                        cssClass: 'chipEmbed'
                    }, {
                        side: 'end',
                        icon: closeCircle
                    }]}
                />
            </IonContent>
        </IonPage>
    );
};

export default Account;
