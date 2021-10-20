import { useEffect, useState } from "react";

export const App = ({ name }) => {
  const [taks, setTasks] = useState([{ id: 0, describe: "default" }]);

  useEffect(() => {
    window.addEventListener(
      "@rpg/react-parcel-bro/todo/add-task",
      (event: any) => {
        setTasks((oldState) => [...oldState, event.detail]);
      }
    );
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {taks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
