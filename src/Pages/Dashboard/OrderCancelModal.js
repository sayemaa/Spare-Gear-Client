import React from 'react';

const OrderCancelModal = ({ orderId, handleCancel }) => {
    return (
        <div>
            <input type="checkbox" id="order-cancel-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div className="modal-action flex justify-center">
                        <label onClick={() => handleCancel(orderId)} htmlFor="order-cancel-modal" className="btn btn-primary btn-sm">Yes</label>
                        <label htmlFor="order-cancel-modal" className="btn btn-sm btn-neutral">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelModal;