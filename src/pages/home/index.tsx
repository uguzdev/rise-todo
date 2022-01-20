import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../../components/add-form";
import Button from "../../components/button";
import Header from "../../components/header";

import Table from "../../components/table";

import { updateTodos } from "../../store/todo/actions";
import { ITodo } from "../../store/todo/types";
import { SectionTitle, ListWrapper, PriorityLabel, BodyTh } from "./styled";
import { getPriorityText } from "../../helper";
import EditModal from "../../components/edit-modal";
import { ActionButtonWrapper } from "../../commons/style/styled";
import DeleteModal from "../../components/delete-modal";

const HomePage: FC = () => {
  const dispatch = useDispatch();

  const [isVisibleModal, setIsVisibleModal] = useState({
    edit: false,
    delete: false,
  });
  const [activeTodoId, setActiveTodoId] = useState(0);
  const [selectedTodo, setSelectedTodo] = useState<ITodo>({
    name: "",
    id: 0,
    priority: 0,
  });

  const todos: ITodo[] = useSelector((a: any) => a.todos);

  const onEdit = (todo: ITodo) => {
    setSelectedTodo(todo);
    setIsVisibleModal({ ...isVisibleModal, edit: true });
  };

  const onDelete = (id: number) => {
    setActiveTodoId(id);
    setIsVisibleModal({ ...isVisibleModal, delete: true });
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos !== null) {
      const jsonTodo = JSON.parse(todos);
      dispatch(updateTodos(jsonTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <AddForm />
      <ListWrapper>
        <SectionTitle>Job List</SectionTitle>
        <Table columns={["Name", "Priority", "Action"]}>
          {todos
            .sort((a, b) => a.priority - b.priority)
            .map(({ name, id, priority }) => (
              <tr key={id}>
                <BodyTh>{name}</BodyTh>
                <BodyTh>
                  <PriorityLabel type={priority}>
                    {getPriorityText(priority)}
                  </PriorityLabel>
                </BodyTh>
                <BodyTh>
                  <ActionButtonWrapper>
                    <Button
                      title="Edit"
                      handleClick={() => onEdit({ name, id, priority })}
                    />
                  </ActionButtonWrapper>
                  <ActionButtonWrapper>
                    <Button
                      title="Delete"
                      buttonType="warning"
                      handleClick={() => onDelete(id)}
                    />
                  </ActionButtonWrapper>
                </BodyTh>
              </tr>
            ))}
        </Table>

        {isVisibleModal.delete ? (
          <DeleteModal
            todoId={activeTodoId}
            onClose={() =>
              setIsVisibleModal({ ...isVisibleModal, delete: false })
            }
          />
        ) : null}

        {isVisibleModal.edit ? (
          <EditModal
            todo={selectedTodo}
            onClose={() =>
              setIsVisibleModal({ ...isVisibleModal, edit: false })
            }
          />
        ) : null}
      </ListWrapper>
    </>
  );
};

export default HomePage;
