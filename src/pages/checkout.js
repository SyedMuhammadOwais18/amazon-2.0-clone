import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/ChekoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from 'react-currency-formatter';

const Checkout = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const {data:session , status} = useSession();
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length === 0 ? 'Your Amazon Basket is Empty' : 'Shopping Basket'}</h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                hasPrime={item.hasPrime}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items?.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items?.length}) items :{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} currency="GBP"/>
                                </span>
                            </h2>

                            <button className="button mt-2">
                                {/* {!session} */}
                                Proceed To Checkout
                            </button>
                        </>
                    )}

                </div>
            </main>
        </div>
    );
}

export default Checkout;