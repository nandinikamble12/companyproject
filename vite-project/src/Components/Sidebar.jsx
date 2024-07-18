import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column vh-100  bg-light" style={{ width: '300px' }}>
      <div className="p-3">
      
        <ul className="nav flex-column">
          <li className="nav-item" style={{color:"black"}}>
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-tachometer-alt me-2"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-credit-card me-2"></i>
              Card
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-award me-2"></i>
              Badges
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-buttons me-2"></i>
              Buttons
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-th-large me-2"></i>
              Layout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}}>
              <i className="fas fa-list-ol me-2"></i>
              Pagination
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"grey"}}>
              <i className="fas fa-bell me-2"></i>
              Alert
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"black"}} >
              <i className="fas fa-comment-dots me-2"></i>
              Popover
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
