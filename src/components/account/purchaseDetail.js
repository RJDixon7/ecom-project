import React, { Component } from "react";
import { connect } from 'react-redux';

function PurchaseDetailLabel({className,title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <label className="purchase-detail-label-title">{title}</label>
            <div className="purchase-detail-label-value">{value}</div>
        </div>
    )
}


class PurchaseDetail extends Component {
    render() {
        const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
        const { name, shippingAddress } = user;

        return (
            <div className={`${className} purchase-detail`}>
                <PurchaseDetailLabel 
                    className='purchase-detail-order-number' 
                    title='Order Number'
                    value={orderNumber}
                />
                <PurchaseDetailLabel 
                    className='purchase-detail-order-date' 
                    title='Order Date'
                    value={orderDate}
                />
                <PurchaseDetailLabel 
                    className='purchase-detail-shipping-address' 
                    title='Shipping Address'
                    value={`${name}\n${shippingAddress}`}
                />
                <PurchaseDetailLabel 
                    className='purchase-detail-total' 
                    title='Total'
                    value={total}
                />
                <PurchaseDetailLabel 
                    className='purchase-detail-credit-card' 
                    title='Credit Card'
                    value={creditCard}
                />
                <a className="purchase-detail-track-shipment">Track Shipment</a>
                <a className="purchase-detail-print-receipt">Print Receipt</a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;