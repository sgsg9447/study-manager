import { useRef, useState } from "react";
import Text from "../text/Text";
import * as Icon from "react-feather";

interface UpdateParams {
  key: "authenticationMethod" | "authenticationContent";
  value: string;
}

export default function CertificationModal() {
  const inputRef = useRef(null);
  const [isShowImage, setIsShowImage] = useState(false);
  const [newDone, setNewDone] = useState({
    complitedAt: new Date(),
    authenticationMethod: "",
    authenticationContent: "",
  });
  const update = (params: UpdateParams[]) => {
    setNewDone({
      ...newDone,
      [params[0].key]: params[0].value,
      [params[1].key]: params[1].value,
    });
  };
  return (
    <form className="variant-certification">
      <Text type="title">공부내용 인증</Text>
      <Text type="title" size="sm">
        블로그 인증
      </Text>
      <input
        onChange={(e) => {
          update([
            {
              key: "authenticationContent",
              value: e.currentTarget.value,
            },
            {
              key: "authenticationMethod",
              value: "link",
            },
          ]);
        }}
        placeholder="블로그 링크를 입력해주세요"
      />
      <Text type="title" size="sm">
        스크린샷 인증
      </Text>
      {isShowImage ? (
        <img
          src={newDone.authenticationContent}
          alt={newDone.authenticationContent}
        />
      ) : (
        <>
          <div
            className="input-file-box"
            onClick={() => {
              (inputRef.current as any).click();
            }}
          >
            <Icon.UploadCloud size={18} color="#828fa3" />
            <Text size="md" color="gray" style={{ marginLeft: "5px" }}>
              파일 업로드
            </Text>
          </div>
          <input
            className="hidden"
            ref={inputRef}
            type="file"
            style={{ visibility: "hidden" }}
            name={"fileName"}
            onChange={(e) => {
              if (e.target.files) {
                update([
                  {
                    key: "authenticationMethod",
                    value: "image",
                  },
                  {
                    key: "authenticationContent",
                    value: e.target.files[0].name,
                  },
                ]);
              }
              setIsShowImage(true);
            }}
          />
        </>
      )}
    </form>
  );
}
