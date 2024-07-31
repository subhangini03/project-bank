import React, { useRef } from "react";
import Add_Img from "../../../common/images/add.svg";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/project-1-action.tsx";

let Project_1 = () => {
  let dispatch = useDispatch();
  let todoRef: any = useRef("");
  return (
    <div className="proj-container">
      <div className="proj-title">
        <h2 className="proj-title-h2">To Do List</h2>
      </div>
      <div className="proj-desc">
        <div>
          This To Do List can be used for tracking personal day to day
          activities. Similar to other tracker notes, here user can add list of
          tasks, which can be tracked in the result screen using a progress bar.
        </div>
        <div>
          {" "}
          This is updated, when the User checks or unchecks the added To Dos.
          The User can delete any task which is not required.
        </div>
      </div>
      <div className="proj-content vertically-center-using-flex">
        <div className="d-flex">
          <div className="vertically-center-using-flex margin-right-16 font-weight-500">
            Enter To Do
          </div>

          <div className="position-relative">
            <input
              type="text"
              placeholder="ex: Go to Gym "
              ref={todoRef}
              className="height-35 width-350 text-align-center font-size-15"
            />
            <div
              className="add-icon-css vertically-center-using-flex"
              title="Add"
              onClick={() => {
                if (todoRef?.current?.value) {
                  dispatch(
                    addTodo({
                      originalVal: todoRef.current.value,
                      updatedVal: null,
                    })
                  );
                  todoRef.current.value = "";
                }
              }}
            >
              <img src={Add_Img} style={{ width: "20px", height: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_1;
