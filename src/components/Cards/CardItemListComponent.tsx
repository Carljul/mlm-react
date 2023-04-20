import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/react";
import { useEffect, useState } from "react";
import CardItemComponent from "./CardItemComponent";
import products from '../../models/Products';


const CardItemListComponent: React.FC = () => {
    const [items, setItems] = useState(products);
    
    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomItem = products[randomIndex];
        newItems.push(randomItem);
      }

      setItems([...items, ...newItems]);
    }

    useEffect(() => {
      generateItems();
    }, [])
    
    return (
      <>
        <div className='d-grid template-3-columns'>
          {items.map((item, index) => (
            <CardItemComponent
              id={item.id}
              key={index}
              name={item.details.name}
              price={`$${item.details.price}`}
              img={item.details.imageUrl}
            />
          ))}
        </div>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 500)
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </>
    );
}

export default CardItemListComponent;