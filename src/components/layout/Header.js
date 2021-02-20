
import React, { useState } from 'react';
import { GiWolfHowl } from 'react-icons/gi';
import {FaSignOutAlt} from 'react-icons/fa'
//import { SiWolframlanguage } from 'react-icons/si'
import { AddTask } from '../AddTask';
import { useAuth } from "../../context"
import { Link, useHistory } from "react-router-dom"


export const Header = ({darkMode, setDarkMode}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/authenticate")
      console.log('user', currentUser.uid)
    } catch {
      console.log('failed to logout')
    }
  }

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/new.png" alt="Thessa" />
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings__add"
              data-testid="quick-add-task-action"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              data-testid="dark-mode-action"
              className="settings__dark-mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              <GiWolfHowl />
            </li>
            <li className="user__status" onClick={handleLogout}>
              <div>
              <FaSignOutAlt/>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};