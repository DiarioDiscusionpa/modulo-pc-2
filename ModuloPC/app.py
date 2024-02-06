from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from ModuloPC.Modelo.PCModel import PCModel
from ModuloPC.Controlador.PCController import PCs

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)



@app.get('/api/PCs')
def buscarPC():
    PC = PCs.buscarPCs()
    return PC

@app.get('/api/PC/{id}')
def buscarPC(id):
    PCBuscado = PCs.buscarPC(id)
    return PCBuscado

@app.post('/api/PC/')
async def crearPC(request: Request):
    datos = await request.json()
    tipo = str(datos['tipo_PC'])
    mouse = str(datos['mouse_PC'])
    monitor = str(datos['monitor_PC'])
    descripcion = str(datos['descripcion_PC'])
    Estado = str(datos['mouse_PC'])
    Ram = str(datos['mouse_PC'])
    Grafica = str(datos['mouse_PC'])
    TipoRAM = str(datos['mouse_PC'])
    placaBase = str(datos['mouse_PC'])
    adaptadorRed = str(datos['mouse_PC'])
    Procesador = str(datos['mouse_PC'])
    fuentePoder = str(datos['mouse_PC'])
    print(tipo, mouse, monitor, descripcion, Estado, Ram, Grafica, TipoRAM, placaBase, adaptadorRed, Procesador, fuentePoder)
    print(PCModel.crearPC(tipo, mouse, monitor, descripcion, Estado, Ram, Grafica, TipoRAM, placaBase, adaptadorRed, Procesador, fuentePoder))
    return datos

@app.put('/api/PC/{id}')
async def editarPC(request: Request):
    datos = await request.json()
    tipo_pc = str(datos['tipo_pc'])
    _id = int(datos['id'])
    print(PCModel.editarPC(tipo_pc, _id))
    return datos

@app.delete('/api/PC/{id}')
async def eliminarPC(request: Request):
    datos = await request.json()
    _id = int(datos['id'])
    print(PCModel.eliminarPC(_id))
