import { IonContent, IonPage } from "@ionic/react";
import Header from "../../../components/HeaderComponent";
import OrdersTrackCard from "../../../components/Orders/Track/OrdersTrackCard";

const Track: React.FC = () => {
    const orders = [{
        id: 1,
        courier: 'J&T',
        status: 'In Manila Service Center',
        date_to_get: 'Get By Wed 8 Jun-Mon 13 Jun',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Sun umbrella sunscreen nga taas para check lang gud kung unsay mahitabo',
        variations: {
            color: 'green',
            size: 'xl'
        },
        quantity: 1,
        product_id: 1,
        product_price: 288.00,
        delivery_price: 87.00,
        total_price: 375.00,
        delivery_address: 'Poblacion Ward I Minglanilla Cebu',
        item_current_address: 'Manila Service Center'
    },{
        id: 2,
        courier: 'Ninja Van',
        status: 'In Davao Service Center',
        date_to_get: 'Get By Wed 8 Jun-Mon 13 Jun',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Sun umbrella sunscreen',
        variations: {
          color: 'green',
          size: 'xl'
        },
        quantity: 1,
        product_id: 2,
        product_price: 288.00,
        delivery_price: 87.00,
        total_price: 375.00,
        delivery_address: 'Poblacion Ward I Minglanilla Cebu',
        item_current_address: 'Davao Service Center'
      },
      {
        id: 3,
        courier: 'Ninja Van',
        status: 'In Transit',
        date_to_get: 'Get By Tue 12 Sep-Sun 17 Sep',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Portable Travel Coffee Mug',
        variations: {
          color: 'blue',
          size: 'medium'
        },
        quantity: 2,
        product_id: 3,
        product_price: 229.50,
        delivery_price: 68.85,
        total_price: 527.85,
        delivery_address: 'Ayala Alabang Village, Muntinlupa City',
        item_current_address: 'Cebu Service Center'
      },
      {
        id: 4,
        courier: 'Ninja Van',
        status: 'Out for Delivery',
        date_to_get: 'Get By Wed 19 Oct-Mon 24 Oct',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Wireless Noise Cancelling Earbuds',
        variations: {
          color: 'black',
          size: 'large'
        },
        quantity: 1,
        product_id: 4,
        product_price: 1899.00,
        delivery_price: 100.00,
        total_price: 1999.00,
        delivery_address: 'Rockwell Center, Makati City',
        item_current_address: 'Manila Service Center'
      },
      {
        id: 5,
        courier: 'Ninja Van',
        status: 'Delivered',
        date_to_get: 'Get By Tue 28 Nov-Sun 3 Dec',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Leather Crossbody Bag',
        variations: {
          color: 'brown',
          size: 'small'
        },
        quantity: 1,
        product_id: 5,
        product_price: 1190.00,
        delivery_price: 90.00,
        total_price: 1280.00,
        delivery_address: 'Guadalupe, Cebu City',
        item_current_address: 'Cebu Service Center'
      },
      {
        id: 6,
        courier: 'Ninja Van',
        status: 'In Transit',
        date_to_get: 'Get By Sat 1 Jan-Thu 6 Jan',
        img: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
        name: 'Electric Hair Clipper',
        variations: {
          color: 'silver',
          size: 'large'
        },
        quantity: 1,
        product_id: 6,
        product_price: 1890.00,
        delivery_price: 109.00,
        total_price: 1999.00,
        delivery_address: 'Lahug, Cebu City',
        item_current_address: 'Cebu Service Center'
      }];
    return (
        <IonPage>
            <Header />
            <IonContent color="light">
                {
                    orders.map((item, value) => (
                        <OrdersTrackCard 
                            key={value}
                            id = {item.id}
                            courier = {item.courier}
                            status = {item.status}
                            date_to_get = {item.date_to_get}
                            img = {item.img}
                            name = {item.name}
                            variations = {item.variations}
                            quantity = {item.quantity}
                            product_id = {item.product_id}
                            product_price = {item.product_price}
                            delivery_price = {item.delivery_price}
                            total_price = {item.total_price}
                            delivery_address = {item.delivery_address}
                            item_current_address = {item.item_current_address}
                        />
                    ))
                }
            </IonContent>
        </IonPage>
    );
}

export default Track;