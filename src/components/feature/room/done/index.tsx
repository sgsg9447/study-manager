import Card from "../card";
import Title from "../title";

export default function Done() {
  return (
    <div className="item done">
      <Title titleName="done" children={`${20}%`} />
      <div className="card-wrapper">
        <Card />
      </div>
    </div>
  );
}
