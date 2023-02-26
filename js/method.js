// Hàm kiểm tra số dương
function kiemTraSoDuong(giaTri) {
    var output = true;
    if (giaTri <= 0) {
        output = false;
    }
    return output;
}

// Hàm kiểm tra số âm
function kiemTraSoAm(giaTri) {
    var output = true;
    if (giaTri >= 0) {
        output = false;
    } 
    return output;
}

// Hàm tính tổng số dương
function tinhTongSoDuong(arrNum) {
    var res = 0;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoDuong(Number(arrNum[i]))) {
            res += Number(arrNum[i]);
        }
    }
    return res;
}

// Hàm đếm số âm
function demSoAm(arrNum) {
    var res = 0;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoAm(Number(arrNum[i]))) {
            res += 1;
        }
    }
    return res;
}

// Hàm đếm số dương
function demSoDuong(arrNum) {
    var res = 0;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoDuong(Number(arrNum[i]))) {
            res += 1;
        }
    }
    return res;
}


// Hàm tìm số nhỏ nhất
function timSoNhoNhat(arrNum) {
    var min = Number(arrNum[0]);
    for (var i=1; i<arrNum.length; i++) {
        if (min > Number(arrNum[i])) {
            min = Number(arrNum[i]);
        }
    }
    return min;
}

// Hàm tìm số dương nhỏ nhất
function timSoDuongNhoNhat(arrNum) {
    var newArr = [];
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoDuong(arrNum[i])) {
            newArr += arrNum[i]; 
        }
        var res = timSoNhoNhat(newArr);
    }
    return res;
}

// Hàm kiểm tra số chẵn
function kiemTraSoChan(giaTri) {
    var output = true;
    if (giaTri % 2 !== 0) {
        output = false;
    }
    return output;
}


// Hàm tìm số chẵn cuối cùng
function timSoChanCuoiCung(arrNum) {
    var res;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoChan(arrNum[i])) {
            res = arrNum[i];
        }
    }
    return res;
}

// Hàm đổi vị trí
function doiViTri(arrNum, viTri1, viTri2) {
    var temp = arrNum[viTri1];
    arrNum[viTri1] = arrNum[viTri2];
    arrNum[viTri2] = temp;
    return arrNum;
}

// Hàm sắp xếp tăng dần
function sapXepTangDan(arrNum) {
    for (var i=0; i < arrNum.length - 1; i++) {
        for (var j=i+1; j<arrNum.length; j++) {
            if (Number(arrNum[j]) < Number(arrNum[i])) {
                var temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp;
            }
        }
    }
    return arrNum;
}

// Hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(giaTri) {
    var output = true;
    var dem = 0;
    for (var uoc=1; uoc<=giaTri; uoc++) {
        if (giaTri % uoc === 0) {
            dem += 1;
        }
    }
    if (dem !== 2) {
        output = false;
    }
    return output;
}

// Hàm tìm số nguyên tố đầu tiên
function timSoNguyenToDau(arrNum) {
    var res;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoNguyenTo(arrNum[i])) {
            res = arrNum[i];
            break;
        }
    }
    return res;
}

// Hàm kiểm tra số nguyên
function kiemTraSoNguyen(giaTri) {
    var output = true;
    if (Math.ceil(giaTri) !== Math.floor(giaTri)) {
        output = false;
    }
    return output;
}

// Hàm đếm số nguyên
function demSoNguyen(arrNum) {
    var dem = 0;
    for (var i=0; i<arrNum.length; i++) {
        if (kiemTraSoNguyen(arrNum[i])) {
            dem += 1;
        }
    }
    return dem;
}


