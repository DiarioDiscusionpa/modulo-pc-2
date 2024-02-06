
$.ajax({
    url:"http://127.0.0.1:8000/api/PCs",
    type: "GET",
    contentType: "application/json ; charset=utf8",
    dataType:"json",
    success: function(response){
      var tabla 
      = $('#myTable > tbody:last-child')
  
      console.log(response)
  
      response.forEach(PCs => {
        var id_PC = PCs.id_PC;
        var tipo_PC = PCs.tipo_PC;
        var Descripcion_PC = PCs.Descripcion_PC;
        var Estado_PC = PCs.estado_PC;
        var Mouse_PC = PCs.Mouse_PC;
        var Monitor_PC = PCs.Monitor_PC;
        var Teclado_PC = PCs.Teclado_PC;
        var Ram_PC = PCs.Ram_PC;
        var Grafica_PC = PCs.Grafica_PC;
        var TipoRAM_PC = PCs.TipoRAM_PC;
        var PlacaBase_PC = PCs.PlacaBase_PC;
        var adaptadorRed_PC = PCs.adaptadorRed_PC;
        var Procesador_PC = PCs.Procesador_PC;
        var FuentePoder_PC = PCs.FuentePoder_PC;
        var fila = '<tr class="fila">' + '<td class="id">' + id_PC + '</td>' + '<td>' + tipo_PC + '</td>' + '<td>' + Descripcion_PC + '</td>' + '<td>' + Mouse_PC + '</td>' + '<td>' + Monitor_PC + '</td>' + '<td>' + Teclado_PC + '</td>' + '<td>' + Estado_PC + '</td>' + '<td>' + Ram_PC + '</td>' + '<td>' + Grafica_PC + '</td>' + '<td>' + TipoRAM_PC + '</td>' + '<td>' + PlacaBase_PC + '</td>' + '<td>' + adaptadorRed_PC + '</td>' + '<td>' + Procesador_PC + '</td>' + '<td>' + FuentePoder_PC + '</td>'
      })
    }
  })
  
  function btnVer(){
    var button = event.target
    var row = button.closest('tr')
    var idElement = row.querySelector('.id')
    var id = idElement.textContent;
  
    
    $.ajax({
      url: `http://127.0.0.1:8000/api/PC/${id}`,
      type: "GET",
      contentType: "application/json ; charset=utf8",
      dataType: "json",
      success: (response) => {
        console.log(response)
        $('#tituloModal').html(response.nombre_PC);
        $('#contenidoModal').html(`Tipo: ${response.tipo_PC}\n <br> tipoPC:  ${response.tipoPC_PC}\n <br> Descripcion: ${response.Descripcion_PC}\n <br> mouse: ${response.Mouse_PC}\n <br> monitor: ${response.Monitor_PC}\n <br> teclado: ${response.Teclado_PC}\n <br> estado: ${response.Estado_PC}\n <br> Ram: ${response.Ram_PC}\n <br> grafica: ${response.Grafica_PC}\n <br> tipoRam: ${response.TipoRAM_PC}\n <br> placabase: ${response.PlacaBase_PC}\n <br> adaptadorRed: ${response.adaptadorRed_PC}\n <br> procesador: ${response.Procesador_PC}\n <br> FuentePoder: ${response.FuentePoder_PC}\n `);
        $('#exampleModal').modal('show');
      }
    });
  }
  
  function btnBorrar(){
    var button = event.target
    var row = button.closest('tr')
    var idElement = row.querySelector('.id')
    var id = idElement.textContent;
  
    var datos = {
      "id":id
    }
    
    $.ajax({
      url: `http://127.0.0.1:8000/api/PC/${id}`,
      type: "DELETE",
      data: JSON.stringify(datos),
      contentType: "application/json ; charset=utf8",
      dataType: "json",
      success: (response) => {
        location.reload()
      }
    });
  }
  
  function btnEditarModal(){
    var button = event.target
    var row = button.closest('tr')
    var idElement = row.querySelector('.id')
    var id = idElement.textContent;
    $('#modalEditar').modal('show')
    $('#editarBtn').click(() => {
      var TipoPC = $('#tipoPCValEd').val()
      var datos = {
        "id":id,
        "tipopc":tipopc, 
        "descripcion":descripcion,
        "mouse":mouse,
        "monitor":monitor,
        "teclado":teclado,
        "estado":estado,
        "Ram":Ram,
        "grafica":grafica,
        "tipoRAM":tipoRAM,
        "placabase":placabase,
        "adaptadorRed":adaptadorRed,
        "procesador":procesador,
        "fuentePoder":fuentePoder
      }
  
      $.ajax({
        url: `http://127.0.0.1:8000/api/PC/${id}`,
        type: "PUT",
        contentType: "application/json ; charset=utf8",
        dataType: "json",
        data: JSON.stringify(datos),
        success: (response) => {
          $('#exampleModal').modal('show');
          location.reload()
        }
      });
    })
  }
  
  
  $('#crearBtn').click(() => {
    var tipo_PC = $('#tipo_PCVal').val()
    var descripcion_PC = $('#descripcion_PCVal').val()
    var mouse_PC = $('#mouse_PCVal').val()
    var monitor_PC = $('#monitor_PCVal').val()
    var teclado_PC = $('#teclado_PCVal').val()
    var estado_PC = $('#estado_PCVal').val()
    var Ram_PC = $('#Ram_PCVal').val()
    var grafica_PC = $('#grafica_PCVal').val()
    var tipoRAM_PC = $('#tipoRAM_PCVal').val()
    var placabase_PC = $('#placabase_PCVal').val()
    var adaptadorRed_PC = $('#adaptadorRed_PCVal').val()
    var procesador_PC = $('#procesador_PCVal').val()
    var fuentePoder_PC = $('#fuentePoder_PCVal').val()
    
    
    var datos = {
      "tipo_PC":tipo_PC, 
        "descripcion_PC":descripcion_PC,
        "mouse_PC":mouse_PC,
        "monitor_PC":monitor_PC,
        "teclado_PC":teclado_PC,
        "estado_PC":estado_PC,
        "Ram_PC":Ram_PC,
        "grafica_PC":grafica_PC,
        "tipoRAM_PC":tipoRAM_PC,
        "placabase_PC":placabase_PC,
        "adaptadorRed_PC":adaptadorRed_PC,
        "procesador_PC":procesador_PC,
        "fuentePoder_PC":fuentePoder_PC
    }
  
    $.ajax({
      url:"http://127.0.0.1:8000/api/PC/",
      type:"POST",
      contentType:"application/json ; charset=utf8",
      data: JSON.stringify(datos) ,
      success: function(response){
        location.reload()
      }
    })
  })
  
 