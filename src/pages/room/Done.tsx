import Card from "../../components/feature/room/Card";
import Title from "../../components/feature/room/Title";

export default function Done() {
  return (
    <div className="item done">
      <Title titleName="done" children={`${20}%`} />
      <div className="card-wrapper">
        <Card  />
      </div>
    </div>
  );
}
