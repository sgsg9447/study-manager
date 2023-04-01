import Text from "../text/Text";
import * as Icon from "react-feather";
import useModal from "./useModal";
import Button from "../button/Button";

export default function CertificationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const {
    handleUpdate,
    isShowImage,
    setIsShowImage,
    newDone,
    inputRef,
    handleCertificationSubmit,
  } = useModal({
    onClose: onClose,
  });
  return (
    <>
      <form className="variant-certification">
        <Text type="title">공부내용 인증</Text>
        <Text type="title" size="sm">
          블로그 인증
        </Text>
        <input
          onChange={(e) => {
            handleUpdate([
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
                  handleUpdate([
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
      <div className="button-wrapper">
        <Button onClick={onClose} size="sm" variant="outlined">
          취소
        </Button>
        <Button onClick={handleCertificationSubmit} size="sm">
          확인
        </Button>
      </div>
    </>
  );
}
