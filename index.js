/* inphut: nhập điểm các môn dự thi. 
điểm chuẩn của trường. 
đối tượng được cộng điểm */
//các bước xử lý:
//lấy dử liệu điểm các môn 

//xem đối tượng được cộng điểm hay không?
const A = "a";
const B = "b";
const C = "c";


function khuVucCongDiem(khuVuc){
    switch (khuVuc) {
        case A: {
            return 2;
        }
        case B: {
            return 1;
        }
        case C: {
            return 0.5;
        }
    }
}
const MOT = "mot";
const HAI = "hai";
const BA = "ba";

function doiTuongCongDiem(doiTuong){
    switch (doiTuong) {
        case MOT: {
            return 2.5;
        }
        case HAI: {
            return 1.5;
        }
        case BA: {
            return 1;
        }
    }
}

function tinhKetQua (){
var khuVuc = document.getElementById("khuVuc").value;
var doiTuong = document.getElementById("doiTuong").value;
// diểm chuẩn
var diemChuan = document.getElementById("diemChuan").value * 1;
// Điểm 1
var diemMon1 = document.getElementById("diem1").value * 1;
// Điểm 2
var diemMon2 = document.getElementById("diem2").value * 1;
// Điểm 3
var diemMon3 = document.getElementById("diem3").value * 1;
var tongDiemCacMon = 0
tongDiemCacMon = diemMon1 + diemMon2 + diemMon3;
console.log(tongDiemCacMon);
var diemUuTien1 = khuVucCongDiem(khuVuc);

//Tính điểm và so sanh với điểm chuẩn để đưa ra kết quả
var diemUuTien2 = doiTuongCongDiem(doiTuong);
var diemUuTien = diemUuTien1 + diemUuTien2;
console.log(diemUuTien);
var tongDiem = 0;
tongDiem = diemUuTien + tongDiemCacMon;
 if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) { 
    document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Do có điểm 0";
 }
 else if (tongDiem < diemChuan) {
    document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Cố gắng nhé. Tổng Điểm:"+ " " + tongDiem;
 }
 else
 {document.getElementById("ketQua").innerHTML = "Bạn đã Đạt. Tổng Điểm:" + tongDiem;}
}
//output: tính kết quả và trẩ về xem có đạt điểm chuẩn không?
// Bài 2: Tính tiền điện:
/* input: 
*số điện sử dụng. 
*giá tiền ứng với số kw sử dụng
*họ tên người dùng
*/
// xử lý:
function tinhTienDien () {
    var soDien = document.getElementById("dienSuDung").value * 1;
    var hoVaTen = document.getElementById("hoTen").value;
    var tienSuDung = 0;
    if (soDien <= 50){
        tienSuDung = soDien * 500;
    }
    else if (soDien <= 100) {
        tienSuDung = soDien * 650;
    }
    else if (soDien <= 200) {
        tienSuDung = soDien * 850;
    }
    else if (soDien <= 350){
        tienSuDung = soDien * 1100;
    }
    else 
    {
        tienSuDung = soDien *1300;
    }

    document.getElementById("tinhTien").innerHTML = hoVaTen + ". " + " Tiền điện sử dụng là: " + new Intl.NumberFormat("vn-VN").format(tienSuDung) + " " + "VNĐ";
}

//output: xuất ra sô tiền sử dụng điện tương ứng.

// =========Bài 3================
/* input: Tổng số thu nhập
họ và tên
+ Số người phụ thuộc * 1tr6
 */
// Bước xử lý:
// gọi ra các biến cần thiết.
function tinhTienThueThuNhapCaNhan(){
    var tongThuNhap = document.getElementById ("thuNhap").value * 1; 
    var nguoiDongThue = document.getElementById("ten").value;
    var soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    var thuNhapDongThue = 0;
    thuNhapDongThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    console.log( thuNhapDongThue);
if (tongThuNhap <= soNguoiPhuThuoc * 1600000) {
    alert ("Tổng thu nhập không đóng thuế");
};
    var tienDongThue = 0;
    
    if (thuNhapDongThue <= 60000000){
        tienDongThue = thuNhapDongThue * 0.05;
    }
    else if (thuNhapDongThue <= 120000000){
        tienDongThue = thuNhapDongThue * 0.1;
    }
    else if (thuNhapDongThue <= 210000000){
        tienDongThue = thuNhapDongThue * 0.15;
    }
    else if (thuNhapDongThue <= 384000000){
        tienDongThue = thuNhapDongThue * 0.2;
    }
    else if (thuNhapDongThue <= 624000000){
        tienDongThue = thuNhapDongThue * 0.25;
        }
    else if (thuNhapDongThue <= 960000000){
      tienDongThue = thuNhapDongThue * 0.3;
     }
    else { tienDongThue = thuNhapDongThue * 0.35; } 
    document.getElementById("tinhTienThue").innerHTML = nguoiDongThue + ". " + " Tiền thuế phải đóng là: " + new Intl.NumberFormat("vn-VN").format(tienDongThue) + " " + "VNĐ";

}
// ========Bài 4===========
const CANHAN = "canhan";
const DOANHNGHIEP = "doanhnghiep";
function myFunction() {
    var x = document.getElementById("loaiKhachHang").value;
   if (x == DOANHNGHIEP ) {document.getElementById("ketNoi").style.display = "block" ; }
    else {document.getElementById("ketNoi").style.display = "none" ; }
   console.log(x);
  }
//   input: cho loại khách hàng, số kênh cao cấp thuê. và số kết nối đối với loại hình doanh nghiệp.
// Xử lý:
function giaTienCaptu1den10(){}
  function tinhTienCapSuDung(){
    var khachHangSuDung = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var tongTienCap = 0
    if (khachHangSuDung == CANHAN){
        tongTienCap = 4.5 + 20.5 + kenhCaoCap * 7.5;
        
    }
    else if (khachHangSuDung == DOANHNGHIEP && soKetNoi > 10){
        tongTienCap = 15 + (75 + (soKetNoi-10) * 5) +  kenhCaoCap * 50;
    }
    else {
        tongTienCap = 15 + 75  + kenhCaoCap * 50;
    }
document.getElementById("tinhTienCap").innerHTML =  "Mã khách hàng: "+ maKhachHang + ";  Tiền cáp: "+ "$"  + new Intl.NumberFormat("vn-VN").format(tongTienCap) ;
  }
//   Xuất ra tiền cáp ứng với tưng loại hình khách hàng
