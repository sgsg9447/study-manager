import Button from "../button/Button";
import Text from "../text/Text";
import useModal from "./useModal";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const { handleData, handleLoginSubmit, email, password } = useModal({
    onClose: onClose,
  });

  return (
    <form>
      <fieldset>
        <label htmlFor="newEmail">
          <Text>email : </Text>
        </label>
        <input
          type="email"
          id="newEmail"
          required
          value={email}
          onChange={handleData}
        />
        <label htmlFor="newPassword">
          <Text>password : </Text>
        </label>
        <input
          type="password"
          id="newPassword"
          required
          value={password}
          onChange={handleData}
        />
      </fieldset>
      <div className="button-wrapper">
        <Button onClick={onClose} size="sm" variant="outlined">
          취소
        </Button>
        <Button onClick={handleLoginSubmit} size="sm">
          확인
        </Button>
      </div>
    </form>
  );
}
