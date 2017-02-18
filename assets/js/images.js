window.addEventListener('load', function () {
  var groups = document.querySelectorAll('.image-group');
  Array.prototype.slice.call(groups).forEach(function (group) {
    var images = Array.prototype.slice.call(group.children)
      .map(function (div) {
        var image = div.children[0];
        var w = image.width;
        var h = image.height;
        var r = w / h;
        return { width: w, height: h, ratio: r };
      });

    var maxWidth = 768 - 5; // 5px margin

    var percentage = (images[0].ratio / ( images[0].ratio +  images[1].ratio)) * (maxWidth / 768);
    group.children[0].style.flexBasis = (percentage * 100) + '%';
    group.children[0].style.flexShrink = '0';
  });
});
