import React, { Component } from "react";
import Modal from "react-bootstrap-modal";

class TicketInfoModal extends Component {
  render() {
    return (
        <React.Fragment>
        <Modal
        {...this.props}
        animation="true"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
        className="modalPopup">   
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title className="modal-title">subject: {this.props.ticket.subject} </Modal.Title>
            </Modal.Header>
            <h3>Status: {this.props.ticket.status} </h3>
            <Modal.Body>
                <div className="container ">
                <div className=" detailContainer text-center ">
                    <p> description: {this.props.ticket.description} </p>
                    <div className="more-details-container text-left ">
                    <div className="row detail-row">
                    <p> submitter: {this.props.ticket.submitter_id} </p>
                    <p> requester: {this.props.ticket.requester_id} </p>
                    <p> group: {this.props.ticket.group_id} </p>
                    <p> created_at: {this.props.ticket.created_at} </p>
                    <p> updated_at: {this.props.ticket.updated_at} </p>
                    </div>
                    </div>
                </div>
                </div>
            </Modal.Body>
            </Modal>
        </React.Fragment>
    );
  }
}

export default TicketInfoModal;
