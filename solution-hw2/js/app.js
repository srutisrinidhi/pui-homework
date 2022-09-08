class Roll
{
    constructor(type, price, glazing, packSize, id) {
        this.type = type
        this.basePrice = price
        this.price = price
        this.glazing = glazing
        this.packSize = packSize
        this.element = document.getElementById(id)
        this.createDropDown()
        this.updateRoll()

        const size1 = this.element.querySelector(".sizes-1")
        size1.onclick = this.changeQuantity.bind(this, size1, 1)

        const size3 = this.element.querySelector(".sizes-3")
        size3.onclick = this.changeQuantity.bind(this, size3, 3)

        const size6 = this.element.querySelector(".sizes-6")
        size6.onclick = this.changeQuantity.bind(this, size6, 6)

        const size12 = this.element.querySelector(".sizes-12")
        size12.onclick = this.changeQuantity.bind(this, size12, 12)

        const dropdown = this.element.querySelector(".dropdown")
        dropdown.onchange = this.changeGlaze.bind(this)

        const addToCart = this.element.querySelector(".addtocart")
        addToCart.onclick = this.addToCartList.bind(this)

    }

    createDropDown() {
        for (const option in glazingOptions) {
            var opt = document.createElement("option");
            this.element.querySelector(".dropdown").innerHTML += '<option>' + option + '</option>';
          }
    }

    changeQuantity(element,quantity) {
        this.element.querySelector(".sizes-1").style.backgroundColor = "white"
        this.element.querySelector(".sizes-3").style.backgroundColor = "white"
        this.element.querySelector(".sizes-6").style.backgroundColor = "white"
        this.element.querySelector(".sizes-12").style.backgroundColor = "white"
        element.style.backgroundColor = "lightgrey"
        this.packSize = quantity
        this.calculatePrice()
    }

    changeGlaze() {
        this.glazing = this.element.querySelector(".dropdown").value
        this.calculatePrice()
    }
    calculatePrice(){
        this.price = (this.basePrice + glazingOptions[this.glazing])*packSizeOptions[this.packSize]
        this.price = this.price.toFixed(2)
        this.updateRoll()
    }

    updateRoll(){
        this.element.querySelector(".roll-title").innerHTML = this.type
        this.element.querySelector(".price").innerHTML = "$" + this.price
    }

    addToCartList() {
        cartItems.push(this)
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
}

const glazingOptions = {"Keep original": 0, "Sugar milk": 0, "Vanilla milk": 0.5, "Double chocolate": 1.5}

const packSizeOptions = {1:1, 3:3, 6:5, 12:10}

const cartItems = []

const originalRoll = new Roll("Original cinnamon roll", 2.49, "Keep original", 1, "originalRoll")
const appleCinnamonRoll = new Roll("Apple cinnamon roll", 3.49, "Keep original", 1, "appleCinnamonRoll")
const raisinCinnamonRoll = new Roll("Raisin cinnamon roll", 2.99, "Keep original", 1, "raisinCinnamonRoll")
const walnutCinnamonRoll = new Roll("Walnut cinnamon roll", 3.49, "Keep original", 1, "walnutCinnamonRoll")
const doubleChocolateRoll = new Roll("Double-chocolate cinnamon roll", 3.99, "Keep original", 1, "doubleChocolateRoll")
const strawberryRoll = new Roll("Strawberry cinnamon roll", 3.99, "Keep original", 1, "strawberryRoll")

