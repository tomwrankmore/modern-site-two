class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // document.querySelectorAll(".open-modal").forEach((el,i,p) =>
      
    //   el.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     console.log("First returned forEach parameter is " + el + ".")
    //     console.log("Second returned foreach parameter is " + i + ".")
    //     console.log("Third returned for each parameter is " + p + ".")
    //     console.log("Returned parameter of event listener is " + e + ".")
    //   })
    // )

    //listen for closing click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    //pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))

    //modal is clicked
    this.modal.addEventListener("click", () => this.closeTheModal())
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `  <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="http://facebook.com" class="social-icons__icon" target="_blank"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="http://twitter.com" class="social-icons__icon" target="_blank"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="http://instagram.com" class="social-icons__icon" target="_blank"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon" target="_blank"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>`)
  }
}

export default Modal