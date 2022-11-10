// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div>
        <div>{props.item.name}</div>
        <div>{props.item.price}</div>
        <img src={props.item.image}></img>

        <button onClick={() => props.updateCart(props.index)}>Add to Cart</button>
        </div>
    )
}