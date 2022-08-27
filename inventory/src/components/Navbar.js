import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg p-4'>
        <div className='container-fluid'>
          <a href='/' className=' text-decoration-none'>
            <div className='navbar-brand text-center'>
              Inventory Application
            </div>
          </a>
        </div>
        <div>
          <a href='/upload/' className=' text-decoration-none'>
            <div class='navbar-brand text-center'>Upload Files</div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
