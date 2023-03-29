import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";
import Text from "../../components/common/Text";
import Title from "../../components/feature/room/Title";

export default function Fine() {
  return (
    <div className="item">
      <div className="item-title">
        <Icon.DollarSign size={18} color="white" />
        <Text style={{ marginLeft: "10px" }} type="title">
          FINE
        </Text>
      </div>
      <div className="fine">
        <div className="fine-container">
          <Title titleName="fine" children={"9시"} />
          <div className="profile-wrapper">
            <ProfileIcon size="xs" profileImg={""} />
          </div>
          <Title titleName="fine" children={"12시"} />

          <div className="profile-wrapper">
            <ProfileIcon size="xs" profileImg={""} />
          </div>
          <Title titleName="fine" children={"18시"} />

          <div className="profile-wrapper">
            <ProfileIcon size="xs" profileImg={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
