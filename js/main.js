// Thêm số vào mảng
var arr1 = [];
function themSo() {
    var addNum = document.getElementById('add-num').value;
    arr1.push(addNum);
    document.getElementById('themSo').innerHTML = arr1;
}

// Bài 1: Tính tổng số dương
function tongSoDuong() {
    var tong = tinhTongSoDuong(arr1);
    document.getElementById('tongSoDuong').innerHTML = 'Tổng số dương: ' + tong;
}

// Bài 2: Đếm số dương
function demSo() {
    var dem = demSoDuong(arr1);
    document.getElementById('demSo').innerHTML = 'Số dương: ' + dem;
}

// Bài 3: Tìm số nhỏ nhất
function soNhoNhat() {
    var min = timSoNhoNhat(arr1);
    document.getElementById('timSoNhoNhat').innerHTML = 'Số nhỏ nhất: ' + min;
}

// Bài 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
    var arrNew = themSoDuong(arr1);
    if (arrNew.length<1) {
        document.getElementById('timSoDuongNhoNhat').innerHTML = 'Không có số dương trong mảng.'
    }else {
        var res = timSoNhoNhat(arrNew);
        document.getElementById('timSoDuongNhoNhat').innerHTML = 'Số dương nhỏ nhất: ' + res;
    } 
}

// Bài 5: Tìm số chẵn cuối cùng
function soChanCuoiCung() {
    var res = timSoChanCuoiCung(arr1);
    document.getElementById('timSoChan').innerHTML = 'Số chẵn cuối cùng: ' + res;
}

// Bài 6: Đổi chỗ
function doiCho() {
    var viTri1 = document.getElementById('vi-tri-1').value;
    var viTri2 = document.getElementById('vi-tri-2').value;
    var arrNew = doiViTri(arr1, viTri1, viTri2);
    document.getElementById('doiCho').innerHTML = 'Mảng sau khi đổi: ' + arrNew;
}

// Bài 7: Sắp xếp tăng dần
function sapXep() {
    var res = sapXepTangDan(arr1);
    document.getElementById('sapXep').innerHTML = 'Mảng sau khi sắp xếp: ' + res;
}

// Bài 8: Tìm số nguyên tố đầu tiên
function soNguyenToDauTien() {
    var res = timSoNguyenToDau(arr1);
    if (res === undefined) {
        return document.getElementById('timSoNguyenTo').innerHTML = '-1';
    }
    document.getElementById('timSoNguyenTo').innerHTML = 'Số nguyên tố đầu tiên: ' + res;
}

// Bài 9: Đếm số nguyên
  //   Thêm số vào mảng mới
var arr2 = [];
function themSoMoi() {
    var add = document.getElementById('add-new-num').value;
    arr2.push(add);
    document.getElementById('themSoMoi').innerHTML = arr2; 
}
  // Đếm số nguyên
function soNguyen() {
    var res = demSoNguyen(arr2);
    document.getElementById('demSoNguyen').innerHTML = 'Số nguyên: ' + res;
}

// Bài 10: So sánh số lượng số dương và số âm
function soSanh() {
    var soAm = demSoAm(arr1);
    var soDuong = demSoDuong(arr1);
    var soSanh = document.getElementById('soSanh');
    if (soAm === soDuong) {
        soSanh.innerHTML = 'Số âm = Số dương';
    }
    if (soAm > soDuong) {
        soSanh.innerHTML = 'Số âm > Số dương';
    }
    if (soAm < soDuong) {
        soSanh.innerHTML = 'Số dương > Số âm';
    }
}