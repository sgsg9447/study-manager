import Button from "../button/Button";
import Text from "../text/Text";
import useModal from "./useModal";

export default function CodeModal({ onClose }: { onClose: () => void }) {
  const { handleData, handleCodeSubmit } = useModal({
    onClose: onClose,
  });

  return (
    <div className="variant-code">
      <Text type="title">입장코드를 입력해주세요</Text>
      <input
        id="entranceCode"
        onChange={handleData}
        placeholder="e.g. 1234567"
      />
      <div className="button-wrapper">
        <Button onClick={onClose} size="sm" variant="outlined">
          취소
        </Button>
        <Button onClick={handleCodeSubmit} size="sm">
          확인
        </Button>
      </div>
    </div>
  );
}
