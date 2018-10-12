 $("#click").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/k20CtXkO8gs?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })


 $("#click2").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/GNodq__TAow?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })

 $("#click3").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/jPEYpryMp2s?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })

 $("#click4").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/QJuUqsFWl0A?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })