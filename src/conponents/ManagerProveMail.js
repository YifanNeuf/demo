import React, { useState } from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
import ButtonLink from "../elements/button";
import Form from 'react-bootstrap/Form';
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

function ManagerProveMail() {
    // const form = useRef();
    const navigate = useNavigate();

    // localstorage 網址傳值
    let org = localStorage.getItem('proveOrg');
    console.log("localstorage",org);
    org = JSON.parse(org);
    console.log("localstorag`e",org);

    // let org = JSON.parse(localStorage.getItem('proveOrg'))



    const [values, setValues] = useState({
        toName: org.name,
        toEmail: 'qianmu0503@gmail.com',
        result: '',
        reason: ''
    });

    const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
    }

    function sendEmail(e) {
        e.preventDefault();
        if (values.result === '' || (values.result === '' && values.reason !== '')) {
            alert("請選擇審核狀態")
        }
        else if (values.result === '審核不通過' && values.reason === '') {
            alert("請填寫審核失敗原因")
        }
        else if (values.result === '審核通過' && values.reason !== '') {
            alert("不必填寫審核失敗原因")
        }
        else {
            emailjs.send(
                "service_llxvm9o",
                "template_wgoxrhn",
                values,
                "jBeceDZrf0-rXYTCw"
            )
            .then((result) => {
                console.log(result.text);
                alert("信件寄送成功！")
                // window.location.reload();
                navigate("/managerProve");
            }, (error) => {
                console.log(error.text);
                alert("信件寄送失敗，請再寄送一次！")
            });
        }
        // console.log(form.current);
    }


    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "70px",
        transform: `translate(${-50}%, ${-10}%)`,
        paddingTop: "3%",
        paddingBottom: "5%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };

    const btnStyle = {
        // position: "absolute",
        // marginTop: "30px",
        // left: "50%",
        // transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",

        letterSpacing: "1px",
    }

    const pStyle = {
        lineHeight: "40px",
        textAlign: "left",
    }

    const tableStyle = {
        paddingBottom: "40px",
        position: "absolute",
        marginTop: "30px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,

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

        <div style={{ textAlign: "center" }}>
            <Navbar />
            <TitleSec name="公益單位申請-審核信件發送通知" />

            <Card style={cardStyle}>
                <Card.Body>
                    <p style={pStyle}>將對「<span style={{ fontWeight: "bold" }}>{org.name}</span>」之審核結果發送至對方信箱裡。請勾選下列審核狀態，並依狀態選填審核失敗原因：</p>
                    <form onSubmit={sendEmail}>
                        <input
                            type="radio"
                            name="result"
                            value="審核通過"
                            required
                            checked={values.result === '審核通過'}
                            onChange={handleChange}
                        />
                        <label style={{ fontWeight: "bold", color: "#007500" }}>&nbsp;審核通過</label>
                        <input
                            type="radio"
                            name="result"
                            value="審核不通過"
                            required
                            checked={values.result === '審核不通過'}
                            onChange={handleChange}
                            style={{ marginLeft: "6%" }}
                        />
                        <label style={{ fontWeight: "bold", color: "#CE0000" }}>&nbsp;審核不通過</label>
                        <br></br>  <br></br>
                        <Form.Control
                            as="textarea" 
                            name="reason"
                            value={values.reason}
                            onChange={handleChange}
                            placeholder="若審核不通過，請填寫審核失敗原因..."
                            style={{ height: '100px' }}
                        />
                        <br></br>
                        <div style={{ marginBottom: "40px" }}>
                            <table style={tableStyle}>
                                <tr>
                                    <td style={{ paddingRight: "10px" }}>

                                        <div style={btnStyle}>
                                            <ButtonLink to="/managerProve" name="返回" />
                                        </div>

                                    </td>
                                    <td style={{ paddingLeft: "10px" }}>
                                        <div style={btnStyle}>
                                            <input style={stepBtnStyle} name="發送信件" type="submit" value="發送信件" onClick={sendEmail} />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </form>

                    {/* <Button as={Link} to="/setPassword" style={btnStyle}>發送審核結果信件</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ManagerProveMail;