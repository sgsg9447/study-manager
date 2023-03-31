import ProfileIcon from "../../components/common/profileIcon/ProfileIcon";
import Text from "../../components/common/text/Text";

export default function UserInfo() {
  return (
    <div className="item user-info">
      <div className="user-profile">
        <Text type="title" size="xxl">
          Hello! Sseul
        </Text>
        <ProfileIcon />
      </div>
      <Text color="gray">
        게으름을 벗어나기 위해 다같이 성장하기 위해 함께하는 스터터
      </Text>
    </div>
  );
}
