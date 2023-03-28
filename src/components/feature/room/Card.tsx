import React from "react";
import Text from "../../common/Text";

export default function Card({ doneData }: any) {
  return (
    <div className="card">
      <Text type="title">{"ttt"}</Text>
      <div className="square"></div>
      <Text size="sm" color="gray">
        {`인증시간 : 2023.03.23`}
      </Text>
    </div>
  );
}
