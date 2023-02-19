$(document).ready(function () {
    function unliPop1() {
      $(".popout_L").removeAttr("hidden");
      $("#closeButton").click(function () {
        $(".popout_L").remove();
      });
    }

    setTimeout(unliPop1, 5000);
  });

  $(document).ready(function () {
    function unliPop2() {
      $(".popout_R").removeAttr("hidden");
      $("#closeButton2").click(function () {
        $(".popout_R").remove();
      });
    }

    setTimeout(unliPop2, 10000);
  });

  $(document).ready(function () {
    function unliPop3() {
      $("#popout_banner").removeAttr("hidden");
      $("#closeButton3").removeAttr("hidden");
      $("#closeButton3").click(function () {
        $("#popout_banner").remove();
        $("#closeButton3").remove();
      });
    }

    setTimeout(unliPop3, 15000);
  });