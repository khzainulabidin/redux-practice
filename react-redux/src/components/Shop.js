import {useState} from "react";
import {buyCake, buyIceCream} from '../redux/actions/index';
import {connect} from "react-redux";

const Shop = props => {
    const [items, setItems] = useState(1);

    const handleOrder = e => {
        e.preventDefault();
        if (props.noOfItems >= items && items > 0){
            props.buyItem(items);
            setItems(1);
        }
    }

    return(
        <div>
            <h1>Number of {props.cake ? 'cake' : 'ice creams'}: {props.noOfItems}</h1>
            <form onSubmit={handleOrder}>
                <input
                    type={'number'}
                    value={items}
                    onChange={e => setItems(Number(e.target.value))}
                />
                <input
                    type={'submit'}
                    value={`Buy ${items} ${props.cake ? 'cakes' : 'ice creams'}`}
                />
            </form>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        noOfItems: ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCreams,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem: ownProps.cake ? cakes => dispatch(buyCake(cakes)) : iceCreams => dispatch(buyIceCream(iceCreams))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
