class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".feature-item")
    this.hideInitially()
    this.events()
  }

  events() {
    window.addEventListener("scroll", () => {
      this.itemsToReveal.forEach(el => {
        this.calculateIfScrolledTo(el)
      })
    })
  }

  /*
  the events method looks in the window object & when the user scrolls the foreach loop returns four instances of the element .feature-item, it then runs the calculateIfScrolledTo function with the individual element name as the argument, populating the el parameter for each one:

  .feature-item => {
        this.calculateIfScrolledTo(.feature-item) 
      }
.feature-item => {
        this.calculateIfScrolledTo(.feature-item)
      }
.feature-item => {
        this.calculateIfScrolledTo(.feature-item)
      }
.feature-item => {
        this.calculateIfScrolledTo(.feature-item)
      }
this instantiates the calculateIfScrolledTo passing the element name as the argument for each instance.
what's in the brackets here is the argument that is passed to the function blueprint.
  */

  calculateIfScrolledTo(el) {
    let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) *100
    if(scrollPercent < 75) {
      el.classList.add("reveal-item--is-visible")
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
  }
}

export default RevealOnScroll;