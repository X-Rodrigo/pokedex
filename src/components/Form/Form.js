import { useFormik } from 'formik'
import * as Yup from "yup"
import "./styles.css"
import {addPokemon} from "../../CRUD/Crud"

import "./styles.css"
const Form = ({setAgregar}) => {
//---------------------Validación de formularios con Formik y Yup-------------------------
 const schema = Yup.object().shape({
    Nombre: 
    Yup.string()
    .trim("El nombre no debe estar en blanco ni tener espacios iniciales en blanco")
    .min(4, "El nombre debe tener al menos 6 caracteres")
    .strict()
    .required("El nombre no puede ir vacío"),

    Habilidades: 
    Yup.string()
    .trim("Las habilidades no deben estar en blanco ni tener espacios iniciales en blanco")
    .min(4, "Las habilidades debe tener al menos 6 caracteres")
    .strict()
    .required("Las habilidades no pueden ir vacías"),

    Evolucion: 
    Yup.string()
    .trim("Las Evoluciones no deben estar en blanco ni tener espacios iniciales en blanco")
    .min(4, "Las Evoluciones debe tener al menos 6 caracteres")
    .strict()
    .required("Las Evoluciones no pueden ir vacías"),
})
const formik = useFormik({
    initialValues:{
        Nombre: "",
        Habilidades: "",
        Evolucion: ""
    },
    validationSchema: schema,
    onSubmit: (formData)=>{
        addPokemon(formData)
        formik.handleReset()
        console.log(formData)
    }  
})
//------------------------------------------------------------------------------------- 
const handleClickCancelarPokemon=(e)=>{
    e.preventDefault()
    setAgregar(false)
}  
  return (
    <div className='create-pokemon'>
        <h2 className="create-pokemon-title">Creando Pokemon</h2>
        <form className="create-pokemon-content" onSubmit={formik.handleSubmit} >
            <h4 className="create-pokemon-label">Nombre del Pokemon</h4>
            <input 
                className="create-pokemon-input"
                type="text"
                name="Nombre"
                value={formik.values.Nombre.toLowerCase()}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.Nombre && <p className="error-pokemon">{formik.errors.Nombre}</p>}

            <h4 className="create-pokemon-label">Habilidades</h4>
            <input 
                className="create-pokemon-input" 
                type="text" 
                name="Habilidades"
                value={formik.values.Habilidades}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}   
            />
            {formik.touched.Habilidades && <p className="error-pokemon">{formik.errors.Habilidades}</p>}
            <h4 className="create-pokemon-label">Evolucion</h4>
            <input 
                className="create-pokemon-input" 
                type="text" 
                name="Evolucion"
                value={formik.values.Evolucion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}   
            />
            {formik.touched.Evolucion && <p className="error-pokemon">{formik.errors.Evolucion}</p>}
                <div className="btn-pokemon-container">        
                    <input 
                        className="btn-create-pokemon"
                        type="submit"
                        value="Agregar"
                    />
                    <input 
                        onClick={handleClickCancelarPokemon} className="btn-create-pokemon"
                        type="submit"
                        value="Cancelar"
                    />
                </div>
        </form>
    </div> 
  )
}

export default Form