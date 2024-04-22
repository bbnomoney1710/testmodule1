function findAvg(diemThi) {
    var tongDiem = 0;


    for(var i = 0; i < diemThi.length; i++) {
        tongDiem += diemThi[i];
    }


    var diemTrungBinh = tongDiem / diemThi.length;


    return diemTrungBinh;
}
var diemThi = [85, 90, 92, 88, 78];
var diemTrungBinh = findAvg(diemThi);
console.log("Điểm trung bình là: " + diemTrungBinh.toFixed(2));