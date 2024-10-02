import React, { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../Components/Layout/DashboardLayout';
import LoginPage from "../pages/LoginPages/LoginPage"
import SignInPage from '../pages/LoginPages/SignInPage';
import ErrorPage from '../Components/Common/ErrorPage';
import PropertiesFound from '../pages/KulfiHousingPages/Properties/PropertiesFound';
import AddYourProperty from '../pages/KulfiHousingPages/Properties/AddYourProperty';
import PortfolioFound from '../pages/KulfiHousingPages/Portfolio/PortfolioFound';
import AddYourPortfolio from '../pages/KulfiHousingPages/Portfolio/AddYourPortfolio';
import ResidentLeasesManagement from '../pages/KulfiHousingPages/Resident&Leases/ResidentLeasesManagement';
import SetupResident from '../pages/KulfiHousingPages/Resident&Leases/SetupResident';
import DntHavePaymentSetUpYet from '../pages/KulfiHousingPages/PaymentScreen/DntHavePaymentSetUpYet';
import SetUpNewPayment from '../pages/KulfiHousingPages/PaymentScreen/SetUpNewPayment';
import PaymentTransactionDetails from '../pages/KulfiHousingPages/PaymentScreen/PaymentTransactionDetails';
import ConfirmPaymentSetting from '../pages/KulfiHousingPages/PaymentScreen/ConfirmPaymentSetting';
import AddExpenses from '../pages/KulfiHousingPages/AddExpenses/AddExpenses';
import TrackingAddedExpenses from '../pages/KulfiHousingPages/AddExpenses/TrackingAddedExpenses';
import ReportFile from '../pages/KulfiHousingPages/Report/ReportFile';
function Redirect() {
  return (
    <>
      <Routes> 
      <Route path='/' element={<LoginPage />} />
      <Route path='/signUp' element={<LoginPage />} />
        <Route path='/signIn-page' element={<SignInPage />} />
        <Route path='/error-page' element={<ErrorPage />} />
        <Route path='/' element={<DashboardLayout />}>
        {/* <Route path='/' element={<PropertiesFound  />} /> */} 
        <Route path='/kulfy-housing/found-portfolio' element={<PortfolioFound />} />
        <Route path='/kulfy-housing/add-portfolio' element={<AddYourPortfolio />} />
        <Route path='/kulfy-housing/found-properties' element={<PropertiesFound />} />
        <Route path='/kulfy-housing/add-properties' element={<AddYourProperty />} /> 
        <Route path='/kulfy-housing/resident-&-lease-management' element={<ResidentLeasesManagement />} />
        <Route path='/kulfy-housing/new-resident-setup' element={<SetupResident />} /> 
        <Route path='/kulfy-housing/dnt-have-payment-setup' element={<DntHavePaymentSetUpYet/>} /> 
        <Route path='/kulfy-housing/payment-setup' element={<DntHavePaymentSetUpYet/>} /> 
        <Route path='/kulfy-housing/payment-new-setup' element={<SetUpNewPayment />} /> 
        <Route path='/kulfy-housing/payment-transaction-details' element={<PaymentTransactionDetails />} /> 
        <Route path='/kulfy-housing/payment-setting-confirmation' element={<ConfirmPaymentSetting />} /> 
        <Route path='/kulfy-housing/add-expenses' element={<AddExpenses />} /> 
        <Route path='/kulfy-housing/add-expenses-tracking' element={<TrackingAddedExpenses />} />  
        <Route path='/kulfy-housing/report' element={<ReportFile />} />
        </Route> 
      </Routes>
    </>
  )
}

export default Redirect;