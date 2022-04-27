import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const NameArea = styled.span`
  background-color: white;
`;


const Picture = styled.img`
  height: 350px;
  width: 450px;
  padding-left: 300px
` 

const SanPham = (props) => {
  const { prod } = props;

  return (
    <div style={prod.style}>
        
      <NameArea>{prod.name}</NameArea>

      <span>{prod.price}</span>

      <div>{prod.des}</div>

      <Picture src={prod.img}/>
      <hr></hr>
      <Comment prodCmt={prod.comments} />
      
    </div>
  );
};

export default SanPham;
