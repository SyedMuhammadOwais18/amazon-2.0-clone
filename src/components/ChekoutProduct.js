import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
const CheckoutProduct = ({ id, title, price, description, category, image, rating, hasPrime }) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        let product = {
            id, title, price, description, category, image, rating
        }
        dispatch(addToBasket(product));

    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}

            <div className="col-span-3 mx-3">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (

                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs line-clamp-3 my-2">
                    {description}
                </p>
                <Currency quantity={price} currency="GBP" />

            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>
                    Add To Basket
                </button>
                <button className="button" onClick={removeItemFromBasket}>
                    Remove From Basket
                </button>
            </div>

        </div>
    );
}

export default CheckoutProduct;