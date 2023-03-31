import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/userAtom";
import Done from "../../components/feature/room/done";
import StudyInfo from "../../components/feature/room/studyInfo";
import Member from "../../components/feature/room/member";
import Fine from "../../components/feature/room/fine";
import UserInfo from "../../components/feature/room/userInfo";
import Todo from "../../components/feature/room/todo";


export default function Room() {
  const user = useRecoilValue(userAtom);
  console.log("recoil", user);

  return (
    <div className="container">
      <div className="grid">
        {/* <img src={user.profileImage} /> */}
        <StudyInfo />
        <Member />
        <Fine/>
        <UserInfo />
        <Todo />
        <Done />
      </div>
    </div>
  );
}
