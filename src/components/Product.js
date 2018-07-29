import React from 'react'
import styled from 'styled-components'

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Container = styled.div`
  padding: 10px;
  position: relative;
`

const ProductInfos = styled.div`
  position: absolute;
  bottom: 10px;
  height: 50px;
  left: 10px;
  right: 10px;
  background-color: rgba(0,0,0,0.3);
  color: white;
  padding: 10px;
`

const Product = ({ src, alt, title }) => (
  <Container>
    <ProductImg src={src} alt={alt} />
    <ProductInfos>
      {title}
    </ProductInfos>
  </Container>
)

export default Product