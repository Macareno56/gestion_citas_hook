import { citas_db } from "../Data/citas_db.js";
import { useEffect, useState } from "react";

export default function useCitas() {

    const [listaDeCitas,setListaDeCitas] = useState(() => {
        const guardarCitas = localStorage.getItem("listaDeCitas");//Aquí se obtiene el valor de las citas guardadas en el localStorage, si es que existen. Si no existen, se utiliza la lista de citas por defecto (citas_db).
        return guardarCitas ? JSON.parse(guardarCitas) : citas_db;
    });
    const [seleccionarCita,setSeleccionarCita] = useState("");


    ///Función que guarda la cita seleccinada en el selector, en la variable (seleccionarCita) del useState, para luego ser utilizada en la función reservarCita
    const selectCita = (id) => {
        const citaSelect = listaDeCitas.find(cita => cita.id === id);
        setSeleccionarCita(citaSelect);

        //console.log("cita seleccionada: ", citaSelect);
    }

    /// Función para reservar y cancelar citas, actualizando el estado de la lista de citas
    const actualizarCita = (id, available) => {

        const updatedCita = listaDeCitas.map( cita => cita.id === id ? {...cita, available} : cita);
        setListaDeCitas(updatedCita);

    }

    const reservarCita = (id) => {

        actualizarCita(id,false);

    }

    const cancelarCita = (id) => {

        actualizarCita(id,true);

    }

    const resetearCitas = () => {
        setListaDeCitas(citas_db);
        setSeleccionarCita("");
    }
    
    ///Aqui se utiliza el hook useEffect para guardar la lista de citas en el localStorage cada vez que esta cambie, lo que permite mantener la persistencia de los datos incluso después de recargar la página o cerrar el navegador.
    useEffect(() => {
        localStorage.setItem("listaDeCitas", JSON.stringify(listaDeCitas));
    }, [listaDeCitas]);


    return{
        listaDeCitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetearCitas
    }

}