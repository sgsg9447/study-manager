import { useRef, useState } from "react";
import useSignup from "../../hooks/useSignup";
import Button from "./Button";
import Text from "./Text";

//TODO : UI 퍼블리싱
//TODO : 비밀번호 확인 유효성검사 추가

type Variant = "signup" | "login";

interface Props {
  variant?: Variant;
  closeModal: () => void;
  onSubmit: any;
}

export default function LoginModal({ variant, closeModal, onSubmit }: Props) {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signup } = useSignup();

  //TODO : any 바꾸기
  const handleData = (event: any) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    } else if (event.target.type === "text") {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(email, password);
    signup(email, password, displayName);

    closeModal();
  };

  return (
    <div className="background" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {variant === "signup" ? (
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
          </form>
        ) : (
          <form>
            <fieldset>
              <label htmlFor="myEmail">
                <Text>email : </Text>
              </label>
              <input
                type="email"
                id="myEmail"
                required
                value={email}
                onChange={handleData}
              />
              <label htmlFor="myPassword">
                <Text>password : </Text>
              </label>
              <input
                type="password"
                id="myPassword"
                required
                value={password}
                onChange={handleData}
              />
            </fieldset>
          </form>
        )}

        <div className="button-wrapper">
          <Button onClick={closeModal} size="sm" variant="outlined">
            취소
          </Button>
          <Button onClick={handleSubmit} size="sm">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
