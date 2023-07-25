import { styled } from "styled-components"

const ContentBox = ({children}:any) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default ContentBox


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 1280px;
    left: 50%;
    background-color: gainsboro;
    transform: translateX(-50%);
`