import Layout from "../layouts/Layout";
import Table from "../components/Table/Table";
import { ColumnProvinsi } from "../utils/utils";
import { getProvinsi } from "../services/ProvinsiRequest";
import { useState, useEffect } from "react";

export default function Provinsi() {
  const [provinsi, setProvinsi] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const data = await getProvinsi();
      setProvinsi(data.data);
    };
    loadData();
  }, []);

  const handleUpdate = (id) => {
    alert(`Update ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete ${id}`);
  };

  return (
    <Layout hasGroup={true}>
      <Table>
        <Table.Head cols={ColumnProvinsi} />
        <Table.Body>
          {provinsi.map((val, i) => (
            <tr key={val.id_provinsi}>
              <td className="number-cell">{(i += 1)}</td>
              <td>{val.nama_provinsi}</td>
              <td className="action-group">
                <div
                  className="edit"
                  onClick={() => handleUpdate(val.id_provinsi)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                </div>
                <div
                  className="delete"
                  onClick={() => handleDelete(val.id_provinsi)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
}
