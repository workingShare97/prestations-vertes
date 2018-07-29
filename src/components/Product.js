import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Container = styled(Link)`
  padding: 10px;
  position: relative;
  display: block;
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

const Product = ({ id, src, alt, title }) => (
  <Container to={`/etiquettes/${id}`}>
    <ProductImg src={src} alt={alt} />
    <ProductInfos>
      {title}
    </ProductInfos>
  </Container>
)

export default Product