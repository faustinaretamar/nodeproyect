import { useEffect, useState } from "react";
import { Layout } from "./layout";
import { getAllPets, addPet, updatePet, deletePet } from "../services/api";
import './stlye-components/dashboard.css';

const Dashboard = () => {
  const [pets, setPets] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    size: "",
    type: '',
    description: "",
    location: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Obtener mascotas al montar el componente
  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    const data = await getAllPets();
    setPets(data);
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado con datos:", formData);
    if (editingId) {
      await updatePet(editingId, formData);
    } else {
      await addPet(formData);
    }
    setFormData({
      name: "",
      age: "",
      size: "",
      type: "",
      description: "",
      location: "",
    });
    setEditingId(null);
    fetchPets();
  };

  // Cargar datos en el formulario para editar
  const handleEdit = (pet) => {
    setFormData({
      name: pet.name,
      age: pet.age,
      size: pet.size,
      type: pet.type,
      description: pet.description,
      location: pet.location,
    });
    setEditingId(pet._id);
  };

  // Eliminar una mascota
  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de que quieres borrar esta mascota?")) {
      await deletePet(id);
      fetchPets();
    }
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Dashboard de Mascotas</h1>

          {/* Formulario para agregar/modificar */}
          <div className="box">
            <h2 className="subtitle">{editingId ? "Editar Mascota" : "Agregar Mascota"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Edad</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Tamaño</label>
                <div className="control">
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Descripción</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <label className="label">Especie</label>
                <div className="control">
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Ubicación</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="control">
                <button
                  type="submit"
                  className={`button ${editingId ? "is-warning" : "is-primary"}`}
                >
                  {editingId ? "Actualizar" : "Agregar"}
                </button>
              </div>
            </form>
          </div>

          {/* Tabla de mascotas */}
          {pets.length > 0 ? (
            <table className="table is-fullwidth is-striped is-hoverable mt-4">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Tamaño</th>
                  <th>Descripción</th>
                  <th>Especie</th>
                  <th>Ubicación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {pets.map((pet) => (
                  <tr key={pet._id}>
                    <td>{pet.name}</td>
                    <td>{pet.age}</td>
                    <td>{pet.size}</td>
                    <td>{pet.type}</td>
                    <td>{pet.description}</td>
                    <td>{pet.location}</td>
                    <td>
                      <button
                        className="button is-small is-warning mr-2"
                        onClick={() => handleEdit(pet)}
                      >
                        Editar
                      </button>
                      <button
                        className="button is-small is-danger"
                        onClick={() => handleDelete(pet._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="has-text-centered mt-4">No hay mascotas registradas.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Dashboard };
