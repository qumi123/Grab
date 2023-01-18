document.getElementById("tinh-tien").onclick=function payment() {
    var tagName = document.getElementsByTagName("input");
    var car = document.getElementById("grabCar");
    var suv = document.getElementById("grabSUV");
    var black = document.getElementById("grabBlack");
    var distance = document.getElementById("distance").value;
    var waiting_time = document.getElementById("waiting-time").value;
    var type;
    var price_1;
    var price_2;
    var price_3;
    var waiting_fee;
    if (!car.checked && !suv.checked && !black.checked) {
      alert("Please select a grab type");
      return;
    } else if (car.checked) {
      type = car.value;
      price_1 = 8000;
      price_2 = 12000;
      price_3 = 10000;
      waiting_fee = 2000;
    } else if (suv.checked) {
      type = suv.value;
      price_1 = 9000;
      price_2 = 14000;
      price_3 = 12000;
      waiting_fee = 3000;
    } else if (black.checked) {
      type = black.value;
      price_1 = 10000;
      price_2 = 16000;
      price_3 = 14000;
      waiting_fee = 4000;
    }
    if (distance == "" || waiting_time == "") {
      alert("Please input distance and waiting time");
      return;
    }
    if (isNaN(distance) || isNaN(waiting_time)) {
      alert("Invalid: distance and waiting time must be a number");
      return;
    }
    document.getElementById("divThanhTien").style.display = "block";
    waiting_time = parseInt(waiting_time);
    distance = parseInt(distance);
    if (distance <= 0 && waiting_time <= 0) {
      alert("Invalid: distance and waiting time must be positive");
      return;
    }
    var total = price_1 + waiting_time * waiting_fee;
    var td = document.getElementsByTagName("td");
    td[0].innerHTML = type;
    td[1].innerHTML = 1 + " km";
    td[2].innerHTML = price_1;
    td[3].innerHTML = price_1;
    if (distance == 1) {
      td[4].innerHTML = null;
      td[5].innerHTML = null;
      td[6].innerHTML = null;
      td[7].innerHTML = null;
      td[8].innerHTML = null;
      td[9].innerHTML = null;
      td[10].innerHTML = null;
      td[11].innerHTML = null;
    }
    if (distance > 1 && distance <= 20) {
      total += (distance - 1) * price_2;
      td[4].innerHTML = type;
      td[5].innerHTML = distance - 1 + " km";
      td[6].innerHTML = price_2;
      td[7].innerHTML = price_2 * (distance - 1);
      td[8].innerHTML = null;
      td[9].innerHTML = null;
      td[10].innerHTML = null;
      td[11].innerHTML = null;
    }
    if (distance > 20) {
      total += 19 * price_2 + (distance - 20) * price_3;
      td[4].innerHTML = type;
      td[5].innerHTML = 19 + " km";
      td[6].innerHTML = price_2;
      td[7].innerHTML = price_2 * 19;
      td[8].innerHTML = type;
      td[9].innerHTML = distance - 20 + " km";
      td[10].innerHTML = price_3;
      td[11].innerHTML = price_3 * (distance - 20);
    }
    td[12].innerHTML = "Thời gian chờ";
    td[13].innerHTML = waiting_time + " phút";
    td[14].innerHTML = waiting_fee;
    td[15].innerHTML = waiting_fee * waiting_time;
    td[16].innerHTML = "Total";
    td[19].innerHTML = total;
    document.getElementById("xuatTien").innerHTML = total;
  }
