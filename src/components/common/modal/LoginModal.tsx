import Text from "../text/Text";

interface LoginModalProps {
  closeModal?: () => void;
  onSubmit?: any;
}

export default function LoginModal({ closeModal, onSubmit }: LoginModalProps) {
  const handleData = () => {};
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
          // value={email}
          onChange={handleData}
        />
        <label htmlFor="newPassword">
          <Text>password : </Text>
        </label>
        <input
          type="password"
          id="newPassword"
          required
          // value={password}
          onChange={handleData}
        />

        <label htmlFor="newNickName">
          <Text>NickName : </Text>
        </label>
        <input
          type="text"
          id="newNickName"
          required
          // value={displayName}
          onChange={handleData}
        />
      </fieldset>
    </form>
  );
}
