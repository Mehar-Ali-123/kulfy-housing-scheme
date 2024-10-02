import React, { useEffect, useState } from 'react';
import styles from '../../styles/sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import BuildingIcon from '../IconDesigned/BuildingIcon';
import PortfolioIcon from '../IconDesigned/PortfolioIcon';
import ReportsIcons from '../IconDesigned/ReportsIcons';
import ResidentIcon from '../IconDesigned/ResidentIcon';
import PaymentIcons from '../IconDesigned/PaymentIcons';
import ExpensisIcon from '../IconDesigned/ExpensisIcon';
import PropertiesIcon from '../IconDesigned/PropertiesIcon'; 
import CompanyLogo from './ComapnyLogo/CompanyLogo';
const Sidebar = () => {
  const location = useLocation();
  const [activeApp, setActiveApp] = useState(false)
  const [activeNav, setActiveNav] = useState(false)
  const [portfolioActive, setPortfolioActive] = useState(false)
  const [propertiesActive, setPropertiesActive] = useState(false)
  const [residenLeaseActive, setResidenLeaseActive] = useState(false)
  const [paymentActive, setPaymentActive] = useState(false)
  const [expensesActive, setExpensesActive] = useState(false)
  const [reportActive, setReportActive] = useState(false)
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true); // Start collapsed by default

  useEffect(() => {
    const pathname = location.pathname;

    const portfolioActive = ["-portfolio"].some(path =>
      pathname.includes(path) || pathname === '/'
    );
    setPortfolioActive(portfolioActive);

    const propertiesActive = ["-properties"].some(path =>
      pathname.includes(path) || pathname === '-properties'
    );
    setPropertiesActive(propertiesActive);

    const residenLeaseActive = ["resident-"].some(path =>
      pathname.includes(path) || pathname === '-resident'
    );
    setResidenLeaseActive(residenLeaseActive);

    const paymentActive = ["payment"].some(path =>
      pathname.includes(path) || pathname === 'payment'
    );
    setPaymentActive(paymentActive);

    const expensesActive = ["expenses"].some(path =>
      pathname.includes(path) || pathname === '/payment'
    );
    setExpensesActive(expensesActive);

    const reportActive = ["report"].some(path =>
      pathname.includes(path) || pathname === '/payment'
    );
    setReportActive(reportActive);

    // handel size 
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div className={`${styles.sidebar} ${isSidebarCollapsed ? styles.collapsed : ''}`}>
      <div>
        <div className='text-start my-0 mb-4 w-100  d-flex justify-content-center px-auto'>
          <a className="mx-auto" href="/"> 
          <CompanyLogo/> 
          </a>
        </div>
        <div id='sidebar-scroll' className={`${styles.sidebarItems} mt-7`}>
          {/* Add a hamburger menu icon to toggle the sidebar */}
          <div className={styles.hamburger} onClick={toggleSidebar}>
            <div className={`${styles.hamburgerLine} ${isSidebarCollapsed ? '' : styles.hamburgerLineActive}`} />
            <div className={`${styles.hamburgerLine} ${isSidebarCollapsed ? '' : styles.hamburgerLineActive}`} />
            <div className={`${styles.hamburgerLine} ${isSidebarCollapsed ? '' : styles.hamburgerLineActive}`} />
          </div>
          
          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/found-portfolio'
              activeClassName={styles.activeLink}
              className={portfolioActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center svg-hover txt-dark   txt-16 ${portfolioActive && "iconActive"} ${styles.txt_center} ${styles.hover_navlink}`}>
                <PortfolioIcon hovered="hovered" />
                Portfolio
              </div>
            </NavLink>
          </li>
          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/found-properties'
              activeClassName={styles.activeLink}
              className={propertiesActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center svg-hover txt-dark   txt-16 ${propertiesActive && "iconActive"} ${styles.txt_center} ${styles.hover_navlink}`}>
                <PropertiesIcon hovered="hovered" />
                Properties
              </div>
            </NavLink>
          </li>

          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/resident-&-lease-management'
              activeClassName={styles.activeLink}
              className={residenLeaseActive && styles.bg_green}
            >
              <div className={`d-flex  gap-2 align-items-center svg-hover txt-dark txt-16 ${residenLeaseActive && "iconActive"} ${styles.txt_center} ${styles.hover_navlink}`}>
                <ResidentIcon hovered="hovered" />
                Residents & Leases
              </div>
            </NavLink>
          </li>
          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/dnt-have-payment-setup'
              activeClassName={styles.activeLink}
              className={paymentActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center  svg-hover txt-dark txt-16  ${paymentActive && "iconActive"} ${styles.txt_center} ${styles.hover_navlink}`}>
                <PaymentIcons hovered="hovered" />
                Payments                      </div>
            </NavLink>
          </li>
          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/add-expenses'
              activeClassName={styles.activeLink}
              className={expensesActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center  svg-hover txt-dark txt-16 ${expensesActive && "iconActive"} ${styles.txt_center} ${styles.hover_navlink}`}>
                <ExpensisIcon hovered="hovered" />
                Expenses  </div>
            </NavLink>
          </li>
          <li className={styles.links}>
            <NavLink
              to='/kulfy-housing/report'
              activeClassName={styles.activeLink}
              className={reportActive && styles.bg_green}
            >
              <div className={`d-flex gap-2 align-items-center  svg-hover txt-dark ${reportActive && "iconActive"}  ${styles.txt_center} ${styles.hover_navlink}`}>
                <ReportsIcons hovered="hovered" />
                Reports
              </div>
            </NavLink>
          </li>
        </div>
      </div>
      <div>
       <div className='bkg-dark p-2 py-3  border-radius rounded-pill d-flex justify-content-center align-items-center'>
     <p className='fw-semibold text-light py-0 my-0 txt-14'>Powered by <span className='txt-Primary'> Kulfi Housing</span></p>
       </div>
      </div>
    </div>              
  )
}

export default Sidebar;


