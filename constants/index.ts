import brownBg from "@/public/images/brown-bg.svg"
import redBg from "@/public/images/red-bg.svg"
import blueBg from "@/public/images/blue-bg.svg"
import orangeBg from "@/public/images/orange-bg.svg"
import whiteBg from "@/public/images/white-bg.svg"
import blackBg from "@/public/images/black-bg.svg"
// ------------------------------------------------
import brownElm from "@/public/images/brown-elements.webp"
import redElm from "@/public/images/red-elements.webp"
import blueElm from "@/public/images/blue-elements.webp"
import orangeElm from "@/public/images/orange-elements.webp"
import whiteElm from "@/public/images/white-elements.webp"
import blackElm from "@/public/images/black-elements.webp"
// ------------------------------------------------
import brownDrink from "@/public/images/brown-drink.webp"
import redDrink from "@/public/images/red-drink.webp"
import blueDrink from "@/public/images/blue-drink.webp"
import orangeDrink from "@/public/images/orange-drink.webp"
import whiteDrink from "@/public/images/white-drink.webp"
import blackDrink from "@/public/images/black-drink.webp"
const flavorslist = [
    {
        name: "Chocolate Milk",
        bg: brownBg,
        elements: brownElm,
        drink: brownDrink
    },
    {
        name: "Stawberry Milk",
        bg: redBg,
        elements: redElm,
        drink: redDrink
    },
    {
        name: "Cookies & Cream",
        bg: blueBg,
        elements: blueElm,
        drink: blueDrink
    },
    {
        name: "Peanut Butter Chocolate",
        bg: orangeBg,
        elements: orangeElm,
        drink: orangeDrink
    },
    {
        name: "Vanilla Milkshake",
        bg: whiteBg,
        elements: whiteElm,
        drink: whiteDrink
    },
    {
        name: "Max Chocolate Milk",
        bg: blackBg,
        elements: blackElm,
        drink: blackDrink
    },
];

export {
    flavorslist
}