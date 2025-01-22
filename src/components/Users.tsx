import React, { useState } from "react";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchUser } from "../store/users/Users";

const Users: React.FC = () => {
  const [userId, setUserId] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { user, allUsers, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <div>
      <h2>The list of Users</h2>
      <form>
        <label>Вывести одного пользователя: </label>
        <input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          value={userId}
          placeholder="Введите ID"
          required
        />
        <button type="button" onClick={() => dispatch(fetchUser(userId))}>
          Вывести
        </button>
      </form>
      <hr />
      <form>
        <label>Вывести всех пользователей: </label>
        <button
          style={{ marginTop: 10 }}
          type="button"
          onClick={() => {
            dispatch(fetchAllUsers());
            setUserId("");
          }}
        >
          Вывести
        </button>
      </form>
      <hr />
      {userId && user ? (
        <div>
          <h3>Имя: {user?.name}</h3>
          <h3>Почта: {user?.email}</h3>
        </div>
      ) : (
        allUsers &&
        allUsers.map((user) => (
          <div>
            <h3>Имя: {user.name}</h3>
            <h3>Почта: {user.email}</h3>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
