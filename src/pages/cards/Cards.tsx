import { IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRow, IonSlide, IonSlides } from "@ionic/react";
import { Link } from "react-router-dom";
import Header from "../../components/HeaderComponent";
import { AiOutlinePlus } from 'react-icons/ai';
import CreditCards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

const Cards: React.FC = () => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    }

    const Cards = [
        {
            id: 1,
            number: '4242 4242 4242 4242',
            expiry: '10/25',
            cvc: '222',
            name: 'Julcarl L. Selma',
            default: true,
        },
        {
            id: 2,
            number: '5299 4242 4242 4242',
            expiry: '10/27',
            cvc: '222',
            name: 'Yasmin G. Tapado ',
            default: false,
        }
    ];
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
                    <IonSlides pager={true} options={slideOpts}>
                        <IonSlide>
                            <Link to="/app/card/add">
                                <div className="card-new">
                                    <h1><AiOutlinePlus /> Add New Card</h1>
                                </div>
                            </Link>
                        </IonSlide>
                        {
                            Cards.map((item, value) => (
                                <IonSlide>
                                    <CreditCards
                                        number={item.number}
                                        expiry={item.expiry}
                                        cvc={item.cvc}
                                        name={item.name}
                                    />
                                </IonSlide>
                            ))
                        }
                    </IonSlides>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Cards;