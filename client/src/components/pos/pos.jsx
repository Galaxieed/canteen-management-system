import pos from './pos.module.css';
import Container from '@mui/material/Container';
import NavBar from '../../shared-components/nav-bar/navbar'
import Footer from '../../shared-components/footer/footer'
import Grid from '@mui/material/Grid';
import MyTable from '../../shared-components/my-table/my-table';
import { useEffect, useState } from 'react';
import { editProductListQty } from '../../services/setters';
import PropTypes from "prop-types";

const sampleData = [
    {
        product: 'Egg',
        price: '7',
        quantity: '200',
    },{
        product: 'Hotdog',
        price: '10',
        quantity: '200',
    },{
        product: 'Noodles',
        price: '20',
        quantity: '200',
    }
]

export default function POS() {
    const [productsList, setProductsList] = useState(sampleData);
    const [overallPrice, setOverallPrice] = useState(0);
    const [payment, setPayment] = useState(0);
    const [cartList, setCartList] = useState([{
        product: '',
        price: 0,
        totalPrice: 0,
        quantity: 0
    }]);

    useEffect(() => {
        let overall = 0;
        for (let cart of cartList) {
            overall += parseInt(cart.totalPrice);
        }
        setOverallPrice(overall);
    }, [cartList])

    function handlePaymentChange(value) {
        setPayment(value < 0 ? 0 : value);
    }

    function addToCart(newValue, index) {
        editProductListQty(setProductsList, productsList[index].quantity - 1, index);

        if(cartList[0].product == '') {
            setCartList([]);
        }

        var alreadyExists = false;
        for(let cart of cartList) {
            if (cart.product == newValue.product) {
                alreadyExists = true;
                break;
            }
        }

        if (alreadyExists) {
            // Existing
            setCartList(prev => {
                const newCartList = [...prev];
                const indexOf = newCartList.findIndex(cart => cart.product == newValue.product)

                newCartList[indexOf] = {
                    ...newCartList[indexOf],
                    totalPrice: prev[indexOf].price * (prev[indexOf].quantity + 1),
                    quantity: prev[indexOf].quantity + 1,
                };
                return newCartList;
            })
        } else {
            // New
            setCartList(prev => [
                ...prev, {
                    ...newValue,
                    product: newValue.product,
                    price: newValue.price,
                    totalPrice: newValue.price,
                    quantity: 1,
                }
            ]);
        }
    }

    function addProductQty(number, index) {
        const indexOf = productsList.findIndex(prod => prod.product == cartList[index].product)
        let newQty = parseInt(number);
        let prodQty = parseInt(productsList[indexOf].quantity);
        console.log('newQty: ' + newQty + "\nprodQty: " + prodQty);
        if (newQty <= 0 || isNaN(newQty)) return;
        setCartList(prev => {
            const newCartList = [...prev];
            const oldQty = prev[index].quantity;
            const quantityDiff = newQty - oldQty;
            const finalQty = prodQty - quantityDiff;
            
            newCartList[index] = {
                ...newCartList[index],
                totalPrice: newQty > 0 && finalQty >= 0 ? prev[index].price * newQty : prev[index].totalPrice,
                quantity: newQty > 0 && finalQty >= 0  ? newQty : prev[index].quantity,
            };
        
            // Update the product list quantity
            editProductListQty(setProductsList, newQty > 0 && finalQty >= 0 ? finalQty : prodQty, indexOf);
        
            return newCartList;
        });    
    }

    return (
        <>
            <div className={`${pos.posBody}`}>
                <NavBar data={'pos'}/>
                <Container>
                    <Grid container spacing={2} my={5}>
                        <Grid item xs={12}>
                            <div>
                                <h2>Products</h2>
                                <MyTable
                                    columns={['Product', 'Price', 'Quantity']}
                                    data={productsList}
                                    editable={false}
                                    callback={addToCart}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div>
                                <h2>Current List</h2>
                                <MyTable
                                    columns={['Product', 'Price', 'Total Price', 'Quantity']}
                                    data={cartList}
                                    editable={true}
                                    changeQty={addProductQty}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column'}}>
                            <h2>Totals</h2>
                            <Totals overallPrice={overallPrice} 
                            payment={payment} 
                            addPayment={handlePaymentChange}/>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </div>
        </>
    )
}

function Totals(props) {
    let change = parseInt(props.payment) - parseInt(props.overallPrice);
    return (
        <div className={`${pos.totalsContainer}`}>
            <h3>Overall Price: {props.overallPrice}</h3>
            <h3>Payment: </h3>
            <input 
            type="number"
            readOnly={parseInt(props.overallPrice) == 0}
            value={parseInt(props.overallPrice) != 0 ? props.payment : 0}
            onChange={parseInt(props.overallPrice) > 0 ? e => props.addPayment(e.target.value) : undefined}/>
            <h3>Change: {change < 0 ? `Not Enough` : change}</h3>
            <button disabled={change < 0}>Print Receipt</button>
        </div>
    )
}

Totals.propTypes = {
    overallPrice: PropTypes.any,
    payment: PropTypes.any,
    addPayment: PropTypes.func,
}