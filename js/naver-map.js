var HOME_PATH = window.HOME_PATH || '.';

    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.564311, 126.975134), //지도의 초기 중심 좌표
        zoom: 6, //지도의 초기 줌 레벨
        minZoom: 1, //지도의 최소 줌 레벨
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: { //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT,
            style: naver.maps.ZoomControlStyle.SMALL
        }
    });

// 강남구
var gangnam = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.517744, 127.047369),
    map: map
});

// 강남대로
var gangnamdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.482103, 127.036503),
    map: map
});

// 강동구
var gangdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.545172, 127.136777),
    map: map
});

// 강변북로
var gangbyeonbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.539085, 127.041594),
    map: map
});

// 강북구
var gangbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.638132, 127.028808),
    map: map
});

// 강서구
var gangseo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.544884, 126.835211),
    map: map
});

// 공항대로
var gonghangdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.559971, 126.824807),
    map: map
});

// 관악구
var gwanak = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.488344, 126.926973),
    map: map
});

// 광진구
var gwangjin = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.545342, 127.09324),
    map: map
});

// 구로구
var guro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.498494, 126.890162),
    map: map
});

// 금천구
var geumcheon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.452651, 126.908178),
    map: map
});

// 노원구
var nowon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.659687, 127.068793),
    map: map
});

// 도봉구
var dobong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.654425, 127.029001),
    map: map
});

// 도산대로
var dosandae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.51613, 127.020031),
    map: map
});

// 동대문구
var dongdaemun = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.575749, 127.029031),
    map: map
});

// 동작구
var dongjak = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.481172, 126.971622),
    map: map
});

// 동작대로 중앙차로
var dongjagdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.485724, 126.982094),
    map: map
});

// 마포구
var mapo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.549971, 126.945522),
    map: map
});

// 서대문구
var seodaemun = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.576913, 126.937845),
    map: map
});

// 서초구
var seocho = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.504551, 126.994508),
    map: map
});

// 성동구
var seongdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.543065, 127.041096),
    map: map
});

// 성북구
var seongbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.60667, 127.027297),
    map: map
});

// 송파구
var songpa = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.521138, 127.121436),
    map: map
});

// 신촌로
var sinchon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.554958, 126.936276),
    map: map
});

// 양천구
var yangcheon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.523364, 126.858704),
    map: map
});

// 영등포구
var yeongdungpo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.524955, 126.897329),
    map: map
});

// 영등포로
var yeongdungporo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.519336, 126.904656),
    map: map
});

// 용산구
var yongsan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.54005, 127.004839),
    map: map
});

// 은평구
var eunpyeong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.60984, 126.934837),
    map: map
});

// 정릉로
var jeongnung = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.606726, 127.004857),
    map: map
});

// 종로
var jongro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.571427, 126.995675),
    map: map
});

// 종로구
var jongrogu = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.572003, 127.005007),
    map: map
});

// 중구
var junggu = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.564311, 126.975134),
    map: map
});

// 중랑구
var jungnang = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.584892, 127.093979),
    map: map
});

// 천호대로
var cheonhodae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.534424, 127.139375),
    map: map
});

// 청계천로
var cheongyechan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.568618, 126.998059),
    map: map
});

// 한강대로
var hangangdae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.549047, 126.970455),
    map: map
});

// 홍릉로
var hongneung = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.580416, 127.044754),
    map: map
});

// 화랑로
var hwarangro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.617288, 127.075255),
    map: map
});

map.setMapTypeId(naver.maps.MapTypeId.HYBRID);

var gangnamContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강남구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강남구 학동로 426 강남구청 별관 1동</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangnam.png">',
        '       </div>',
        '   </div>'
    ].join('');


var infowindow = new naver.maps.InfoWindow({
    content: gangnamContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangnam, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, gangnam);
    }
});

var gangnamdaeroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강남대로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>서초구 강남대로 201 서초구민회관 앞 중앙차로</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangnamdaero.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow2 = new naver.maps.InfoWindow({
    content: gangnamdaeroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangnamdaero, "click", function(e) {
    if (infowindow2.getMap()) {
        infowindow2.close();
    } else {
        infowindow2.open(map, gangnamdaero);
    }
});

var gangdongContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강동구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강동구 구천면로 42길 59 천호1동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangdong.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow3 = new naver.maps.InfoWindow({
    content: gangdongContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangdong, "click", function(e) {
    if (infowindow3.getMap()) {
        infowindow3.close();
    } else {
        infowindow3.open(map, gangdong);
    }
});

var gangbyeonbokContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강변북로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>성동구 강변북로 257 한강사업본부 옆</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangbyeonbok.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow4 = new naver.maps.InfoWindow({
    content: gangbyeonbokContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangbyeonbok, "click", function(e) {
    if (infowindow4.getMap()) {
        infowindow4.close();
    } else {
        infowindow4.open(map, gangbyeonbok);
    }
});

var gangbokContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강북구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강북구 덕릉로41길 74 번1동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangbok.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow5 = new naver.maps.InfoWindow({
    content: gangbokContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangbok, "click", function(e) {
    if (infowindow5.getMap()) {
        infowindow5.close();
    } else {
        infowindow5.open(map, gangbok);
    }
});

var gangseoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강서구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강서로45다길 71 화곡3동 푸른들청소년도서관</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangseo.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow6 = new naver.maps.InfoWindow({
    content: gangseoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangseo, "click", function(e) {
    if (infowindow6.getMap()) {
        infowindow6.close();
    } else {
        infowindow6.open(map, gangseo);
    }
});

var gonghangdaeroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">공항대로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강서구 마곡동 727-1091 마곡역 중앙차로정류장 옆</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gonghangdaero.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow7 = new naver.maps.InfoWindow({
    content: gonghangdaeroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gonghangdaero, "click", function(e) {
    if (infowindow7.getMap()) {
        infowindow7.close();
    } else {
        infowindow7.open(map, gonghangdaero);
    }
});

var gwanakContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">관악구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>관악구 신림동길 14 신림동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gwanak.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow8 = new naver.maps.InfoWindow({
    content: gwanakContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gwanak, "click", function(e) {
    if (infowindow8.getMap()) {
        infowindow8.close();
    } else {
        infowindow8.open(map, gwanak);
    }
});

var gwangjinContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">광진구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>광진구 광나루로 571 구의아리수정수센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gwangjin.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow9 = new naver.maps.InfoWindow({
    content: gwangjinContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gwangjin, "click", function(e) {
    if (infowindow9.getMap()) {
        infowindow9.close();
    } else {
        infowindow9.open(map, gwangjin);
    }
});

var guroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">구로구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>구로구 가마산로 27길 45 (구로고등학교)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/guro.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow10 = new naver.maps.InfoWindow({
    content: guroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(guro, "click", function(e) {
    if (infowindow10.getMap()) {
        infowindow10.close();
    } else {
        infowindow10.open(map, guro);
    }
});

var geumcheonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">금천구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>구로구 가마산로 27길 45 (구로고등학교)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/geumcheon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow11 = new naver.maps.InfoWindow({
    content: geumcheonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(geumcheon, "click", function(e) {
    if (infowindow11.getMap()) {
        infowindow11.close();
    } else {
        infowindow11.open(map, geumcheon);
    }
});

var nowonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">노원구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>노원구 상계로 118 상계2동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/nowon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow12 = new naver.maps.InfoWindow({
    content: nowonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(nowon, "click", function(e) {
    if (infowindow12.getMap()) {
        infowindow12.close();
    } else {
        infowindow12.open(map, nowon);
    }
});

// 지도 인터랙션 옵션
$("#interaction").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("draggable")) {
        map.setOptions({ //지도 인터랙션 끄기
            draggable: false,
            pinchZoom: false,
            scrollWheel: false,
            keyboardShortcuts: false,
            disableDoubleTapZoom: true,
            disableDoubleClickZoom: true,
            disableTwoFingerTapZoom: true
        });

        $(this).removeClass("control-on");
    } else {
        map.setOptions({ //지도 인터랙션 켜기
            draggable: true,
            pinchZoom: true,
            scrollWheel: true,
            keyboardShortcuts: true,
            disableDoubleTapZoom: false,
            disableDoubleClickZoom: false,
            disableTwoFingerTapZoom: false
        });

        $(this).addClass("control-on");
    }
});

// 관성 드래깅 옵션
$("#kinetic").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("disableKineticPan")) {
        map.setOptions("disableKineticPan", false); //관성 드래깅 켜기
        $(this).addClass("control-on");
    } else {
        map.setOptions("disableKineticPan", true); //관성 드래깅 끄기
        $(this).removeClass("control-on");
    }
});

// 타일 fadeIn 효과
$("#tile-transition").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("tileTransition")) {
        map.setOptions("tileTransition", false); //타일 fadeIn 효과 끄기

        $(this).removeClass("control-on");
    } else {
        map.setOptions("tileTransition", true); //타일 fadeIn 효과 켜기
        $(this).addClass("control-on");
    }
});

// min/max 줌 레벨
$("#min-max-zoom").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("minZoom") === 10) {
        map.setOptions({
            minZoom: 1,
            maxZoom: 14
        });
        $(this).val(this.name + ': 1 ~ 14');
    } else {
        map.setOptions({
            minZoom: 10,
            maxZoom: 12
        });
        $(this).val(this.name + ': 10 ~ 12');
    }
});

//지도 컨트롤
$("#controls").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("scaleControl")) {
        map.setOptions({ //모든 지도 컨트롤 숨기기
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            zoomControl: false,
            mapTypeControl: false
        });
        $(this).removeClass('control-on');
    } else {
        map.setOptions({ //모든 지도 컨트롤 보이기
            scaleControl: true,
            logoControl: true,
            mapDataControl: true,
            zoomControl: true,
            mapTypeControl: true
        });
        $(this).addClass('control-on');
    }
});

$("#interaction, #tile-transition, #controls").addClass("control-on");