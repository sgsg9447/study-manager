import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/userAtom";
import Done from "./Done";
import Fine from "./Fine";
import Member from "./Member";
import StudyInfo from "./StudyInfo";
import Todo from "./Todo";
import UserInfo from "./UserInfo";

export default function Room() {
  const user = useRecoilValue(userAtom);
  console.log("recoil", user);

  return (
    <div className="container">
      <div className="grid">
        {/* <img src={user.profileImage} /> */}
        <StudyInfo />
        <Member />
        <Fine />
        <UserInfo />
        <Todo />
        <Done />
      </div>
    </div>
  );
}
