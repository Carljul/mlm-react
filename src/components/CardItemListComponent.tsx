import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/react";
import { useEffect, useState } from "react";
import CardItemComponent from "./CardItemComponent";


const CardItemListComponent: React.FC = () => {
    const [items, setItems] = useState<number[]>([]);
    
    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(i);
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
            <CardItemComponent id={index} key={index} name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
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