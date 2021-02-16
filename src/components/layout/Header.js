
import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import {GoSignOut} from 'react-icons/go'
import { AddTask } from '../AddTask';
import { useAuth } from "../../context"
import { Link, useHistory } from "react-router-dom"


export const Header = ({darkMode, setDarkMode}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
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
              <FaPizzaSlice />
            </li>
            <li className="user__status" onClick={handleLogout}>
              <GoSignOut/>
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