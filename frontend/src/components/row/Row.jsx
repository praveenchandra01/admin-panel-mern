import React from "react";
import { Link } from "react-router-dom";
import styles from "./Row.module.css";

const Row = ({ user, onDelete }) => {
  return (
    <>
      <tbody>
        <tr className={`${styles.bodyRow} bg-white border-b`}>
          <td className="py-4 px-6 font-medium text-gray-900">{user.name}</td>
          <td className="py-4 px-6">{user.department}</td>
          <td className="py-4 px-6">{user.empId}</td>
          <td className="py-4 px-6">{user.salary}</td>
          <td className="w-32 text-black grid grid-cols-2 py-4 px-6 ">
            <Link to={`/update/${user._id}`}>
              <i className="fa fa-pencil"></i>
            </Link>
            <button onClick={() => onDelete(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Row;
