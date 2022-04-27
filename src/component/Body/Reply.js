import React, { useState } from "react";
import styled from "styled-components";

const CmtArea = styled.div``;
const RepArea = styled.button`
  height: 20px;
  width: 50px;
`;

const Reply = (props) => {
  const [isShowReply, setIsShowReply] = useState(false);
  const { CommentReply } = props;
  return (
    <div>
      <RepArea
        onClick={() => {
          setIsShowReply(!isShowReply);
        }}
      >
        Reply
      </RepArea>
      {isShowReply && (
        <CmtArea>
          {CommentReply.length > 0 &&
            CommentReply.map((ele) => {
              return (
                <div>
                  <div>{ele.cus}</div>
                  <div>{ele.cmt}</div>
                  <hr></hr>
                </div>
              );
            })}
        </CmtArea>
      )}
    </div>
  );
};

export default Reply;
