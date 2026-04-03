import { use } from "react";
import CalendarioCitas  from "./Components/CalendarioCitas";
import SelectorCitas from "./Components/SelectorCitas";
import useCitas from "./hooks/useCitas";

function App() {

  const {listaDeCitas,seleccionarCita,selectCita,reservarCita,cancelarCita,resetearCitas} = useCitas();
  

  return (
    <>
    <div class="min-h-screen flex flex-col">
      <header class="bg-yellow-200">
        <h1 class="text-3xl font-bold text-center py-4">Gestión de citas médicas</h1>
      </header>

      <main class="flex-grow">
        <div class="bg-orange-300 flex justify-center items-center">
          <CalendarioCitas
          listaDeCitas = {listaDeCitas}
          cancelarCita = {cancelarCita}
          
          />
        </div>
        <div class="bg-orange-300 flex justify-center items-center">
          <SelectorCitas
          listaDeCitas = {listaDeCitas}
          seleccionarCita = {seleccionarCita}
         selectCita = {selectCita}
         reservarCita = {reservarCita}
         cancelarCita = {cancelarCita}
         resetearCitas = {resetearCitas}
          
          />
        </div>
      </main>

      <footer class="bg-slate-400 flex justify-center items-center f-full py-8 mt-auto ">
        <p>Todos los derechos reservados.</p>
      </footer>
      
    </div>
    </>
  )
}

export default App
