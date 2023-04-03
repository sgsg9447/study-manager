import { ChangeEvent, useRef, useState } from "react";
import * as Icon from "react-feather";
import useShowModal from "../../../../hooks/useShowModal";
import Modal from "../../../common/modal";
import Text from "../../../common/text/Text";

interface Props {
  content: string;
  id: string;
}

export default function TodoContent({ content, id }: Props) {
  const formRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoContent, setEditTodoContent] = useState(content);
  const [isShowModal, openModal, closeModal] = useShowModal();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodoContent(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit}
            >
              <input type="text" defaultValue={content} onChange={onChange} />
            </form>
          ) : (
            <Text style={{ paddingLeft: "10px" }}>{content}</Text>
          )}
        </div>

        <div className="todo-icon-wrapper">
          <button onClick={() => console.log("edit")}>
            <Icon.Edit2 size={18} color="white" />
          </button>
          <button
            onClick={async () => {
              console.log("delete");
            }}
          >
            <Icon.Trash size={18} color="white" />
          </button>
        </div>
      </div>
      {isShowModal && <Modal variant="certification" onClose={closeModal} />}
    </>
  );
}
