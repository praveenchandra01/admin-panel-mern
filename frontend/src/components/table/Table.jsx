import React, { useState, useEffect } from "react";
import {getUsers, deleteUser} from "../../http";
import Row from "../row/Row";
import styles from "./Table.module.css";
import { motion } from "framer-motion";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const { data } = await getUsers();
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function DeleteUser(user) {
    try {
      if (window.confirm(`Are you sure you want to delete ${user.name}`)) {
        await deleteUser(user);
        fetchUser();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: .1 }}
    exit={{ opacity: 0 }}
  >
      <div className="overflow-x-auto shadow-lg rounded-lg mt-20">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="uppercase">
            <tr className={styles.headRow}>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Department
              </th>
              <th scope="col" className="py-3 px-6">
                Employee Id
              </th>
              <th scope="col" className="py-3 px-6">
                Salary
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {data.map((user, index) => (
            <Row
              key={index}
              user={user}
              onDelete={DeleteUser}
            ></Row>
          ))}
        </table>
      </div>
    </motion.div>
  );
};

export default Table;
