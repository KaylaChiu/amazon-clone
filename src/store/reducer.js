export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => amount + item.price, 0)
);

export const initialState = {
    basket: [{
        id: "552552522",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg",
        price: 11.96,
        rating: 5,
        title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
    }, {
        id: "123123126",
        image: "https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SX425_.jpg",
        price: 33,
        rating: 5,
        title: "Monopoly Classic Game"
    }],
    user: null // sample
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            const newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if(index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it's not exist`)
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}
export default reducer;