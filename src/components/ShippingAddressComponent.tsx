import { IonItem, IonRadio } from "@ionic/react";

interface ShippingAddressProps {
    id: number,
    name: string,
    address: string,
    value: number | string
}

const ShippingAddress: React.FC<ShippingAddressProps> = (props: ShippingAddressProps) => {
    return (
        <IonItem key={props.id}>
            <div className='w-100'>
                <h4 className='bold'>{props.name}</h4>
                <div className="d-flex w-100 space-between">
                    <p className='shippingAddress'>{props.address}</p>
                    <IonRadio className='shippingRadio' value={props.value}></IonRadio>
                </div>
            </div>
        </IonItem>
    );
}

export default ShippingAddress;