import React, { ComponentProps } from 'react'
import "./Button.css"
import "../App.css"
type Tvariant = "dark" | "normal" | "login" | "seccece" | "danger"

type Tchildren =  ComponentProps<"button"> & {
  variant? : Tvariant
}

export default function Button({children , className , variant , ...root}:Tchildren) {
  const styleButtun = "p-2 rounded-md buttun"
  return (
    <button  {...root} className={`${styleButtun} ${className || ""}`}  style={{...Changevariant(variant)} }>{children}</button>
  )
}

function Changevariant(variant? : Tvariant) {
  switch (variant) {
    case "normal":
      return {backgroundColor : "black" , color : "white"}
    case "dark":
      return {backgroundColor : "white" , color : "black"}
    case "login":
      return {background : "var(--blue-gradient)" , color : "white"}
      case "seccece":
      return {backgroundColor : "green" , color : "white" , padding : " 0 4px"}
      case "danger":
      return {backgroundColor : "red" , color : "white", padding : " 0 5px"}
  }
  }