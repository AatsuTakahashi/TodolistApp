import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import dummyData from '../pages/dummyData';
import styles from "../styles/components/layouts/Main.module.css";
import Card from './Card';


const Main = () => {
  const [data, setData] = useState(dummyData);
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
        setIsBrowser(true)
    }
  }, [])
  
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if(source.droppableId !== destination.droppableId) {
        const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
        const destinationColIndex = data.findIndex(
            (e) => e.id === destination.droppableId
        );

        const sourceCol = data[sourceColIndex];
        const destinationCol = data[destinationColIndex];
    
        const sourceTask = [...sourceCol.tasks];
        const destinationTask = [...destinationCol.tasks];
    
        const [removed] = sourceTask.splice(source.index, 1);
    
        destinationTask.splice(destination.index, 0, removed);
    
        data[sourceColIndex].tasks = sourceTask;
        data[destinationColIndex].tasks = destinationTask;
        setData(data);
    }   else {
        const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
        const sourceCol = data[sourceColIndex];
    
        const sourceTask = [...sourceCol.tasks];
    
        const [removed] = sourceTask.splice(source.index, 1);
    
        sourceTask.splice(destination.index, 0, removed);
    
        data[sourceColIndex].tasks = sourceTask;
        setData(data);
    }

     };
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
     {isBrowser ?
        <div className={styles.dndContent}>
            {data.map((section) =>(
                <Droppable key={section.id} droppableId={section.id}>
                    {(provided) => (
                        <div 
                        className={styles.dndSection} 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            <div className={styles.dndSectionTitle}>{section.title}</div>
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
                                            >
                                                <Card>{task.title}</Card>
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
        </div>: null}
    </DragDropContext>
  );
};

export default Main;

