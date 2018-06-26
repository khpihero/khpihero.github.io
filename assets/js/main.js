window.api = 'http://0.0.0.0:3569/';

$('document').ready(function() {
  $.get('data/departments.json', function (departments) {

    var institutes = $('#institute');
    var cathedras = $('#cathedra');

    for (department in departments) {

      institutes.append($("<option/>", {
        value: department,
        text: department
      }));

      departments[department].forEach(function (cathedra, i, all) {
        console.log(all, cathedra);
        cathedras.append($("<option/>", {
          value: cathedra,
          text: cathedra
        }));

      });

    }

    institutes.change(function (e) {
      $('#cathedra :not(:disabled)').remove();
      var selected = $('#institute option:selected')[0].textContent;
      console.log(selected);
      departments[selected].forEach(function (cathedra, i, all) {
        console.log(all, cathedra);
        cathedras.append($("<option/>", {
          value: cathedra,
          text: cathedra
        }));
      });
    });
  });
});
