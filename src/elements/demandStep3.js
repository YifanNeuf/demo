import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import img from "../img/tablet.jpg";

class DemandStep3 extends Component {
  render() {
    const card = {
      marginBottom: "20px",
      marginLeft: "15%",
      marginRight: "15%",
      padding: "40px 40px 40px 40px",
      color: "#002B5B",
      width: "70%",
      display: "flex",
      flexDirection: "row",
    };
    const contentStyle = {
      textAlign: "left",
      marginLeft: "30px",
      letterSpacing: "2px",
    };
    const demandHrefStyle = {
      color: "#90AACB",
    };
    const goodsImgStyle = {
      width: "200px",
      height: "200px"
    };
    return (
      <div>
        <Card style={card}>
          <Card.Img style={goodsImgStyle} variant="top" src={img} />
          <Card.Body style={contentStyle}>
            <Card.Title>
              物資名稱：<b>ASUS 平板電腦</b>
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              需求機構：鈺惠協會
              <br />
              需求數量：10
              <br />
              需求說明：提供給偏鄉孩童授課使用
              <br />
              物資提供商家：
              <a style={demandHrefStyle} href="#">
                奕慈麵包坊
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DemandStep3;
