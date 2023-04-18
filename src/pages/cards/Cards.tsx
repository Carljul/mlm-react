import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRow, IonTitle, IonToolbar, } from "@ionic/react";
import { Link } from "react-router-dom";
import Header from "../../components/HeaderComponent";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import CreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import React, { useState } from 'react';
import cards from '../../models/Cards';

const Cards: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <div className="card-list-flex">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel className="title">Cards</IonLabel>
                            </IonCol>
                            <IonCol>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {
                        cards.map((item, value) => (
                            <div className="carditems d-flex p-relative mb-3" key={value} onClick={() => setShowModal(true)}>
                                <CreditCards
                                    number={item.number}
                                    expiry={item.expiry}
                                    cvc={item.cvc}
                                    name={item.name}
                                />
                                {
                                    item.default ?
                                    <div className="defaultCard">
                                        <h1><BsCheck2Circle color="green" /></h1>
                                    </div> : null
                                }
                            </div>
                        ))
                    }
                    
                    <Link to="/app/card/add">
                        <div className="card-new">
                            <h1><AiOutlinePlus /> Add New Card</h1>
                        </div>
                    </Link>
                </div>
                <IonModal isOpen={showModal}>
                    <p>This is the modal content.</p>
                    <IonButton onClick={() => setShowModal(false)}>
                        Close Modal
                    </IonButton>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default Cards;