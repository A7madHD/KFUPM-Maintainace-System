var service;
var user;
var schServ;
var schServices = [];
class scheduledS {
    constructor(name, date, time) {
        this.name = name;
        this.date = date;
        this.time = time;
    }
}
function Logout() {
    window.location = 'index.html';
}

function refresh() {
    document.location.reload()
}

function login() {
    var x = $("#kfupmId2").val();
    if (checkId(x)) {
        alert("Loged in!")
        user = x.substring(0, 1);
        console.log(user);
        if (user === "s") {
            window.location = 'stuPage.html';
        } else if (user === "a") {
            window.location = 'adminPage.html';
        } else {
            window.location = 'techPage.html';
        }
    } else {
        alert("Please write your id correctly")
    }
}

function register() {
    var x = $("#kfupmId").val();
    if (checkId(x)) {
        alert("Signed up!")
        user = x.substring(0, 1);
        console.log(user === "s");
        if (user === "s") {
            window.location = 'stuPage.html';
        } else if (user === "a") {
            window.location = 'adminPage.html';
        } else {
            window.location = 'techPage.html';
        }
    } else {
        alert("Please write your id correctly")
    }
}
function checkId(x) {
    var reg = /^(s|a|t)[0-9]\w+/g
    return reg.test(x);
}

function addStaff() {
    var reg = /^(s|a|t)*[0-9]\w+/g
    var x = $("#kfupmId").val();
    if (x.substring(0, 1) === 't') {
        alert("new staff has been added!");
        refresh();
    } else {
        alert("please check the staff KFUPM ID again");
    }

}

function requestS(x) {
    var ser = $(x).siblings('h1').text();
    if (confirm("are you sure you want to request [" + ser + "] service?")) {
        alert("the service [" + ser + "] has been requested!")
        refresh();
    }
}

function cancle() {
    if (confirm("are you sure you want to cancle [" + service + "] service?")) {
        alert("the service [" + service + "] has been cancled!")
        refresh();
    }
}

function deleteStaff(x) {
    var staf = $(x).text();
    if (confirm("are you sure you want to delete " + staf + " from the Database?")) {
        alert("the staff " + staf + " has been deleted!")
        refresh();
    }
}

function assignS(x) {
    var staf = $(x).text();
    if (confirm("are you sure you want to assign [" + staf + "] to the service " + service + " ?")) {
        alert("the service [" + service + "] has been assigned to " + staf + " !")
        refresh();
    }
}

function pendingS(x, y) {
    service = $(x).text();
    user = y;
    console.log(user);
    if (user == 's') {
        $('#track').show().siblings('div').hide();
    } else if (user == 'a') {
        $("#assignStaff").show().siblings("div").hide();

    } else if (user == 't') {
        $("#sechduleS").show().siblings("div").hide();
    }
}
function sechduleS() {
    var date = $('#date').val();
    var time = $('#time').val();
    if (!date || !time) {
        alert("please check the time and date");
    } else {
        alert("it has been scheduled");
        schServ = new scheduledS(service, date, time);
        schServices.push(schServ);
        console.log(schServices)

    }
}
function choosedS(x) {
    var n = $(x).text();
    console.log(schServices);
    var sN = schServ.name;
    var y = schServices.find(serv1 => serv1.name === n);
    $("#ServN").text(y.name);
    $("#date1").text(y.date);
    $("#time1").text(y.time);
}
function deleteServ(x) {
    var serv = $(x).text();
    if (confirm("are you sure you want to delete " + serv + " from the Database?")) {
        alert("the service " + serv + " has been deleted!")
        refresh();
    }
}

function addService(x) {
    var serv = $('#title').text();
    if (confirm("are you sure you want to add " + serv + " to the Database?")) {
        alert("the service " + serv + " has been added!")
        refresh();
    }
}

function updateServ(x) {
    var serv = $(x).text();
    if (confirm("are you sure you want to update " + serv + " in the Database?")) {
        alert("the service " + serv + " has been updated!")
        window.location = 'adminPage.html';
    }
}

function updateS(x) {
    alert("Your profile has been updated!")
    window.location = 'stuPage.html';
}
function feedback() {
    var comment = $("#textarea").val();
    if (!comment) {
        alert("please add a comment in the text area");
    } else {
        alert('Your comment has been sent!');
        window.location = 'stuPage.html';
    }
}

function searchU() {
    var selectedQ = $("input[name='buttons']:checked").val();
    if (selectedQ == "byID") {
        searchByID($("#searchUser").val());
    } else if (selectedQ == "byN") {
        searchByName($("#searchUser").val());
    }
}
function searchByID(x) {
    alert("searching for a user with the ID " + x);
}
function searchByName(x) {
    alert("searching for a user with the name " + x);
}

function closeS(){
    var nameofS = $("#ServN").text();
    var dateofS = $("#date1").text();
    var timeofS = $("#time1").text();
    var tempS = new scheduledS(nameofS,dateofS,timeofS);
    var y = schServices.find(serv1 => serv1.name === nameofS);
    console.log(y);
    schServices = remove(schServices,y);
    console.log(schServices[0]);
    alert("it hase been closed!");
}

function remove(array, element) {
    return array.filter(el => el !== element);
  }