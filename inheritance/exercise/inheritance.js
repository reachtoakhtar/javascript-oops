/**
 * Created by Akhtar on 11/01/2020.
 */

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  }
}

HtmlElement.prototype.focus = function () {
  HtmlElement.constructor.call()
  console.log("focused");
}

function HtmlSelectElement(items = []) {
  this.items = items

  this.addItem = function(item) {
    this.items.push(item)
  }

  this.removeItem = function(item) {
    const index = this.items.indexOf(item)
    this.items.splice(index, 1)
  }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HTMLSelectElement

const h = new HtmlElement()
const s = new HtmlSelectElement()
