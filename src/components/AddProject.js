import React, { useState } from 'react';
import { firebase } from '../firebase';
import { v4 as uuidv4} from 'uuid'

export const AddProject = ({ projects, setProjects }) => {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState('');
  const projectId = uuidv4();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: 'KxjSE5Z7ryK1DERn5dL6',
      })
      .then(() => {
        const newProjects = [
          ...projects,
          { name: projectName, projectId, userId: 'KxjSE5Z7ryK1DERn5dL6' },
        ];
        newProjects.sort((a, b) => (a.projectId > b.projectId ? 1 : -1));
       setProjects(newProjects);
        setProjects([]);
        setProjectName('');
        setShow(false);
      });

  return (
    <div className="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span className="add-project__cancel" onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span className="add-project__text" onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  );
};