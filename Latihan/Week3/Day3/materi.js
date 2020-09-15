// callback
const userProfile = function (id, callback) {
    if (!id) {
        return callback(new Error("Invalid UserId"));
    } // bisa tanpa else ?? bisa 
    let result = {
        success: true,
        id: id,
        message: "User Found"
    }
    return callback(null, result);
}

userProfile(null, function (err, result) {
    if (err) {
        console.log("Tidak ada id, harap dicek lagi");
    } else {
        console.log(result);
    }
});

userProfile(10, function (err, result) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(result);
    }
});