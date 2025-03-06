import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

const Provinsi = lazy(() => import("./pages/Provinsi"));
const Login = lazy(() => import("./pages/Login"));
const KotaKabupaten = lazy(() => import("./pages/KotaKabupaten"));
const Kecamatan = lazy(() => import("./pages/Kecamatan"));
const DesaKelurahan = lazy(() => import("./pages/DesaKelurahan"));
const RT = lazy(() => import("./pages/RT"));
const RW = lazy(() => import("./pages/RW"));
const Pendidikan = lazy(() => import("./pages/Pendidikan"));
const Pekerjaan = lazy(() => import("./pages/Pekerjaan"));
const Penduduk = lazy(() => import("./pages/Penduduk"));

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
            <Route path="pendidikan" element={<Pendidikan />} />
            <Route path="pekerjaan" element={<Pekerjaan />} />
            <Route path="penduduk" element={<Penduduk />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;