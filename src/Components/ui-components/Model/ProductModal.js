function ProductModal({ setIsSave, createProduct, data, initError }) {
  return (
    <div className="modal fade" id="modal-default">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Product</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {!initError.product_name &&
              !initError.product_price &&
              !initError.product_image && (
                <p>
                  are you sure you want to create {data?.product_name} product?
                </p>
              )}
            {initError.product_name && (
              <>
                <label className="col-form-label">
                  <i className="far fa-times-circle"></i> Please enter product
                  name
                </label>
                <br />
              </>
            )}
            {initError.product_price && (
              <>
                <label className="col-form-label">
                  <i className="far fa-times-circle"></i> Please enter product
                  price
                </label>
                <br />
              </>
            )}
            {initError.product_image && (
              <>
                <label className="col-form-label">
                  <i className="far fa-times-circle"></i> Please select product
                  image
                </label>
                <br />
              </>
            )}
          </div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            {initError.product_image ||
            initError.product_price ||
            initError.product_name ? (
              <p></p>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  setIsSave(true);
                  createProduct();
                }}
              >
                Save changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductModal;
