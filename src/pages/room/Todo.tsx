import Button from "../../components/common/button/Button";
import Text from "../../components/common/text/Text";
import * as Icon from "react-feather";
import TodoContent from "../../components/feature/room/TodoContent";
import { ChangeEvent, FormEvent, useState } from "react";
import Title from "../../components/feature/room/Title";

export default function Todo() {
  const [isAdd, setIsAdd] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="item todo">
      <Title titleName="todo" children={4} />

      <div className="todo-content-layout-container">
        <div className="todo-tontent-layout-wrapper">
          <TodoContent content={"tttt"} id={1} />
        </div>

        {isAdd ? (
          <form onSubmit={onSubmit} className="add-todo-container">
            <input
              type="text"
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              autoFocus={true}
            />
          </form>
        ) : (
          <label
            className="add-todo-container"
            onClick={() => {
              setIsAdd(true);
            }}
          >
            <Button variant="text">
              <Icon.Plus size={20} color="#635fc7" />
            </Button>
            <Text
              type="title"
              size="lg"
              color="primary"
              style={{ paddingLeft: "10px" }}
            >
              ADD TODO
            </Text>
          </label>
        )}
      </div>
    </div>
  );
}
