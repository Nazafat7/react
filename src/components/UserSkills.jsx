import React, { useState } from "react";

function UserSkills({ skill, level }) {
  return (
    <div>
      <strong>{skill}</strong> :Level - {level}
    </div>
  );
}

export default UserSkills;
