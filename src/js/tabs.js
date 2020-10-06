const findBlockByAlias = alias => {
  return $(".reviews__content-info").filter((ndx, item) => {
    return $(item).attr("data-content") == alias;
  });
};

$(".reviews__nav-button").click(e => {
  e.preventDefault();
  
  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".reviews__nav-elem");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");

});