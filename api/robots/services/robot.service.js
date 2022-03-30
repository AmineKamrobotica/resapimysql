const pool = require("../../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into robots(id,name, matricule,secretcode, date, capacity, weigth) 
                values(?,?,?,?,?,?,?)`,
      [
        data.id,
        data.name,
        data.matricule,
        data.secretcode,
        data.date,
        data.capacity,
        data.weigth,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getRobotByMatricule: (matricule, callBack) => {
    pool.query(
      `select * from robots where matricule = ?`,
      [matricule],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getRobotByRobotId: (id, callBack) => {
    pool.query(
      `select id,name, matricule,secretcode, date, capacity, weigth from robots where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getRobots: (callBack) => {
    pool.query(
      `select id,name, matricule,secretcode, date, capacity, weigth from robots`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateRobots: (data, callBack) => {
    pool.query(
      `update robots set name=?, matricule=?, secretcode=?, capacity=?, weigth=? where id = ?`,
      [
        data.name,
        data.matricule,
        data.secretcode,
        data.capacity,
        data.weigth,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteRobot: (data, callBack) => {
    pool.query(
      `delete from robots where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
