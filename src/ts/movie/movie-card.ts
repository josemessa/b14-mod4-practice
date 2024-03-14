import { getElementByIdFrom } from "../utils/utils"

export function cardCreator(){

   const element= getElementByIdFrom("app", "cardCreator")

const card =document.createElement("div")
card.classList.add("card")

const cover = document.createElement("div")
cover.classList.add("cover")

const title = document.createElement("H2")
title.classList.add("title")

const description = document.createElement("p")
description.classList.add("description")

const year = document.createElement("p")
year.classList.add("year")

const rating = document.createElement("p")
rating.classList.add("rating")


card.appendChild(rating)
card.appendChild(year)
card.appendChild(description)
card.appendChild(title)
card.appendChild(cover)
element.appendChild(card)
   }

   cardCreator()