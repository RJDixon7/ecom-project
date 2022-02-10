import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: '64831',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: '23456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Riley Dixon',
                    shippingAddress: '9876 West State Street'
                }
            },
            {
                _id: 2,
                total: 9.20,
                orderNumber: '12345',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Trista Dixon',
                    shippingAddress: '1332 West State Street'
                }
            },
            {
                _id: 3,
                total: 3.90,
                orderNumber: '34567',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Hunter Dixon',
                    shippingAddress: '2929 West State Street'
                }
            },
            {
                _id: 4,
                total: 9.89,
                orderNumber: '56789',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Curtis Dixon',
                    shippingAddress: '8585 West State Street'
                }
            },
            {
                _id: 5,
                total: 12.20,
                orderNumber: '13579',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'John Doe',
                    shippingAddress: '6565 West State Street'
                }
            },
            {
                _id: 6,
                total: 45.50,
                orderNumber: '24680',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chris Turk',
                    shippingAddress: '9090 West State Street'
                }
            },
            {
                _id: 7,
                total: 98.54,
                orderNumber: '97531',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Perry Cox',
                    shippingAddress: '3131 West State Street'
                }
            }
        ]
    })
}