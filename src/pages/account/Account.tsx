import { isPlatform, IonAvatar, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonButton, IonRouterLink, useIonRouter } from '@ionic/react';

// CSS
import '../../css/Accounts.modules.css';

// Icons
import {
    chevronForward,
    chevronForwardOutline
} from 'ionicons/icons'; 
import { FiEdit3 } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';
import { FcGenealogy } from 'react-icons/fc';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { useEffect } from 'react';
import Header from '../../components/HeaderComponent';
import { useStateContext } from '../../provider/ContextProvider';
import { postService } from '../../services/httpServices';
import {authChecker, ServiceCallBack} from '../../services/authServices';

const Account: React.FC = () => {
    // Platform
    const isIos = isPlatform('ios');

    // Context
    const {user, setUser, setToken} = useStateContext();

    // States
    // const [isOpenToast, setIsOpenToast] = useState(true);
    
    // Routes
    const pageNavigation = useIonRouter();

    useEffect(() => {
        authChecker(ServiceCallBack.ACCOUNT).then(data => {
            if (!data) {
                setToken(null);
                setUser(null);
                return;
            }
            if (data && typeof data !== 'boolean') {
                setUser(data.data);
            }
        });
    }, [])

    const navigateToPage = (route: string) => {
        pageNavigation.push(route, 'root', 'replace');
    }

    const logout = () => {
        if (process.env.REACT_APP_ENV == 'static') {
            setUser(null);
            setToken(null);
            localStorage.removeItem('ACCESS_TOKEN');
        } else {
            postService('/logout', {}).then(() => {
                setUser(null);
                setToken(null);
                localStorage.removeItem('ACCESS_TOKEN');
            })
        }
    }
    
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <IonGrid>
                    {user ? 
                        <IonRow>
                            <IonCol size="4">
                                <IonAvatar>
                                    <img alt="Silhouette of a person's head" src={user ? user.avatar??'' : 'https://ionicframework.com/docs/img/demos/avatar.svg'} className='profile'/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <h1>{user.person?.fullname ?? ''}&nbsp;</h1>
                                <p>{user.email}</p>
                            </IonCol>
                        </IonRow>
                        :
                        <>
                            <IonRow>
                                <IonCol>
                                    <IonButton expand="block" shape='round' className='epa-button' onClick={() => {navigateToPage('/login')}}>
                                        Login
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonButton routerLink='/signup' expand="block" shape='round' className='epa-button-reverse'>
                                        Sign Up
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </>
                    }
                    <IonRow>
                        <IonCol>
                            <IonList className="actions-menu">
                                <IonItem button key="profile" onClick={() => {navigateToPage('/app/profile')}}>
                                    <div slot="start" className='profileIcons'>
                                        <FiEdit3 />
                                    </div>
                                    <IonLabel>Edit Profile</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="shipping" onClick={() => {navigateToPage('/app/shipping')}}>
                                    <div slot="start" className='profileIcons'>
                                        <GrLocation />
                                    </div>
                                    <IonLabel>Shipping Address</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="wishlist" onClick={() => {navigateToPage('/app/wishlist')}}>
                                    <div slot="start" className="profileIcons">
                                        <AiOutlineHeart />
                                    </div>
                                    <IonLabel>Wishlist</IonLabel>
                                    <IonCard className='tagCard'>
                                        <IonCardContent>New</IonCardContent>
                                    </IonCard>
                                    {isIos ? <></> : <IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="history" onClick={() => {navigateToPage('/app/orders')}}>
                                    <div slot="start" className="profileIcons">
                                        <BiTimeFive />
                                    </div>
                                    <IonLabel>Order History</IonLabel>
                                    {isIos ? <></> : <IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="order" onClick={() => {navigateToPage('/app/track/orders')}}>
                                    <div slot="start" className="profileIcons">
                                        <BsBoxSeam className="tracakOrderMenuIcon"/>
                                    </div>
                                    <IonLabel>Track Order</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="cards" onClick={() => {navigateToPage('/app/cards')}}>
                                    <div slot="start" className="profileIcons">
                                        <FiCreditCard />
                                    </div>
                                    <IonLabel>Cards</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="wallets" onClick={() => {navigateToPage('/app/wallet')}}>
                                    <div slot="start" className="profileIcons">
                                        <IoWalletOutline />
                                    </div>
                                    <IonLabel>Wallets</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="genealogy" onClick={() => {navigateToPage('/app/genealogy')}}>
                                    <div slot="start" className="profileIcons">
                                        <FcGenealogy />
                                    </div>
                                    <IonLabel>Genealogy</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>
                                <IonItem button key="notifications" onClick={() => {navigateToPage('/app/notifications')}}>
                                    <div slot="start" className="profileIcons">
                                        <IoIosNotificationsOutline />
                                    </div>
                                    <IonLabel>Notifications</IonLabel>
                                    {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                </IonItem>

                                {
                                    user ?
                                    <IonItem button key="logout" onClick={logout}>
                                        <div slot="start" className="profileIcons">
                                            <RiLogoutBoxRLine />
                                        </div>
                                        <IonLabel>Logout</IonLabel>
                                        {isIos ? <></> :<IonIcon icon={chevronForward} slot="end"></IonIcon>}
                                    </IonItem>
                                    :
                                    <></>
                                }
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* Toast */}
                {/* <IonToast
                    isOpen={isOpenToast}
                    message="Got a component with the name 'index' for the ..."
                    buttons={[{
                        side: 'start',
                        text: '11',
                        cssClass: 'chipEmbed'
                    }, {
                        side: 'end',
                        icon: closeCircle,
                        handler: () => {setIsOpenToast(false)}
                    }]}
                /> */}
            </IonContent>
        </IonPage>
    );
};

export default Account;
