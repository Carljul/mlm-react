import { IonCol, IonGrid, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonRow, IonThumbnail } from "@ionic/react";

import { Link } from "react-router-dom";
import { GrFormNext } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FiShoppingCart } from "react-icons/fi";
import { TbCurrencyPeso } from 'react-icons/tb';

interface WishlistItemProps {
    store_id: number,
    store_name: string,
    product_id: number,
    product_name: string,
    product_img: string,
    product_price: number
}

const WishlistItem: React.FC<WishlistItemProps> = (props: WishlistItemProps) => {
    return (
        <IonItemSliding>
            <IonItem>
                <IonThumbnail slot="start">
                    <img alt={props.product_name} src={props.product_img} />
                </IonThumbnail>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <Link to={`/app/store/`+props.store_id} className="storeLink">
                                <div className="d-flex center-align space-between">
                                    <p className="m-0">{props.store_name}</p>
                                    <GrFormNext className="float-right"/>
                                </div>
                            </Link>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p className="m-0 two-lines">{props.product_name}</p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="d-flex center-align">
                                <TbCurrencyPeso />
                                <span>{props.product_price.toFixed(2)}</span>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonItem>
            <IonItemOptions slot="end">
                <IonItemOption color="success"><FiShoppingCart /></IonItemOption>
                <IonItemOption color="danger"><AiTwotoneDelete /></IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
}

export default WishlistItem;