// "use strict"
// /* -------------------------------------------------------
//     EXPRESS - Personnel API
// ------------------------------------------------------- */
// const router = require('express').Router()
// const token=require("../controllers/token")
// /* ------------------------------------------------------- */

// router.route("/").get(token.list).post(token.create)

// router.route("/:id")
// .get(token.read)
// .put(token.update)
// .patch(token.update)
// .delete(token.delete)


// /* ------------------------------------------------------ */
// module.exports = router

"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// const router = require('express').Router()
// const {list,create,update,deletee,read}=require("../controllers/token")
// /* ------------------------------------------------------- */

// router.route("/").get(list).post(create)

// router.route("/:id")
// .get(read)
// .put(update)
// .patch(update)
// .delete(deletee)


// /* ------------------------------------------------------ */
// module.exports = router
// const router = require('express').Router()
// const {list,create,update,deletee,read}=require("../controllers/token")
// const {isAdmin} = require("../middlewares/permissions")
// /* ------------------------------------------------------- */

// router.route("/").get(isAdmin, list).post(isAdmin, create)

// router.route("/:id")
// .get(isAdmin, read)
// .put(isAdmin, update)
// .patch(isAdmin, update)
// .delete(isAdmin, deletee)


// /* ------------------------------------------------------ */
// module.exports = router


const router = require('express').Router()
const {list,create,update,deletee,read}=require("../controllers/token")
const {isAdmin} = require("../middlewares/permissions")
/* ------------------------------------------------------- */
router.use(isAdmin)
router.route("/").get(list).post(create)

router.route("/:id")
.get(read)
.put(update)
.patch(update)
.delete(deletee)


/* ------------------------------------------------------ */
module.exports = router