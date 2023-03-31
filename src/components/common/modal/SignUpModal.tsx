import Button from "../button/Button";
import Text from "../text/Text";
import useModal from "./useModal";

export default function SignupModal({ onClose }: { onClose: () => void }) {
  const { handleData, handleSignupSubmit, email, password, displayName } =
    useModal({ onClose: onClose });

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
        <label htmlFor="newNickName">
          <Text>NickName : </Text>
        </label>
        <input
          type="text"
          id="newNickName"
          required
          value={displayName}
          onChange={handleData}
        />
      </fieldset>
      <div className="button-wrapper">
        <Button onClick={onClose} size="sm" variant="outlined">
          취소
        </Button>
        <Button onClick={handleSignupSubmit} size="sm">
          확인
        </Button>
      </div>
    </form>
  );
}
