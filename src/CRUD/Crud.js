import {doc, collection, addDoc, deleteDoc, getDocs, where, query} from 'firebase/firestore'


import {firestore} from "../firebase/firebaseConfig"

//Función para obtener la lista de proyectos
export const getPokemon = async(setArrayPokemons, filtro) => {
    try {
        const docRef = collection(firestore, "pokemon")
        const q = query(docRef, where("nombre", "==", filtro))
        const querySnapshot = await getDocs(q)
        const docs = []
        querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
        })
        setArrayPokemons(docs)
    } catch (error) {
        console.log(error)
    }
}

// Función para agregar pokemons
export const addPokemon = async(formData) => {
    try {
        const docuRef = collection(firestore,'pokemon');
        console.log("hola")
        await addDoc(docuRef,{
            nombre: formData.Nombre,
            Evolucion: formData.Evolucion,
            Habilidades: formData.Habilidades
        });
        // setProjectCreated(true)  
    } catch (error) {
        console.log(error)
    }
}

//Eliminar el pokemon buscado
export const deletePokemon = async(index,setActualizarpokemones)  => {
    try {
        await deleteDoc(doc(firestore, "pokemon", index))
        setActualizarpokemones("activado")
    } catch (error) {
        console.log(error)
    }
}