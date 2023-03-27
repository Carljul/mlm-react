import { useState } from 'react';
import CreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import { Link } from "react-router-dom";

// Icons
import { BiArrowBack } from 'react-icons/bi';

const AddCards: React.FC = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    
    const handleInputChange = (evt:any) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
    }
    
    const handleInputFocus = (evt:any) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }
    
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding addcard_container">
                <div className="d-flex card-container-flex">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <Link to="/app/cards" style={{color: 'black'}}><BiArrowBack /></Link>
                            </IonCol>
                            <IonCol>
                                <IonLabel className="float-right">Add new card</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <CreditCards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
                    <form className='card_inputs'>
                        <IonItem fill="outline">
                            <IonLabel position='floating'>Card Number</IonLabel>
                            <IonInput
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                value={state.number}
                                maxlength={16}
                                onKeyUp={handleInputChange}
                                onFocus={e => handleInputFocus}
                            />
                        </IonItem>
                        <IonItem fill="outline">
                            <IonLabel position='floating'>Card Holder</IonLabel>
                            <IonInput
                                type="text"
                                name="name"
                                placeholder="Card Holder"
                                value={state.name}
                                onKeyUp={handleInputChange}
                                onFocus={e => handleInputFocus}
                            />
                        </IonItem>
                        <IonItem fill="outline">
                            <IonLabel position='floating'>MM/YY Expiry</IonLabel>
                            <IonInput
                                type="tel"
                                name="expiry"
                                placeholder="MM/YY Expiry"
                                value={state.expiry}
                                maxlength={4}
                                onKeyUp={handleInputChange}
                                onFocus={e => handleInputFocus}
                            />
                        </IonItem>
                        <IonItem fill="outline">
                            <IonLabel position='floating'>CVC</IonLabel>
                            <IonInput
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                value={state.cvc}
                                maxlength={4}
                                onKeyUp={handleInputChange}
                                onFocus={e => handleInputFocus}
                            />
                        </IonItem>
                        <IonButton type='submit' expand='block'>Add new card</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default AddCards;