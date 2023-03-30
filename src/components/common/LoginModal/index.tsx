import Button from '../Button';
import Text from '../Text';
import useLoginModal from './useLoginModal';

//TODO : UI 퍼블리싱
//TODO : 비밀번호 확인 유효성검사 추가

type Variant = 'signup' | 'login';

interface LoginModalProps {
  variant?: Variant;
  closeModal: () => void;
  onSubmit: any;
}

export default function LoginModal({
  variant,
  closeModal,
  onSubmit,
}: LoginModalProps) {
  const {
    handleData,
    handleSignupSubmit,
    handleLoginSubmit,
    email,
    password,
    displayName,
  } = useLoginModal({ onClose: closeModal });

  return (
    <div className="background" onClick={closeModal}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {variant === 'signup' ? (
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
              <Button onClick={closeModal} size="sm" variant="outlined">
                취소
              </Button>
              <Button onClick={handleSignupSubmit} size="sm">
                확인
              </Button>
            </div>
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
            <div className="button-wrapper">
              <Button onClick={closeModal} size="sm" variant="outlined">
                취소
              </Button>
              <Button onClick={handleLoginSubmit} size="sm">
                확인
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
