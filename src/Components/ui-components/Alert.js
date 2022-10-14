function Alert() {
  return (
    <div className="card-body">
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fas fa-ban" /> Alert!
        </h5>
        Danger alert preview. This alert is dismissable. A wonderful serenity
        has taken possession of my entire soul, like these sweet mornings of
        spring which I enjoy with my whole heart.
      </div>
      <div className="alert alert-info alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fas fa-info" /> Alert!
        </h5>
        Info alert preview. This alert is dismissable.
      </div>
      <div className="alert alert-warning alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fas fa-exclamation-triangle" /> Alert!
        </h5>
        Warning alert preview. This alert is dismissable.
      </div>
      <div className="alert alert-success alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>
          <i className="icon fas fa-check" /> Alert!
        </h5>
        Success alert preview. This alert is dismissable.
      </div>
    </div>
  );
}

export default Alert;
