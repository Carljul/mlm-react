import { IonContent, IonList, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";
import WishlistItem from "../../components/Wishlist/WishlistItem";

const Wishlist: React.FC = () => {
    const wishlist = [
        {
            store_id: 1,
            store_name: 'Gave me any store name',
            product_id: 1,
            product_name: 'Fast Charging Charger Carger Casan Samsung Galaxy S8 S8+ Plis, A3 Unya taas ni nga item ha. ako ra gi testingan',
            product_img: 'https://picsum.photos/id/237/200/300', // updated with a free-to-use image link
            product_price: 30.00
        },
        {
            store_id: 2,
            store_name: 'Store B',
            product_id: 2,
            product_name: 'Blue T-Shirt',
            product_img: 'https://source.unsplash.com/random/200x300/?shirt', // updated with a free-to-use image link
            product_price: 20.00
        },
        {
            store_id: 3,
            store_name: 'Store C',
            product_id: 3,
            product_name: 'Leather Shoes',
            product_img: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png', // updated with a free-to-use image link
            product_price: 100.00
        },
        {
            store_id: 4,
            store_name: 'Store D',
            product_id: 4,
            product_name: 'Gaming Mouse',
            product_img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', // updated with a free-to-use image link
            product_price: 50.00
        },
        {
            store_id: 5,
            store_name: 'Store E',
            product_id: 5,
            product_name: 'Laptop Backpack',
            product_img: 'https://www.pexels.com/photo/scenic-view-of-mountain-range-during-sunset-917015/', // updated with a free-to-use image link
            product_price: 40.00
        },
        {
            store_id: 6,
            store_name: 'Store F',
            product_id: 6,
            product_name: 'Abstract Watercolor Print',
            product_img: 'https://www.rawpixel.com/image/56321/abstract-watercolor-background', // updated with a free-to-use image link
            product_price: 15.00
        },
        {
            store_id: 7,
            store_name: 'Store G',
            product_id: 7,
            product_name: 'White Wall Texture Background',
            product_img: 'https://www.freepik.com/free-photo/white-wall-texture-background_1368', // updated with a free-to-use image link
            product_price: 5.00
        },
        {
            store_id: 8,
            store_name: 'Store H',
            product_id: 8,
            product_name: 'Antelope Canyon Landscape Print',
            product_img: 'https://www.goodfreephotos.com/albums/other-landscapes/antelope-canyon-landscape.jpg', // updated with a free-to-use image link
            product_price: 25.00
        },
        {
            store_id: 9,
            store_name: 'Store I',
            product_id: 9,
            product_name: 'Vintage Blue Background Print',
            product_img: 'https://commons.wikimedia.org/wiki/File:Vintage_Blue_Background.jpg', // updated with a free-to-use image link
            product_price: 12.00
        },
        {
            store_id: 10,
            store_name: 'Store J',
            product_id: 10,
            product_name: 'Waterproof Bluetooth Speaker',
            product_img: 'https://www.publicdomainpictures.net/pictures/210000/velka/blue-bluetooth-speaker.jpg', // updated with a free-to-use image link
            product_price: 70.00
        }
    ];
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen color="light">
                <IonList>
                    {
                        wishlist.map((item, value) => (
                            <WishlistItem
                                key={value}
                                store_id={item.store_id}
                                store_name={item.store_name}
                                product_id={item.product_id}
                                product_name={item.product_name}
                                product_img={item.product_img}
                                product_price={item.product_price}
                            />
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Wishlist;