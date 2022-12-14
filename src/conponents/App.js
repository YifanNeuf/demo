import "../App.css";
import NavbarComp from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../elements/navbar";
import Login from "./Login";
import DonateList from "./DonateList";
import UploadDemand from "./UploadDemand";
import UploadDemandSec from "./UploadDemandSec";
import UploadDemandThird from "./UploadDemandThird";
import LoginDemand from "./LoginDemand";
import LoginAdmin from "./LoginAdmin";
import Signin from "./Signin";
import ForgetPassword from "./ForgetPassword";
// import ScrollToTop from "../elements/scrollToTop";
import MyDemand from "./MyDemand";
import Profile from "./Profile";
import DonateListSec from "./DonateListSec";
import DonateListThird from "./DonateListThird";
import DonateRecord from "./DonateRecord";
import DonateRecordList from "./DonateRecordList";
import Process from "./Process";
import ProcessRecordList from "./ProcessRecordList";
import ViewRecord from "./ViewRecord";
import CharityInfo from "./CharityInfo";
import CharityPreview from "./CharityPreview";
import SetPassword from "./SetPassword";
import PasswordSuccess from "./PasswordSuccess";
import UploadSuccess from "./UploadSuccess";
import Charity from "./Charity";
import CharityDetail from "./CharityDetail";
import CharityInfoSuccess from "./CharityInfoSuccess";
import ApplicationInfo from "./ApplicationInfo";
import ApplicationUpload from "./ApplicationUpload";
import ManagerProveData from "./ManagerProveData";
import PointsActivity from "./PointsActivity";
import PointsItem from "./PointsItem";
import PointsItemDetails from "./PointsItemDetails";
import PointsItemSuccess from "./PointsItemSuccess";
import ManagerProve from './ManagerProve';
import ManagerProveMail from './ManagerProveMail';
import Dashboard from "../elements/dashboard";
import SignUp from "./SignUp";
import UploadGoods from "./UploadGoods";
import UploadGoodsSec from "./UploadGoodsSec";
import UserUpdatePassword from "./UserUpdatePassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop> */}
          <Routes>
            <Route exact path="/" element={<NavbarComp />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/uploadGoods" element={<UploadGoods />} />
            <Route path="/uploadGoodsSec" element={<UploadGoodsSec />} />
            <Route path="/loginin" element={<Signin />} />
            <Route path="/donate" element={<DonateList />} />
            <Route path="/upload" element={<UploadDemand />} />
            <Route path="/demandstep2" element={<UploadDemandSec />} />
            <Route path="/demandstep1" element={<UploadDemand />} />
            <Route path="/demandstep3" element={<UploadDemandThird />} />
            <Route path="/myDemand" element={<MyDemand />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/userUpdatePassword" element={<UserUpdatePassword />} />
            <Route path="/donatestep2" element={<DonateListSec />} />
            <Route path="/donatestep3" element={<DonateListThird />} />
            <Route path="/donateRecord" elelment={<DonateRecord />} />
            <Route path="/donateRecordList" element={<DonateRecordList />} />
            <Route path="/process" element={<Process />} />
            <Route path="/processRecordList" element={<ProcessRecordList />} />
            <Route path="/viewRecord" element={<ViewRecord />} />
            <Route element={<ApplicationInfo />} path="/applicationInfo" />
            <Route element={<ApplicationUpload />} path="/applicationUpload" />
            <Route element={<UploadSuccess />} path="/uploadSuccess" />
            <Route element={<ManagerProve />} path="/managerProve" />
            <Route element={<ManagerProveMail  />} path="/managerProveMail" />
            <Route element={<ManagerProveData />} path="/managerProveData" />
            <Route element={<SetPassword />} path="/setPassword" />
            <Route element={<PasswordSuccess />} path="/passwordSuccess" />
            {/* <Route element={<CharityInfo />} path="/charityInfo" /> */}
            <Route element={<CharityPreview />} path="/charityPreview" />
            <Route element={<CharityInfoSuccess />} path="/charityInfoSuccess" />
            <Route element={<Charity />} path="/charity" />
            <Route element={<CharityDetail />} path="/charityDetail" />
            <Route element={<PointsActivity />} path="/pointsActivity" />
            <Route element={<PointsItem />} path="/pointsItem" />
            <Route element={<PointsItemDetails />} path="/pointsItemDetails" />
            <Route element={<PointsItemSuccess />} path="/pointsItemSuccess" />
            <Route element={<Dashboard />} path="/dashboard" />
          </Routes>
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
