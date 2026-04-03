
const calendarioCitas = ({listaDeCitas,cancelarCita})=>{



    return(
        <>
        <div>
            <div class="bg-cyan-300 rounded-lg text-center">
                <h2 class="p-4 m-10 font-bold">
                    Programación de citas médicas
                </h2>
            </div>
            <div class="bg-lime-300 p-4 m-2 text-center rounded-lg">
                <h3 cñass="font-semibold mb-5">Citas disponibles:</h3>
                {
                    listaDeCitas.map(cita =>(
                        <div key={cita.id} class="flex justify-center m-2 mb-2">
                            <p>{cita.date} - {cita.time} - {cita.available ? '(Disponible)' : ''}</p>
                            {!cita.available &&(
                                <button onClick={() => cancelarCita(cita.id)} class="ml-2 bg-red-500 text-white rounded px-2">
                                    Cancelar</button>
                                )
                            }

                        </div>
                    ))
                }
                
            </div>
        </div>
        </>
    )

}

export default calendarioCitas;