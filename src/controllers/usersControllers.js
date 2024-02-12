const databaseUsers = require("../../database");

const getUsers = (req, res) => {
  databaseUsers
    .query("select * from users")
    .then(([users]) => {
      console.log(users);
      res.json(users).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  databaseUsers
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] == null) {
        res.status(404).send("Not Found : No correspondding id");
      } else {
        console.log(users);
        res.json(users);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  getUsersById,
};