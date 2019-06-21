/**
 * Created by Akhtar on  19/06/2019.
 */

function HtmlElement() {
  this.click = function () {
    console.log("click")
  }
}

HtmlElement.prototype.focus = function () {
  console.log("focus")
}

function HtmlSelectElement(items = []) {
  this.items = [...items]

  this.addItem = function (item) {
    this.items.push(item)
  }

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  this.render = function () {
    return `
<select>${this.items.map(item => ` 
  <option>${item}</option>`).join('')}
</select>`
  }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlImageElement(src) {
  this.src = src

  this.render = function () {
    return `<img src="${this.src}" />`
  }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const i = new HtmlImageElement("http://www.abc.png")

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("https://www.abc.png")
]

for (let element of elements)
  console.log(element.render())
