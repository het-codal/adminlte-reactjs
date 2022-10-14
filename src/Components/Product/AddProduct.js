import { useEffect, useState } from "react";
import ProductModal from "../ui-components/Model/ProductModal.js";
import swal from "sweetalert";
function AddProduct() {
  const [isSave, setIsSave] = useState(false);
  const [alert, setAlert] = useState(null);
  const [initError, setInitError] = useState({
    product_name: false,
    product_price: false,
    product_image: false,
  });
  const [errors, setErrors] = useState({
    product_name: "Please enter product name",
    product_price: "Please enter product price",
    product_image: "Please select product image",
  });
  const [data, setData] = useState({});
  const [onConfirm, setOnConfirm] = useState(false);
  const [onCancel, setOnCancel] = useState(false);
  // function onConfirm(a) {
  //   console.log(a);
  // }
  // function onCancel(b) {
  //   console.log(b);
  // }
  const successAlert = () => {
    swal("Success", "Product is created", "success");
  };

  function hideAlert() {
    setAlert(null);
  }
  function onSubmitHandler(event) {
    let isError = false;
    let beforeSubmitError = {
      product_name: false,
      product_price: false,
      product_image: false,
    };
    event.preventDefault();
    let submitbtn = document.getElementById("submitButton");
    if (event.target.product_name?.value.trim().length < 1) {
      beforeSubmitError.product_name = true;
      isError = true;
      submitbtn.removeAttribute("data-toggle", "modal");
      submitbtn.removeAttribute("data-target", "#modal-default");
    }
    if (event.target.product_price?.value.trim() === "") {
      beforeSubmitError.product_price = true;
      isError = true;
      submitbtn.removeAttribute("data-toggle", "modal");
      submitbtn.removeAttribute("data-target", "#modal-default");
    }
    if (event.target.product_image?.value.trim() === "") {
      beforeSubmitError.product_image = true;
      isError = true;
      submitbtn.removeAttribute("data-toggle", "modal");
      submitbtn.removeAttribute("data-target", "#modal-default");
    }
    setInitError(beforeSubmitError);
    if (!isError) {
      setData({
        product_name: event.target.product_name.value,
        product_price: event.target.product_price.value,
        product_image: event.target.product_image.value,
      });
      console.log(event.target.product_image.value);
      console.log(data);
      submitbtn.setAttribute("data-toggle", "modal");
      submitbtn.setAttribute("data-target", "#modal-default");
      submitbtn.click();
    } else {
      submitbtn.removeAttribute("data-toggle", "modal");
      submitbtn.removeAttribute("data-target", "#modal-default");
    }
  }
  function createProduct() {
    console.table(data);
    successAlert();
  }
  return (
    <div className="content-wrapper">
      <form onSubmit={onSubmitHandler}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="product_name">Product name</label>
            <input
              type="text"
              className={
                "form-control" + (initError.product_name ? " is-invalid" : "")
              }
              id="product_name"
              placeholder="Enter Product Name"
              name="product_name"
              onChange={(e) => {
                if (!e.target.value || e.target.value.trim().length < 1) {
                  setInitError({ ...initError, product_name: true });
                } else {
                  setInitError({ ...initError, product_name: false });
                  setData({ ...data, product_name: e.target.value });
                }
              }}
            />
            {initError.product_name && (
              <label className="col-form-label">
                <i className="far fa-times-circle"></i> Please Enter product
                Name
              </label>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Price</label>
            <input
              type="text"
              className={
                "form-control" + (initError.product_price ? " is-invalid" : "")
              }
              id="product_price"
              placeholder="Price"
              name="product_price"
              onChange={(e) => {
                if (!e.target.value || e.target.value.trim().length < 1) {
                  setInitError({ ...initError, product_price: true });
                } else {
                  setInitError({ ...initError, product_price: false });
                  setData({ ...data, product_price: e.target.value });
                }
              }}
            />
            {initError.product_price && (
              <label className="col-form-label">
                <i className="far fa-times-circle"></i> Please Enter product
                price
              </label>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="product_image">Product Image</label>
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className={
                    "custom-file-input" +
                    (initError.product_image ? " is-invalid" : "")
                  }
                  id="product_image"
                  name="product_image"
                  onChange={(e) => {
                    if (!e.target.value || e.target.value.trim().length < 1) {
                      setInitError({ ...initError, product_image: true });
                    } else {
                      setInitError({ ...initError, product_image: false });
                      setData({ ...data, product_image: e.target.value });
                    }
                  }}
                />
                <label className="custom-file-label" htmlFor="product_image">
                  Choose file
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>

            {initError.product_image && (
              <label className="col-form-label">
                <i className="far fa-times-circle"></i> Please Select Image
              </label>
            )}
          </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button type="submit" id="submitButton" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <ProductModal
        setIsSave={setIsSave}
        createProduct={createProduct}
        data={data}
        initError={initError}
      />
    </div>
  );
}

export default AddProduct;
