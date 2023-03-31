import { ChangeEvent, useRef, useState } from "react";
import * as Icon from "react-feather";
import Modal from "../../common/modal/Modal";
import Text from "../../common/text/Text";

interface Props {
  content: string;
  id: number;
}

export default function TodoContent({ content, id }: Props) {
  const formRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoContent, setEditTodoContent] = useState(content);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const clickModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
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
              clickModal();
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
      {isOpenModal && (
        <Modal
          variant="certification"
          onSubmit={onSubmit}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
