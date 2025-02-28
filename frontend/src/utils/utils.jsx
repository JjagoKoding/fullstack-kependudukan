import { DesaKelurahanIcon, HomeIcon, KecamatanIcon, KeluargaIcon, KotaKabupatenIcon, PendudukIcon, ProvinsiIcon, RTIcon, RWIcon,  } from "./icons";

export const SidebarMenu = [
  {
    type: "sub-header",
    content: "HOME",
  },
  {
    type: "sub-menu",
    label: "Home",
    path: "/admin/home",
    icon: <HomeIcon/>,
  },
  {
    type: "sub-header",
    content: "KEPENDUDUKAN",
  },
  {
    type: "sub-menu",
    label: "Penduduk",
    path: "/admin/penduduk",
    icon: <PendudukIcon/>,
  },
  {
    type: "sub-menu",
    label: "Keluarga",
    path: "/admin/keluarga",
    icon: <KeluargaIcon/>,
  },
  {
    type: "sub-header",
    content: "WILAYAH",
  },
  {
    type: "sub-menu",
    label: "Provinsi",
    path: "/admin/provinsi",
    icon: <ProvinsiIcon/>,
  },
  {
    type: "sub-menu",
    label: "Kota & Kabupaten",
    path: "#",
    icon: <KotaKabupatenIcon/>,
  },
  {
    type: "sub-menu",
    label: "Kecamatan",
    path: "#",
    icon: <KecamatanIcon/>,
  },
  {
    type: "sub-menu",
    label: "Desa & Kelurahan",
    path: "#",
    icon: <DesaKelurahanIcon/>,
  },
  {
    type: "sub-menu",
    label: "RW",
    path: "#",
    icon: <RWIcon/>,
  },
  {
    type: "sub-menu",
    label: "RT",
    path: "#",
    icon: <RTIcon/>,
  },
];

export const ColumnProvinsi = [
  {
    title: "#"
  },
  {
    title: "Nama Provinsi"
  }
];