import * as Icon from "react-feather";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Title from "../title";
import TodoContent from "./TodoContent";
import Button from "../../../common/button/Button";
import Text from "../../../common/text/Text";
import { appAuth, db } from "../../../../firebase/config";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { TodoModel, TodoModelConvert } from "../../../../model/TodoModel";

export default function Todo() {
  const [isAdd, setIsAdd] = useState(false);
  const [content, setContent] = useState("");
  const [todoData, setTodoData] = useState<TodoModelConvert[]>([]);
  const currentUser = appAuth.currentUser;
  const todosRef = collection(db, "todos");

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosRef);
      console.log(data);
      setTodoData(
        data.docs.map((doc) => {
          const todoData = doc.data() as TodoModel;
          return {
            ...todoData,
            id: doc.id,
            createdAt: todoData.createdAt?.toDate(),
            complitedAt: todoData.complitedAt?.toDate(),
          };
        })
      );
    };
    getTodos();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // create
    if (currentUser) {
      addDoc(todosRef, {
        authenticationMethod: "url",
        authenticationContent: null,
        createdAt: Timestamp.fromDate(new Date()),
        content: content,
        uid: currentUser.uid,
        complitedAt: null,
      }).then((docRef) => {
        console.log("새로운 todo가 추가되었습니다. ID:", docRef.id);
      });
    } else {
      console.warn("사용자가 로그인하지 않았습니다.");
    }
    setContent("");
    setIsAdd(false);
    //update? 한번더 api 요청
  };

  return (
    <div className="item todo">
      <Title titleName="todo" children={todoData.length} />

      <div className="todo-content-layout-container">
        <div className="todo-tontent-layout-wrapper">
          {todoData.map((todo) => {
            return (
              <TodoContent key={todo.id} content={todo.content} id={todo.id} />
            );
          })}
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
