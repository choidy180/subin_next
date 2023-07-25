import Head from "next/head"
import Image from "next/image"
import { styled } from "styled-components"
import TestComponent from "../../components/TestComponent"

export default function Test() {
    return (
      <>
        <Head>
            <title>메인</title>
        </Head>
        <Container>
            <TestComponent/>
            <div>
                <Image
                    src={'https://t1.daumcdn.net/cafeattach/mEr9/54fbbb5647718832422bc7095e5387e91ea68480'}
                    layout="fill"
                    objectFit="cover"
                    alt={'123'}
                />
            </div>
        </Container>
      </>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    div {
        position: relative;
        width: 300px;
        height: 300px;
        background-color: red;
    }
`
  