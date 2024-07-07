
(function (w) {
    w.addEventListener("load", function () {
      const btn_left = document.getElementById("btn-left"),
        btn_right = document.getElementById("btn-right"),
        content = document.getElementById("con");
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right.addEventListener("click", () => {
        content_scoll_left -= 300;
        if (content_scoll_left >= content_scroll_width) {
          content_scoll_left = content_scroll_width;
        }
        content.scrollLeft = content_scoll_left;
      });
      btn_left.addEventListener("click", () => {
        content_scoll_left += 1;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  })(window);
  
  (function (w) {
    w.addEventListener("load", function () {
      const btn_left1 = document.getElementById("btn-left1"),
        btn_right1 = document.getElementById("btn-right1"),
        content = document.getElementById("con1");
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right1.addEventListener("click", () => {
        content_scoll_left -= 300;
        if (content_scoll_left >= content_scroll_width) {
          content_scoll_left = content_scroll_width;
        }
        content.scrollLeft = content_scoll_left;
      });
      btn_left1.addEventListener("click", () => {
        content_scoll_left += 1;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  })(window);
  (function (w) {
    w.addEventListener("load", function () {
      const btn_left2 = document.getElementById("btn-left2"),
        btn_right2 = document.getElementById("btn-right2"),
        content = document.getElementById("con2");
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right2.addEventListener("click", () => {
        content_scoll_left -= 300;
        if (content_scoll_left >= content_scroll_width) {
          content_scoll_left = content_scroll_width;
        }
        content.scrollLeft = content_scoll_left;
      });
      btn_left2.addEventListener("click", () => {
        content_scoll_left += 1;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  })(window);
  (function (w) {
    w.addEventListener("load", function () {
      const btn_left3 = document.getElementById("btn-left3"),
        btn_right3 = document.getElementById("btn-right3"),
        content = document.getElementById("con3");
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right3.addEventListener("click", () => {
        content_scoll_left -= 300;
        if (content_scoll_left >= content_scroll_width) {
          content_scoll_left = content_scroll_width;
        }
        content.scrollLeft = content_scoll_left;
      });
      btn_left3.addEventListener("click", () => {
        content_scoll_left += 1;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  })(window);
  (function (w) {
    w.addEventListener("load", function () {
      const btn_left4 = document.getElementById("btn-left4"),
        btn_right4 = document.getElementById("btn-right4"),
        content = document.getElementById("con4");
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right4.addEventListener("click", () => {
        content_scoll_left -= 300;
        if (content_scoll_left >= content_scroll_width) {
          content_scoll_left = content_scroll_width;
        }
        content.scrollLeft = content_scoll_left;
      });
      btn_left4.addEventListener("click", () => {
        content_scoll_left += 1;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  })(window);
  let today = new Date().toLocaleDateString();
  let jalalitoday= new Date().toLocaleDateString('fa-IR');
  document.getElementById("today").innerHTML = jalalitoday;
  document.getElementById("today2").innerHTML = jalalitoday;


  function moood() {
    document.querySelector('div.modal-user');
  }

 


  // home 2

  