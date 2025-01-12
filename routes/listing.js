const express = require("express");
const router =  express.Router();
exports.router = router;
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const controllerListing = require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.route("/")
    .get(wrapAsync(controllerListing.index))
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(controllerListing.createListing));

//NEW
router.get("/new",isLoggedIn,(controllerListing.renderNewForm));

router.get("/search",wrapAsync(controllerListing.searchListings));

router.route("/:id")
    .get(wrapAsync(controllerListing.showListing))
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(controllerListing.updateListing))
    .delete(isLoggedIn,isOwner, wrapAsync(controllerListing.destroyListing));

// //INDEX
// router.get("/", wrapAsync(controllerListing.index));

// //SHOW
// router.get("/:id", wrapAsync(controllerListing.showListing));

// //CREATE
// router.post("/",isLoggedIn, validateListing, wrapAsync(controllerListing.createListing));

//EDIT
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(controllerListing.renderEditForm));

// //UPDATE
// router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(controllerListing.updateListing));

// //DELETE
// router.delete("/:id",isLoggedIn,isOwner, wrapAsync(controllerListing.destroyListing));

module.exports=router;