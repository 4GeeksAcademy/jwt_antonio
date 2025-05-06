import { useAuth } from "../hooks/AuthContext";

export function Private() {
  const { logout } = useAuth();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card p-4 text-center shadow-sm">
            <h2 className="mb-4">Bienvenido al panel privado</h2>
            <p className="mb-3">Has iniciado sesión correctamente.</p>
            <button className="btn btn-danger w-100" onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
