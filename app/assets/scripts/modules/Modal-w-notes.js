class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.myNodeList = document.querySelectorAll('li');
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    //the e parameter is populated with the event firing off.
    //the next parameter would be the index of the element in the returned node list
    //so instantiate the openTheModal function passes in the event fire
    //within openTheModal e = the event, add class when this event fires.
    //you're only passing the argument of the event to prevent defauly behavior in the function instantiation. If it was just an action then it wouldn't need that.

    // The function that is run in an addEventListener only accepts one argument and that is the event itself, to be used with in the function body, eg. to prevent default behaviour. Any extra arguments would only return undefined.

    //Things like querySelectorAll() and 1getElementsByTagName()` aren’t JavaScript methods, they’re browser APIs that let you access DOM elements. You can then manipulate them with JavaScript.

    //listen for closing click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    //pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))

    //modal is clicked
    this.modal.addEventListener("click", () => this.closeTheModal())
  }

  openTheModal(e) {
    e.preventDefault()
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