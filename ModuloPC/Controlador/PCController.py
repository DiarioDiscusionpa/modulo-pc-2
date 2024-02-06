from Modelo.PCModel import PCModel
class PC: 


    def buscarPCs():
        datos = PCModel.buscarPCs()
        PCs = []
        for PC in datos:
            PC = {
                "id": PC[0],
                "tipo_PC":PC[1],
                "Descripcion_PC": PC[2],
                "Mouse_PC":PC[3],
                "Monitor_PC":PC[4],
                "Teclado_PC":PC[5],
                "Estado_PC":PC[6],
                "RAM_PC":PC[7],
                "Grafica_PC":PC[8],
                "TipoRAM_PC":PC[9],
                "PlacaBase_PC":PC[10],
                "AdaptadorRed_PC":PC[11],
                "Procesador_PC":PC[12],
                "FuentePoder_PC":PC[13]
                
            }
            PCs.append(PC)
        return PCs
    
    def buscarPC(id):
        PCBuscado = {}
        infoPC = PCModel.buscarPC(id)
        for info in infoPC:
            PCBuscado = {
                "id": info[0],
                "tipo_PC": info[1],
                "Descripcion_PC": info[2],
                "Mouse_PC":info[3],
                "Monitor_PC":info[4],
                "Teclado_PC":info[5],
                "Estado_PC":info[6],
                "RAM_PC":info[7],
                "Grafica_PC":info[8],
                "TipoRAM_PC":info[9],
                "PlacaBase_PC":info[10],
                "AdaptadorRed_PC":info[11],
                "Procesador_PC":info[12],
                "FuentePoder_PC":info[13]
            }
        return PCBuscado
