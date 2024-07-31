import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressBarComponent from "../../../common/progress-bar-component.tsx";
import { deleteTodo, updateTodo } from "../action/project-1-action.tsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import NoDataComponent from "../../../common/no-data-component.tsx";

let Project_1_Result = (props: any) => {
  let [selectedToDos, setSelectedToDos]: any = useState([]);
  let [isEditing, setIsEditing]: any = useState(false);

  let dispatch = useDispatch();

  let todoState = useSelector((state: any) => state?.todo);

  if (todoState?.toDoList?.length === 0) {
    return (
      <div className="height-100 vertically-center-using-flex width-100">
        <NoDataComponent message="No result to display" />
      </div>
    );
  } else {
    return (
      <div className="todo-result-container">
        <PanelGroup autoSaveId="example" direction="horizontal">
          <Panel className="panel-css">
            <div className="todo-result-css" id="custom_scroll_kb">
              {todoState?.toDoList?.map((todo: any, index: any) => {
                return (
                  <div className="todo-item-css position-relative vertically-center-using-flex">
                    <div
                      className="text-ellipses"
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      <input
                        type="text"
                        className="result-input-css"
                        title={todo?.updatedVal || todo?.originalVal || ""}
                        value={todo?.updatedVal || todo?.originalVal || ""}
                        onChange={(event) => {
                          if (event.target.value.length === 0) {
                            dispatch(
                              deleteTodo({
                                originalVal: todo.originalVal,
                              })
                            );
                            if (
                              selectedToDos?.filter(
                                (val) => val?.originalVal === todo?.originalVal
                              )?.length > 0
                            ) {
                              setSelectedToDos([
                                ...selectedToDos.filter(
                                  (item) =>
                                    item?.originalVal !== todo?.originalVal
                                ),
                              ]);
                            }
                          } else {
                            dispatch(
                              updateTodo({
                                updatedVal: event.target.value,
                                originalVal: todo.originalVal,
                              })
                            );
                          }
                        }}
                        onBlur={() => {
                          setIsEditing(false);
                        }}
                      />
                      <div className="vertically-center-using-flex checkbox-container-css">
                        <input
                          type="checkbox"
                          key={index}
                          className="custom-checkbox-css"
                          onClick={(event: any) => {
                            if (event.target.checked) {
                              setSelectedToDos([...selectedToDos, todo]);
                            } else {
                              setSelectedToDos(
                                selectedToDos.filter(
                                  (item) =>
                                    item?.originalVal !== todo?.originalVal
                                )
                              );
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Panel>
          <PanelResizeHandle />
          <Panel className="panel-css">
            <div className="progress-bar-css vertically-center-using-flex">
              <ProgressBarComponent
                value={selectedToDos?.length}
                maxValue={
                  todoState?.toDoList?.length === 0
                    ? 1
                    : todoState?.toDoList?.length
                }
              />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
};

export default Project_1_Result;
