import React from 'react'
import styled from 'styled-components'
import Section from './Section'


const Home: React.VFC = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-s.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Exsisting Inventory" />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-y.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Exsisting Inventory" />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Exsisting Inventory" />

      <Section title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-x.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Exsisting Inventory" />

      <Section title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="/images/solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more" />

      <Section title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="/images/solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more" />

      <Section title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftBtnText="Shop Now"/>

    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

scroll-snap-type: y mandatory;

overflow-y: scroll;


`