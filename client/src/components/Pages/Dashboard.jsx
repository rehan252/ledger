import React from 'react'
import { connect } from 'react-redux'
import { DashboardBoxes } from '../../utils/constants'
import { SelectionBox } from '../atoms/SelectionBox'
import { MainBody } from '../commonComponents'
import { FruitAnimation } from "../assets/FruitAnimation"
import uuid from 'react-uuid'
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-content: center;
    height: 250px;
    width: "100%";
    margin-bottom: 15%;
`
const Animation = styled.div`
    display:flex;
    flex-direction: column;
    align-content: center;
`

export const Dashboard = (props) => {
    return (
        <MainBody>
            <Animation>
                <Container>
                    {DashboardBoxes.map((box) => {
                        return <SelectionBox key ={uuid()} text ={box.text} color ={box.color} route={box.route}/>
                    })}
                </Container>
                <FruitAnimation/>
            </Animation>
        </MainBody>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
