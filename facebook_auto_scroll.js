var count = 0;
let autoScrollHandler = function () {
  let element = document.documentElement;
  let bottom = element.scrollHeight - element.clientHeight;
  console.log(count++);
  window.scroll(0, bottom);
}
var id = setInterval(function () {
  autoScrollHandler()

  // スクロールしたい回数に変更してください
  const scrolls = 100

  if (count > scrolls) {
    clearInterval(id);
  }
}, 300);
