import React, { Component } from "react";
import { db, storage } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import TitleStep from "../elements/titleStep";
import { Link } from "react-router-dom";
import ButtonLink from "../elements/button";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../App.css";

function UploadGoods() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    console.log(file.name);
  };
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#90aacb",
    border: "1px #90aacb solid",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    marginLeft: "43%",
    marginBottom: "20px",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="上架物資" />
      <TitleStep name="STEP1 - 上傳圖片" />
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "70%", marginLeft: "15%" }}>
              <form onSubmit={formHandler}>
                <FormControl
                  style={{ margin: "40px", width: "90%" }}
                  type="file"
                />
                <button style={stepBtnStyle} type="submit">
                  上傳&nbsp;<FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
                <ProgressBar style={{margin: "20px 0px 30px 40px", width: "90%"}} now={progress} label={`${progress}%`} />
              </form>
            </Card>
          </Col>
          <div>
            {/* {!progress && (
              <p
                style={{
                  width: "70%",
                  marginLeft: "15%",
                  border: "1px lightgray solid",
                  backgroundColor: "#F0F0F0",
                  color: "#adadad",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                尚未上傳
              </p>
            )}
            {progress && (
              <p
                style={{
                  width: "70%",
                  marginLeft: "15%",
                  border: "1px green solid",
                  backgroundColor: "#26aa99",
                  color: "white",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                Upload {progress} %
              </p>
            )} */}
            
          </div>
          <div style={{ marginLeft: "44.3%", marginTop: "80px" }}>
            <ButtonLink
              as={Link}
              to="/uploadGoodsSec"
              name="下一步"
            ></ButtonLink>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default UploadGoods;
