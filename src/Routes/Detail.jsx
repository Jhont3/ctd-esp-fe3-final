import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detailInfo, setdetailInfo] = useState();
  console.log(detailInfo);

  const params = useParams();
  // console.log(params);

  async function getDataDetail() {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    ).json();
    setdetailInfo(data);
  }

  useEffect(() => {
    getDataDetail();
  }, []);

  return (
    <>
      {detailInfo ? (
        <>
        <h1>Detail Dentist {detailInfo.id} </h1>
        <table>
        <caption>{detailInfo.username}</caption>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">website</th>
        </tr>
        <tr>
          <th scope="row">{detailInfo.name}</th>
          <td>{detailInfo.email}</td>
          <td>{detailInfo.phone}</td>
          <td>{detailInfo.website}</td>
        </tr>
      </table>
      </>
      )  : undefined}
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
