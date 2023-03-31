import Text from "../text/Text";

export default function CodeModal() {
  return (
    <div className="variant-code">
      <Text type="title">입장코드를 입력해주세요</Text>
      <input placeholder="e.g. 1234567" />
    </div>
  );
}
