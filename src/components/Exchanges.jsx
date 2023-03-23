import React from "react";
// import millify from "millify";
// import { Collapse, Row, Col, Typography, Avatar } from "antd";
// import HTMLReactParser from "html-react-parser";
import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
// const { Text } = Typography;
// const { Panel } = Collapse;
export default function Exchanges() {
  const { data: exchanges, isFetching } = useGetExchangesQuery();
  console.log(exchanges);
  // const exchangeList = data?.data?.exchanges;
  if (isFetching) return <Loader />;
  return <div>exchnages</div>;
}
