import { IonContent, IonList, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import WishlistItem from "../../components/Wishlist/WishlistItem";
import wishes from "../../models/Wishlist";

const Wishlist: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen color="light">
                <IonList>
                    {
                        wishes.map((item, value) => (
                            <WishlistItem
                                key={value}
                                store_id={item.store_id}
                                store_name={item.store_name}
                                product_id={item.product_id}
                                product={item.product}
                            />
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Wishlist;