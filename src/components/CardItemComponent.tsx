import { useIonRouter } from "@ionic/react";

interface CardItemProps {
    id: number,
    img?: string,
    name?: string,
    price?: string
}

const CardItemComponent: React.FC<CardItemProps> = (props: CardItemProps) => {
    const routeToDetails = useIonRouter();
    const seeDetails = (id: number) => {
        routeToDetails.push('/app/product/details/'+id);
    }
    
    return (
        <div className="card itemCard" onClick={() => seeDetails(props.id)}>
            <div className="card-content">
                <div className='itemImage'>
                    <img alt={props.name} src={props.img}/>
                </div>
                <div className="item-details">
                    <p className='itemName'>{props.name}</p>
                    <p className="float-right itemPrice">{props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CardItemComponent;
