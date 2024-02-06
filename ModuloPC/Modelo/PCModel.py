from Conexion.conexionBD import ConexionDB 
class PCModel:

    def buscarPC():
        query = "SELECT * FROM PC"
        tipoConsulta = 2
        conexionBD = ConexionDB()
        conexionBD.conectar()
        resultado = conexionBD.consultaDB(query, tipoConsulta)
        conexionBD.desconectar()
        return resultado
    
    def buscarPC(id):
        query = "SELECT * FROM PC WHERE id_PC = %s"
        parametros = id,
        tipoConsulta = 2
        conexionBD = ConexionDB()
        conexionBD.conectar()
        resultado = conexionBD.consultaDB(query, tipoConsulta, parametros)
        conexionBD.desconectar()
        return resultado
    
    def crearPC(tipo_PC, Descripcion_PC, Mouse_PC, Monitor_PC, Teclado_PC, Estado_PC, RAM_PC, Grafica_PC, TipoRAM_PC, PlacaBase_PC, adaptadorRed, Procesador_PC, FuentePoder_PC):
        query = "INSERT INTO PC (tipo_PC, Descripcion_PC, Mouse_PC, Monitor_PC, Teclado_PC, Estado_PC, RAM_PC, Grafica_PC, TipoRAM_PC, PlacaBase_PC, adaptadorRed, Procesador_PC, FuentePoder_PC) VALUES (%s,%s,%s,%s)"
        tipoConsulta = 1
        parametros = tipo_PC, Descripcion_PC, Mouse_PC, Monitor_PC, Teclado_PC, Estado_PC, RAM_PC, Grafica_PC, TipoRAM_PC, PlacaBase_PC, adaptadorRed, Procesador_PC, FuentePoder_PC
        conexionBD = ConexionDB()
        conexionBD.conectar()
        try:
            conexionBD.consultaDB(query, tipoConsulta, parametros)
            print("Se ha insertado Correctamente")
        except:
            print("Ha ocurrido un problema en la inserción")
        conexionBD.desconectar()
    
    def editarPC(tipoPC, id):
        query = "UPDATE PC SET tipo_PC = %s WHERE id_PC = %s;"
        tipoConsulta = 1
        parametros = tipoPC, id,
        conexionBD = ConexionDB()
        conexionBD.conectar()
        try:
            conexionBD.consultaDB(query, tipoConsulta, parametros)
            print("Se ha Editado Correctamente")
        except:
            print("Ha ocurrido un problema en la edición")
        conexionBD.desconectar()

    def eliminarPC(id):
        query = "DELETE FROM PC WHERE id_PC = %s;"
        tipoConsulta = 1
        parametros = id,
        conexionBD = ConexionDB()
        conexionBD.conectar()
        try:
            conexionBD.consultaDB(query, tipoConsulta, parametros)
            print("Se ha Eliminado Correctamente")
        except:
            print("Ha ocurrido un problema en la Eliminación")
        conexionBD.desconectar()
