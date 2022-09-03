import { useState } from "react";

const ItemCounter = () =>{
    const stock = 10
    const {items, setItems} = useState(0);

    const sumar = ()=> setItems(items + 1)
    const restar = () => setItems(items - 1)
    return (
        <section>
        <div>{items}items</div>
        <button onclick = {sumar}>sumar</button>
        <button onclick = {restar}>resta</button>
        </section>
    );
};

export default ItemCounter;