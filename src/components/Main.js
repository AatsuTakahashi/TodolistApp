import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "../styles/components/layouts/Main.module.css";
import Card from "./Card";
import Image from "next/image";
import axios from "axios";

const Main = ({ user, todoData, mutate }) => {
  if (!user || !todoData) return null;

  useEffect(() => {
    const Todo = todoData.filter(({ type }) => type === "To do");
    const Doing = todoData.filter(({ type }) => type === "実行中");
    const Done = todoData.filter(({ type }) => type === "完了したもの");
    const todos = [
      {
        id: 1,
        type: "To do",
        tasks: Todo,
      },
      {
        id: 2,
        type: "実行中",
        tasks: Doing,
      },
      {
        id: 3,
        type: "完了したもの",
        tasks: Done,
      },
    ];

    setData(todos);
  }, [todoData]);

  const Todo = todoData.filter(({ type }) => type === "To do");
  const Doing = todoData.filter(({ type }) => type === "実行中");
  const Done = todoData.filter(({ type }) => type === "完了したもの");
  const todos = [
    {
      id: 1,
      type: "To do",
      tasks: Todo,
    },
    {
      id: 2,
      type: "実行中",
      tasks: Doing,
    },
    {
      id: 3,
      type: "完了したもの",
      tasks: Done,
    },
  ];

  const [data, setData] = useState(todos);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const newTodoData = JSON.parse(JSON.stringify(data));
      const sourceColIndex = newTodoData.findIndex(
        (e) => e.id === source.droppableId
      );
      const destinationColIndex = newTodoData.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceTask = [...newTodoData[sourceColIndex].tasks];
      const destinationTask = [...newTodoData[destinationColIndex].tasks];

      const [removed] = sourceTask.splice(source.index, 1);

      destinationTask.splice(destination.index, 0, removed);

      // typeをupdate
      removed.type = newTodoData[destinationColIndex].type;

      newTodoData[sourceColIndex].tasks = sourceTask;
      newTodoData[destinationColIndex].tasks = destinationTask;
      setData(newTodoData);

      await updateTodo(removed.id, removed.type);
    } else {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const sourceCol = data[sourceColIndex];

      const sourceTask = [...sourceCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);

      sourceTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };

  const updateTodo = async (id, type) => {
    try {
      const response = await axios.put("/api/todos", {
        id,
        type,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      alert("削除されました。");
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isBrowser ? (
        <div className={styles.dndContent}>
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  className={styles.dndSection}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className={styles.dndSectionTitle}>{section.type}</div>
                  <div className={styles.dndSectionContent}>
                    {section.tasks.map((task, index) => (
                      <Draggable
                        draggableId={String(task.id)}
                        index={index}
                        key={task.id}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.3" : "1",
                            }}
                            className={styles.cardContent}
                          >
                            <Card>
                              {task.title}
                              <button
                                className={styles.trashButton}
                                onClick={() => deleteTodo(task.id)}
                              >
                                <Image
                                  src={"/trashIcon.png"}
                                  width={20}
                                  height={20}
                                  alt={"trashIcon"}
                                  className={styles.trash}
                                />
                              </button>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      ) : null}
    </DragDropContext>
  );
};

export default Main;
