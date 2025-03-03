import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import DesaKelurahan from "./pages/DesaKelurahan";
import RW from "./pages/RW";
import RT from "./pages/RT";

const Provinsi = lazy(() => import("./pages/Provinsi"));
const Login = lazy(() => import("./pages/Login"));
const KotaKabupaten = lazy(() => import("./pages/KotaKabupaten"));
const Kecamatan = lazy(() => import("./pages/Kecamatan"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path="auth" element={<GuestRoute />}>
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="admin" element={<ProtectedRoute />}>
            <Route path="provinsi" element={<Provinsi />} />
            <Route path="kota-kabupaten" element={<KotaKabupaten />} />
            <Route path="kecamatan" element={<Kecamatan />} />
            <Route path="desa-kelurahan" element={<DesaKelurahan />} />
            <Route path="rw" element={<RW />} />
            <Route path="rt" element={<RT />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;