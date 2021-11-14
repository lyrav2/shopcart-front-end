import React from "react";
import RegistrationForm from "../components/RegistrationForm";

class RegisterModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="registration-modal">
        <button class="toggle-button" onClick={this.onClose}>
          X
        </button>
        <RegistrationForm />
      </div>
    );
  }
}

export default RegisterModal;
