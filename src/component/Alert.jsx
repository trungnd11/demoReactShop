import Swal from "sweetalert2";

const Alert = (status, title) => {
  return Swal.fire({
    position: "center",
    icon: status,
    text: title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export default Alert;
