import { useIonRouter } from "@ionic/react";

interface CardItemProps {
  img?: string,
  name?: string,
  price?: string
}

const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
    const routeToDetails = useIonRouter();
    const seeDetails = () => {
        routeToDetails.push('/app/details', 'forward', 'replace');
    }
    return (
        <div className="card itemCard" onClick={seeDetails}>
            <div className="card-content">
                <div className='itemImage'>
                    <img alt={props.name} src={props.img}/>
                </div>
                <p className='itemName'>{props.name}</p>
                <p className="float-right itemPrice">{props.price}</p>
            </div>
        </div>
    );
};

export default CardItem;
