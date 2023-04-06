import { ChangeEvent, useRef, useState } from "react";
import * as Icon from "react-feather";
import { db } from "../../../../firebase/config";
import useShowModal from "../../../../hooks/useShowModal";
import Modal from "../../../common/modal";
import Text from "../../../common/text/Text";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

interface Props {
  content: string;
  id: string;
}

export default function TodoContent({ content, id }: Props) {
  const formRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoContent, setEditTodoContent] = useState<{ [x: string]: any }>({
    content,
  });
  const [isShowModal, openModal, closeModal] = useShowModal();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodoContent({ content: e.target.value });
  };
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
    content: string
  ) => {
    e.preventDefault();

    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, { content: editTodoContent.content });

    setIsEdit(false);
  };

  const deleteTodo = async (id: string) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc)
      .then(() => {
        console.log("todo 삭제");
      })
      .catch((error) => {
        console.error("todo 삭제 오류");
      });
  };

  return (
    <>
      <div className="todo-content-container">
        <div className="todo-content-wrapper">
          <button
            onClick={() => {
              openModal();
            }}
          >
            <Icon.CheckCircle size={18} color="white" />
          </button>

          {isEdit ? (
            <form
              ref={formRef}
              onSubmit={(event) => onSubmit(event, id, content)}
            >
              <input type="text" defaultValue={content} onChange={onChange} />
            </form>
          ) : (
            <Text style={{ paddingLeft: "10px" }}>{content}</Text>
          )}
        </div>

        <div className="todo-icon-wrapper">
          <button onClick={() => setIsEdit(true)}>
            <Icon.Edit2 size={18} color="white" />
          </button>
          <button onClick={() => deleteTodo(id)}>
            <Icon.Trash size={18} color="white" />
          </button>
        </div>
      </div>
      {isShowModal && <Modal variant="certification" onClose={closeModal} />}
    </>
  );
}
