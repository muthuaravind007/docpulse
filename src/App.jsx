import { BrowserRouter, Routes, Route } from 'react-router-dom';

//=================================== Pages ====================================//
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Pricing from './pages/Pricing.jsx';
import FAQ from './pages/FAQ.jsx';
import ProductVideos from './pages/ProductVideos.jsx';
import Blogs from './pages/Blogs.jsx';
import Header from './components/Header.jsx';


//========================================= Products =========================================//
import TelemedicineSoftware from "./products/TelemedicineSoftware.jsx";
import AppointmentBookingSoftwareIVR from './products/AppointmentBookingSoftwareIVR.jsx';
import AppointmentSchedulingSoftware from './products/AppointmentSchedulingSoftware.jsx';
import MedicalBillingSoftware from './products/MedicalBillingSoftware.jsx';
import ElectronicHealthMedicalRecords from './products/ElectronicHealthMedicalRecords.jsx';
import LIMSSoftware from './products/LIMSSoftware.jsx';
import PatientAppointmentReminders from './products/PatientAppointmentReminders.jsx';
import HospitalStockandInventoryManagement from './products/HospitalStockandInventoryManagement.jsx';
import PharmacyManagementSystem from './products/PharmacyManagementSystem.jsx';
import PatientManagementSystem from './products/PatientManagementSystem.jsx';
import VaccinationManagement from './products/VaccinationManagement.jsx';
import DoctorAppointmentApp from './products/DoctorAppointmentApp.jsx';


//=========================================== Solutions ==============================================//
import ClinicManagementSoftware from './solutions/ClinicManagementSoftware.jsx';
import MedicalSoftware from './solutions/MedicalSoftware.jsx';
import HospitalManagementSoftware from './solutions/HospitalManagementSoftware.jsx';
import ClinicChains from './solutions/ClinicChains.jsx'



export default function App() {
  return <BrowserRouter>
  <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/product-videos' element={<ProductVideos />} />

        <Route path='/products/telemedicine-software' element={<TelemedicineSoftware />} />
        <Route path='/products/appointment-booking-software-ivr' element={<AppointmentBookingSoftwareIVR />} />
        <Route path='/products/appointment-scheduling-software' element={<AppointmentSchedulingSoftware />} />
        <Route path='/products/medical-billing-software' element={<MedicalBillingSoftware />} />
        <Route path='/products/electronic-health-medical-records' element={<ElectronicHealthMedicalRecords />} />
        <Route path='/products/lims-software' element={<LIMSSoftware />} />
        <Route path='/products/patient-appointment-remminders' element={<PatientAppointmentReminders />} />
        <Route path='/products/hospital-stock-and-inventory-management' element={<HospitalStockandInventoryManagement />} />
        <Route path='/products/pharmacy-management-system' element={<PharmacyManagementSystem />} />
        <Route path='/products/patient-management-system' element={<PatientManagementSystem />} />
        <Route path='/products/vaccination-management' element={<VaccinationManagement />} />
        <Route path='/products/doctor-appointment-app' element={<DoctorAppointmentApp />} />

        <Route path='/solutions/clinic-management-software' element={<ClinicManagementSoftware />} />
        <Route path='/solutions/medical-software' element={<MedicalSoftware />} />
        <Route path='/solutions/hospital-management-software' element={<HospitalManagementSoftware />} />
        <Route path='/solutions/clinic-chains' element={<ClinicChains />} />
    </Routes>
  </BrowserRouter>
}