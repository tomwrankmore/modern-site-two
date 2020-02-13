import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'
 

// React code goes here:
import React from 'react'
import ReactDOM from 'react-dom'
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))


new ClientArea()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 90);
new MobileMenu();
let modal

//Only loads Modal.js if user clicks .open-modal button.
document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if(typeof modal == "undefined"){
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
       }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }

  })
})

if(module.hot) {
  module.hot.accept()
}

// hot modules means that webpack generates javascript file to memory rather than creating a file.