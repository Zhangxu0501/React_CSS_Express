var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/render', function(req, res, next) {
    res.render('react_render.ejs', {});
});

router.get("/component",function (req,res,next) {
    res.render("react_component.ejs",{});
})
router.get("/state",function (req,res,next) {
    res.render("react_state.ejs",{});

})

router.get("/event",function (req,res,next) {
    res.render("react_event.ejs",{});
})
module.exports = router;
