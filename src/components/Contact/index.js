import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;


const Details= styled.div`
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Details><div class="flex gap-2"><img src="gmail.jpeg" width="30px" height="25px" alt="gmail logo"/>:  satvikchatu@gmail.com </div></Details>
        <Details><div class="flex gap-2"><img src="call1.jpeg" width="30px" height="25px" alt="call logo"/>: +91 8971380108</div></Details>
      </Wrapper>
    </Container>
  )
}

export default Contact