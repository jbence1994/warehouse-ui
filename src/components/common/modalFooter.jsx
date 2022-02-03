import React from "react";

const ModalFooter = () => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-primary">
        Hozzáadás folytatása
      </button>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Vissza a raktárkészlethez
      </button>
    </div>
  );
};

export default ModalFooter;
