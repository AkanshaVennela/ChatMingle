// const express = require("express");
// const protect = require("../middleware/authMiddleware");
// const router = express.Router();
// const { accessChat, fetchChats,renameGroup,createGroupChat,
//       addToGroup ,removeFromGroup } = require("../controllers/chatControllers");


// router.route("/").post((req,res)=>{protect,accessChat });
// router.route("/").get((req,res)=>{protect, fetchChats});
// router.route("/group").post((req,res)=>{protect, createGroupChat});
// router.route("/rename").put((req,res)=>{protect, renameGroup});
// router.route("/groupremove").put((req,res)=>{protect, removeFromGroup});
// router.route("/groupadd").put((req,res)=>{protect, addToGroup});

// module.exports = router;

const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;