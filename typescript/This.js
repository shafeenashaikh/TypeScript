var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
    }
};
employee.greet();
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        var self = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
