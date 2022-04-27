import React, { useState } from "react";
import styled from "styled-components";
import Reply from "./Reply";

const CmtArea = styled.div``;

const Button = styled.button`
  margin: 10px;
  height: 50px;
  width: 330px;
`;
const ButtonsArea = styled.div`
  backgroundcolor: "red";
`;

const Comment = (props) => {
  const [isShowCmts, setIsShowCmts] = useState(true);

  const { prodCmt } = props;
  return (
    <div>
      <ButtonsArea>
        <Button>Like</Button>
        <Button
          onClick={() => {
            setIsShowCmts(!isShowCmts);
          }}
        >
          Comment
        </Button>
        <Button>Share</Button>
      </ButtonsArea>
      {isShowCmts && (
        <CmtArea>
          {prodCmt.length > 0 &&
            prodCmt.map((ele) => {
              return (
                <div>
                  <div>{ele.cus}</div>
                  <div>{ele.cmt}</div>
                  <Reply CommentReply = {ele.rep}/>
                  <hr></hr>
                </div>
              );
            })}
        </CmtArea>
      )}
    </div>
  );
};

export default Comment;
