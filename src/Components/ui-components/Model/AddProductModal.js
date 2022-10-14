import Modal from "react-modal";
Modal.setAppElement("#root");
function AddProductModal({ isOpen, toggleModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
    >
      {/* <div className="modal fade" id="modal-default"> */}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Default Modal</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>One fine body…</p>
          </div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Modal>
  );
}

export default AddProductModal;
