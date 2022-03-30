const router = require("express").Router();
const { checkToken } = require("../../../auth/token_validation");
const {
  createRobot,
  getRobotByRobotId,
  getRobotByMatricule,
  getRobots,
  updateRobots,
  deleteRobot,
} = require("../controller/robot.controller");
router.get("/", checkToken, getRobots);
router.get("/matricule/:matricule", checkToken, getRobotByMatricule);
router.post("/", createRobot);
router.get("/:id", checkToken, getRobotByRobotId);
router.patch("/", checkToken, updateRobots);
router.delete("/", checkToken, deleteRobot);

module.exports = router;
