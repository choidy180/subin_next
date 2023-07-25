import { styled } from "styled-components"

const TestComponent = () => {
    return (
        <Container>123</Container>
    )
}

export default TestComponent

const Container = styled.p`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30px;
    width: 300px;
    padding: 20px 0;
    background-color: #a2d4ff;
    color: black;
`