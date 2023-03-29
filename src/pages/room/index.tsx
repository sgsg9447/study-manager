import Done from "./Done";
import Fine from "./Fine";
import Member from "./Member";
import StudyInfo from "./StudyInfo";
import Todo from "./Todo";
import UserInfo from "./UserInfo";

export default function Room() {
  return (
    <div className="container">
      <div className="grid">
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
