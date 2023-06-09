import React from "react";

import Card from "../UI/Card/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form className={classes} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type={'submit'} onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
