import pos from './pos.module.css';
import Container from '@mui/material/Container';
import NavBar from '../../shared-components/nav-bar/navbar'
import Footer from '../../shared-components/footer/footer'
import Grid from '@mui/material/Grid';
import MyTable from '../../shared-components/my-table/my-table';
import { useState } from 'react';
import { editProductListQty } from '../../services/setters';

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
    const [cartList, setCartList] = useState([{
        product: '',
        price: 0,
        totalPrice: 0,
        quantity: 0
    }]);

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
        let newQty = parseInt(number);
        setCartList(prev => {
            const newCartList = [...prev];
            newCartList[index] = {
                ...newCartList[index],
                totalPrice: newQty > 0 ? prev[index].price * newQty : prev[index].price,
                quantity: newQty > 0  ? newQty : prev[index].quantity,
            };
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
                            <Totals />
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </div>
        </>
    )
}

function Totals() {
    return (
        <div className={`${pos.totalsContainer}`}>
            <h3>Overall Price: </h3>
            <h3>Payment: </h3>
            <input type="number" />
            <h3>Change: </h3>
            <button>Print Receipt</button>
        </div>
    )
}