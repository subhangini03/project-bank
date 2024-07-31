import React from "react";
import Project_1_Result from "../features/project_1_component/component/project_1_result.tsx";
import Project_2_Result from "../features/project_2_component/component/project_2_result.tsx";
import Project_3_Result from "../features/project_3_component/component/project_3_result.tsx";
import Project_4_Result from "../features/project_4_component/component/project_4_result.tsx";
import Project_5_Result from "../features/project_5_component/component/project_5_result.tsx";

let ResultComponent = (props) => {
  let { match } = props;
  return (
    <div className="proj-container">
      <div className="proj-title">
        <h2 className="proj-title-h2">Result</h2>
      </div>
      <div className="proj-content align-item-baseline d-flex flex-direc-column overflow-hidden">
        {match?.path === "/project-1" && <Project_1_Result />}
        {match?.path === "/project-2" && <Project_2_Result />}
        {match?.path === "/project-3" && <Project_3_Result />}
        {match?.path === "/project-4" && <Project_4_Result />}
        {match?.path === "/project-5" && <Project_5_Result />}
      </div>
    </div>
  );
};

export default ResultComponent;
