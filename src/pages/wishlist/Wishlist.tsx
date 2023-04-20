import { IonContent, IonList, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import WishlistItem from "../../components/Wishlist/WishlistItem";
import products from "../../models/Products";

const Wishlist: React.FC = () => {
    let wishes = products.filter(element => element.isFavorite);
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
                                store_name={item.store.name}
                                product_id={item.details.id}
                                product={item.details}
                            />
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Wishlist;