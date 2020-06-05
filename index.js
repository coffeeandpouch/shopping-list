  $(function() {
    $('#js-shopping-list-form').submit(function (event){
      event.preventDefault();
      addItem($("#shopping-list-entry").val());
      this.reset();
    }); 

  function addItem(itemValue) {
   $(".shopping-list").append(
    '<li>' +
      '<span class="shopping-item">'+itemValue+'</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        ' ' + 
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>'
   );
  }

  function deleteItem(){
    $(this).closest('li').remove();
  }

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
