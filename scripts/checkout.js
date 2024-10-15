import { rendorOrderSummary } from "./checkout/orderSummary.js";
import { rendorPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage() {
    try {
        //throw 'error1';

        await loadProductFetch();

        const value = await new Promise((resolve, reject) => {
            //throw 'error2';
            loadCart(() => {
                //reject('error3');
                resolve('value3');
            });
        });

    }catch (error) {
        console.log('Unexpected error. Please try again later');
    }
    
    rendorOrderSummary();
    rendorPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadProductFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    rendorOrderSummary();
    rendorPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });
}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    rendorOrderSummary();
    rendorPaymentSummary();
});
*/


/*
loadProducts(() => {
    loadCart(() => {
        rendorOrderSummary();
        rendorPaymentSummary();
    });
});
*/

