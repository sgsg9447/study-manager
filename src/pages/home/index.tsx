import Button from "../../components/common/Button";

export default function Home() {
  return (
    <div className="container">
      <div className="home-wrapper">
        <Button onClick={() => console.log("click")} style={{ width: "300px" }}>
          로그인하기
        </Button>
      </div>
    </div>
  );
}
