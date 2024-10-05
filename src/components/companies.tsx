import React from 'react'
import Container from './container'
import equinix from "../images/equinix.png"
import prologis from "../images/prologis.png"
import realEstate from "../images/realEstate.jpg"
import realty from "../images/realty.png"
import tower from "../images/tower.png"

export default function Companies() {
  return (
    <Container>
        <div className='p-8 flex flex-wrap justify-center gap-8'>
            <img src={equinix} alt="" />
            <img src={prologis} alt="" />
            <img src={realEstate} alt="" />
            <img src={realty} alt="" />
            <img src={tower} alt="" />
        </div>
    </Container>
  )
}
