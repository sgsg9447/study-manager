import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";
import ProgressBar from "../../components/common/ProgressBar";
import Text from "../../components/common/Text";

export default function Member() {
  return (
    <div className="item">
      <div className="item-title">
        <Icon.User size={18} color="white" />
        <Text style={{ marginLeft: "10px" }} type="title">
          MEMBERS
        </Text>
      </div>
      <div className="member">
        <div className="member-container">
          <div className="member-wrapper">
            <ProfileIcon profileImg={""} name={""} size="sm" />
            <div className="member-content-wrapper">
              <div className="member-text-wrapper">
                <Text>슬기</Text>
                <Text style={{ marginLeft: "5px" }}>{`-${3000}원`}</Text>
              </div>
              <ProgressBar progress={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
