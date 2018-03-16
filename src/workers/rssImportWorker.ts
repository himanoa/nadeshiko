let timer;
onmessage = function(e) {
  if (e.data.payload != undefined) {
    setTimeout(function() {
      console.log("test");
    }, 10);
    console.dir("poepoe");
  }
};
