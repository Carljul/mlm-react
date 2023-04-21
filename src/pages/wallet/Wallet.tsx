import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow, IonThumbnail } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import { TbCurrencyPeso } from 'react-icons/tb';
import { FiCreditCard } from "react-icons/fi";
import { FcGenealogy } from "react-icons/fc";
import walletTransactions from "../../models/Wallet";

const Wallet: React.FC = () => {
    let wallet_and_transactions = walletTransactions;
    let transactions = wallet_and_transactions.wallet_transactions || [];
    return (
        <IonPage>
            <Header />
            <IonContent className="walletContainer">
                <IonCard color="primary" className="actualWallet">
                    <IonCardContent>
                        <IonRow>
                            <small>AVAILABLE BALANCE</small>
                        </IonRow>
                        <IonRow>
                            <IonCol className="center-align">
                                <h1><TbCurrencyPeso/> {wallet_and_transactions.balance}</h1>
                            </IonCol>
                            <IonCol>
                                <IonButton color="light" size="small" className="cashInButton">+ Cash In</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>

                <IonRow className="actionCards">
                    <IonCol>
                        <div key="cards" className="iconPackage">
                            <FiCreditCard className="icons"/>
                            <IonLabel>Cards</IonLabel>
                        </div>
                    </IonCol>
                    <IonCol>
                        <div key="genealogy" className="iconPackage">
                            <FcGenealogy className="icons"/>
                            <IonLabel>Genealogy</IonLabel>
                        </div>
                    </IonCol>
                </IonRow>

                <IonList className="walletTransactions" lines="full">
                    {
                        transactions.map((item, index) => (
                            <IonItem key={index} className="transactionItem">
                                <div className="transactionType" slot="start">
                                    <p>{item.transaction_type}</p>
                                </div>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol>
                                            <div className="d-flex center-align">
                                                <TbCurrencyPeso />
                                                <span>{item.amount}</span>
                                            </div>
                                        </IonCol>
                                        <IonCol>
                                            <span>{item.transaction_date.toDateString()}</span>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonItem>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Wallet;