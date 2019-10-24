module.exports = function(app){
    app.use(require("./signup"));
    app.use(require("./login"));
    app.use(require("./contacts"));
    app.use(require("./password"));
    app.use(require("./alert"))

    // app.use(require("./forOfor"));
}