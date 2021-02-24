function showOrHideDiv() {
  var v = document.getElementById("show");
  var icon = document.getElementById("icon1");
  if (v.style.display === "none") {
    v.style.display = "block";
  

    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "0.5s";
    console.log("open");
  } else {
    v.style.display = "none";
    icon.style.transform = "rotate(180deg)";
  
    icon.style.transition = "0.5s";
    console.log("close");
  }
}




var header = document.getElementById("sidebarCode");
header.innerHTML = `  <!-- start -->
<div id="demo">
  <div id="one"></div>
  
<div class="lineDiv-portal pl-0 pr-1">
  <hr>
</div>
</div>
<!-- end -->
<div class="d-flex pt-4">
 
  <div><img src="Assets/icon/dashboard.png" class="img-fluid iconSize1-portal"
    alt="">
  &nbsp; &nbsp;<span>Dashboard</span>
</div>

</div>

      <!-- 2 -->
   <div class="d-flex">
   <div class="sidebar-padding-Portal"><img src="Assets/icon/calender.png" class="img-fluid iconSize1-portal"
   alt="">
 &nbsp; &nbsp;<span>Categorias</span>
</div>
<div class="iconUper">
  <i class="fa fa-angle-down angle-down" aria-hidden="true" onclick="showOrHideDiv()" id="icon1"></i>
  
</div>

   </div>
   <div id="show" >
    <!-- 3 -->
    <div class="sidebar-padding-Portal"><img src="Assets/icon/people.png" class="img-fluid iconSize1-portal"
      alt="">
    &nbsp; &nbsp;<span>Professores</span>
  </div>
  <!-- 4 -->
  <div class="sidebar-padding-Portal"><img src="Assets/icon/cap.png" class="img-fluid iconSize1-portal"
    alt="">
  &nbsp; &nbsp;<span>Alunos</span>
</div>
<!-- 5 -->
<div class="sidebar-padding-Portal"><img src="Assets/icon/message.png" class="img-fluid iconSize1-portal"
  alt="">
&nbsp; &nbsp;<span> Responsável Financeiro</span>
</div>
<div class="sidebar-padding-Portal"><img src="Assets/icon/message.png" class="img-fluid iconSize1-portal"
  alt="">
&nbsp; &nbsp;<span><a href="#!/Responsavel" class="text-dark"> Responsável</a></span>
</div>
<div class="sidebar-padding-Portal"><img src="Assets/icon/message.png" class="img-fluid iconSize1-portal"
  alt="">
&nbsp; &nbsp;<span><a href="#!/Calender_daily" class="text-dark"> CALENDER</a></span>
</div>
<!-- 6 -->

</div>`;



