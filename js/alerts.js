function displayAlert() {
  Swal.fire({
    title: "Hey there!!!",
    icon: "success",
  });
}

const submitAlert = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function submitForm() {
  submitAlert.fire({
    icon: "success",
    title: "Signed in successfully",
  });
}
