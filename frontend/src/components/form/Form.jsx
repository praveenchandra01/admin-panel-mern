import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, createUser, updateUser } from "../../http";
import styles from "./form.module.css";
import { motion } from "framer-motion";

export const Form = (props) => {
  const [user, setUser] = useState({
    name: "",
    department: "",
    empId: "",
    salary: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const mode = props.mode;

  useEffect(() => {
    if (mode === "edit") {
      fetchUser();
    }
  }, []);

  function handleForm(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user.name || !user.department || !user.empId || !user.salary) {
      alert("All feilds are required!");
      return;
    }
    try {
      mode ? await updateUser(params.id, user) : await createUser(user);
      console.log("lvdn");
      setUser({ name: "", department: "", empId: "", salary: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchUser() {
    try {
      const userdata = await getUser(params.id);
      setUser(userdata.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      exit={{ opacity: 0 }} 
    >
      <div className="form">
        <div className="flex items-center justify-center">
          <div className="mx-auto w-3/4">
            <form className="p-4">
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border py-3 px-6  outline-none"
                  value={user.name}
                  onChange={handleForm}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="department" className="mb-3 block text-white">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Enter Department"
                  className="w-full rounded-md border py-3 px-6 outline-none"
                  value={user.department}
                  onChange={handleForm}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="empId" className="mb-3 block text-white">
                  Employee Id
                </label>
                <input
                  type="text"
                  name="empId"
                  id="empId"
                  placeholder="Enter Employee ID"
                  className="w-full rounded-md border py-3 px-6 outline-none"
                  value={user.empId}
                  onChange={handleForm}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="salary" className="mb-3 block text-white">
                  Salary
                </label>
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  placeholder="Amount"
                  className="w-full rounded-md border py-3 px-6 outline-none"
                  value={user.salary}
                  onChange={handleForm}
                />
              </div>

              <div>
                <button onClick={handleSubmit} className={styles.button}>
                  {mode ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
