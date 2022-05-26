import React from 'react';

const ManageProductsDeleteModal = ({ productId, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="manage-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div className="modal-action flex justify-center">
                        <label onClick={() => handleDelete(productId)} htmlFor="manage-modal" className="btn btn-primary btn-sm">Yes</label>
                        <label htmlFor="manage-modal" className="btn btn-sm btn-neutral">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductsDeleteModal;