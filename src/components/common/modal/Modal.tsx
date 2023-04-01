import { useRef, useState, MouseEvent } from "react";
import Button from "../button/Button";
import * as Icon from "react-feather";
import Text from "../text/Text";

type Variant = "code" | "certification";

interface Props {
  variant?: Variant;
  closeModal: () => void;
  onSubmit: any;
}

interface UpdateParams {
  key: "authenticationMethod" | "authenticationContent";
  value: string;
}

export default function Modal({ variant, closeModal, onSubmit }: Props) {
  const inputRef = useRef(null);
  const [newDone, setNewDone] = useState({
    complitedAt: new Date(),
    authenticationMethod: "",
    authenticationContent: "",
  });
  const [isShowImage, setIsShowImage] = useState(false);
  const update = (params: UpdateParams[]) => {
    setNewDone({
      ...newDone,
      [params[0].key]: params[0].value,
      [params[1].key]: params[1].value,
    });
  };

  return (
    <div className="background" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {variant === "code" ? (
          <div className="variant-code">
            <Text type="title">입장코드를 입력해주세요</Text>
            <input placeholder="e.g. 1234567" />
          </div>
        ) : (
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
        )}
        <div className="button-wrapper">
          <Button onClick={closeModal} size="sm" variant="outlined">
            취소
          </Button>
          <Button
            onClick={(e: MouseEvent<HTMLButtonElement>) => onSubmit(e, newDone)}
            size="sm"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
