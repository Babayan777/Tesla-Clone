import React from 'react'
import Header from './Header'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online"
                backgroundImage="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="Existing invetnory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="Existing invetnory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="Existing invetnory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="Existing invetnory"
            />
            <Section
                title="Lowest Cost Solar Panles in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Solar Panels"
                backgroundImage="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
`

export default Home


