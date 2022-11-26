import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
import Slider from "react-slick";
import Product from "../elements/product";
import TitleSec from "../elements/titleSec";
import Record from "../elements/record";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider, } from "firebase/auth";

function UserUpdatePassword() {    
    const navigate = useNavigate();
    const auth = getAuth();
    const [user] = useAuthState(auth);
    if (!user) {
        navigate("/loginin");
    }

    // console.log([user]);

    const [password, setPassword] = useState({
        oldOne: '',
        newOne: ''
    })
    
    const handleChange = (e) => {
        setPassword(password => ({
          ...password,
          [e.target.name]: e.target.value
        }))
    }


    function reauthenticate(oldPassword) {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        reauthenticateWithCredential(user, credential).then(() => {
            // User re-authenticated.
        }).catch((error) => {
            console.log(error.message);
        });
    }

    function changePassword(newPassword) {
        const user = auth.currentUser;
        updatePassword(user, password.newOne).then(() => {
            console.log("更新完畢");
        }).catch((error) => {
            console.log(error.message);
        });
    }

    function sendNewPassword(password) {
        try {
            reauthenticate(password.oldOne);
            changePassword(password.newOne);
            navigate("/profile");
            alert("成功設置新密碼！");
        } catch(err){
            console.log(err.message);
            alert("密碼設置失敗，請重試。");
        }
    };

    // console.log("password.oldOne", password.oldOne);
    // console.log("password.newOne", password.newOne);

    const profileContentStyle = {
        borderRadius: "5px",
        height: "380px",
        color: "#002b5b",
        fontSize: "18px",
        letterSpacing: "1px",
        lineHeight: "40px",
        margin: "0 0 0 5%",
    };
    const titleSecPage = {
        margin: "40px 0px 30px 0px", //上右下左
    };
    const settingsSec = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
    };
    const passwordStyle = {
        marginTop: "18px",
        display: "flex",
        flexDirection: "row",
    };

    const textStyle = {
        marginTop: "35px",
    };

    const nameStyle = {
        lineHeight: "40px",
        marginRight: "10px",
    }
    const labelStyle = {
        width: "30%",
        height: "40px",
        borderRadius: "5px",
    }

    const stepBtnStyle = {
        color: "#ffffff",
        backgroundColor: "#002B5B",
        borderRadius: "30px",
        borderColor: "#002B5B",
        fontSize: "16px",
        width: "120px",
        textAlign: "center",
        height: "35px",
        fontWeight: "bold",
    };

    return (
        <div>
        <Navbar />
        <TitleSec name="修改密碼" />
        <Container>
            <Card style={{ marginTop: "40px", width: "80%", marginLeft: "10%" }}>
            <div style={profileContentStyle}>
                
                <Col>
                    <div style={textStyle}>
                        <InputGroup>
                            <Form.Label htmlFor="basic-url" style={nameStyle}>輸入舊密碼：&nbsp;</Form.Label>
                            <Form.Control
                                type="password"
                                name="oldOne"
                                style={labelStyle}
                                value={password.oldOne}
                                onChange={handleChange}
                                placeholder='請輸入舊密碼' />
                        </InputGroup>
                        <InputGroup>
                            <Form.Label htmlFor="basic-url" style={nameStyle}>設定新密碼：&nbsp;</Form.Label>
                            <Form.Control
                                type="password"
                                name="newOne"
                                style={labelStyle}
                                value={password.newOne}
                                onChange={handleChange}
                                placeholder='請輸入新密碼' />
                        </InputGroup>
                        <br />
                        <div style={passwordStyle}>
                        <input style={stepBtnStyle} type="submit" value="確認修改" onClick={sendNewPassword} />
                        </div>
                    </div>
                </Col>
            </div>
            </Card>

            <div style={titleSecPage}>
            <h5 style={{ color: "#002b5b", fontWeight: "bold" }}>瀏覽紀錄</h5>
            <Slider {...settingsSec}>
                <div>
                <Product />
                </div>
                <div>
                <Product />
                </div>
                <div>
                <Product />
                </div>
                <div>
                <Product />
                </div>
                <div>
                <Product />
                </div>
                <div>
                <Product />
                </div>
            </Slider>
            </div>

            <div style={titleSecPage}>
            <h5 style={{ color: "#002b5b", fontWeight: "bold" }}>捐贈紀錄</h5>
            <Slider {...settingsSec}>
                <div>
                <Record />
                </div>
                <div>
                <Record />
                </div>
                <div>
                <Record />
                </div>
                <div>
                <Record />
                </div>
                <div>
                <Record />
                </div>
                <div>
                <Record />
                </div>
            </Slider>
            </div>
        </Container>
        </div>
    );
}

export default UserUpdatePassword;
