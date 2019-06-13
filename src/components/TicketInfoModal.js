import React, { Component } from "react";
import Modal from "react-bootstrap-modal";
import Button from 'react-bootstrap/Button';


class TicketInfoModal extends Component {
  showDetail = (label, detail, width, isImportant) => {
    var className = "col-sm-" + width + " detail-col text-capitalize";
    if (isImportant) className += " text-success  font-weight-bold";
    return (
      <div className={className}>
        <h4>{label} {detail}</h4>

      </div>
    );
  };

  render() {

    let modal;
    let error;



    return (
        <React.Fragment>
    <Modal
      {...this.props}
      animation="true"
      aria-labelledby="contained-modal-title-vcenter"
      centered="true"
      className="modalPopup" 
    >
    
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title className="modal-title">{this.props.ticket.subject}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container ">
          <div className=" detailContainer text-center ">
            {/* <h2 className="font-weight-bold text-capitalize">

            </h2> */}
            <p>
                {this.props.ticket.description}
            </p>
            <div className="more-details-container text-left ">
              <div className="row detail-row">
              {this.showDetail("created_at: ", this.props.ticket.created_at ,  2 )}
              {this.showDetail("updated_at: ", this.props.ticket.updated_at ,  2 )}
              </div>
              <div className="row detail-row ">
              {this.showDetail("ticket id: ", this.props.ticket.id ,  2 )}
              {this.showDetail("updated_at: ", this.props.ticket.updated_at ,  2 )}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
            <Button variant="primary">Primary</Button>
    </Modal>
  </React.Fragment>

    );
  }
}

export default TicketInfoModal;
