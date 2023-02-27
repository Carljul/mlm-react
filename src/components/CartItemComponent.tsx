import { IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import { add, remove } from "ionicons/icons";
import { useState } from "react";


const CartItemComponent: React.FC = () => {
    const [countItem, setCountItem] = useState(1);

    const addCount = () => {
        let currentCount = countItem;
        currentCount = currentCount + 1;
        setCountItem(currentCount);
    }

    const deductCount = () => {
        let currentCount = countItem;
        currentCount = currentCount - 1;
        if (currentCount > 0) {
            setCountItem(currentCount);
        }
    }

    const checkCountValue = (event: React.KeyboardEvent<HTMLIonInputElement>) => {
        let value = event.currentTarget.value;
        if (value === '' || value === null) {
            setCountItem(1);
        }
    }

    return (
        <IonItem key={1} className='cartItems'>
            <IonRow>
                <IonCol size='4'>
                    <img src="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" alt="" />
                </IonCol>
                <IonCol>
                    <IonLabel className='bold'>Mens Casual Premium</IonLabel>
                    <IonLabel color='success'>$22.30</IonLabel>
                    <div className="countItemMultiplier">
                        <IonIcon icon={remove} onClick={deductCount}></IonIcon>
                        <IonInput type="number" value={countItem} min={1} onKeyUp={checkCountValue}></IonInput>
                        <IonIcon icon={add} onClick={addCount}></IonIcon>
                    </div>
                </IonCol>
            </IonRow>
        </IonItem>
    );
}

export default CartItemComponent;