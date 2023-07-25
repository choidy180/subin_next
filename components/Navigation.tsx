import { useRouter } from "next/router";
import { styled } from "styled-components";

const Navigation = () => {
    const router = useRouter()
    return (
        <>
            <Container>
                <Div>
                    <ContentDiv>
                        <span>투데이</span>
                        <span>피드</span>
                        <span>검색</span>
                        <span>내서재</span>
                        <span>관리</span>
                    </ContentDiv>
                </Div>
                <Div>
                    <ContentDiv>
                        <p onClick={()=> router.push('/category/best')}>베스트셀러</p>
                        <p onClick={()=> router.push('/category/new')}>새로 나올 책</p>
                        <p onClick={()=> router.push('/category/dosmetic')}>국내도서</p>
                        <p onClick={()=> router.push('/category/foreign')}>외국도서</p>
                        <p onClick={()=> router.push('/category/ebook')}>eBook</p>
                        <HitBox 
                            style={{
                                transform: `translateX(${router.asPath.replace('/category/','') === 'best' ? '0px' : router.asPath.replace('/category/','') === 'new' ? '120px' : router.asPath.replace('/category/','') === 'dosmetic' ? '240px' : router.asPath.replace('/category/','') === 'foreign' ? '360px' : router.asPath.replace('/category/','') === 'ebook' && '480px' })`
                            }}
                        /> 
                    </ContentDiv>
                </Div>
            </Container>
        </>
    )
}

export default Navigation

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    p {
        cursor: pointer;
        font-size: 20px;
        width: 120px;
        text-align: center;
    }
`;

const Div = styled.div`
    display: flex; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px;
    border-bottom: 1px solid #bbbbbb;

`;
const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    max-width: 1280px;
`

const HitBox = styled.div`
    width: 120px;
    height: 4px;
    background-color: black;
    position: absolute;
    bottom: -14px;
    transition: all ease-in-out .3s;
`