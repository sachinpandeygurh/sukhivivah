import React, { } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faUser, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="position-absolute">
            <Navbar expand="md" className="position-fixed w-100" style={{ zIndex: 999, backgroundImage: "radial-gradient( circle farthest-corner at -2% 1.4%, #fff 0%, #ff007f 100.7% )" }}>
                <NavbarBrand className='col-md-3 col-2' href="/">
                    <img src={require('../img/logo.gif')} alt="Logo" width={120} />
                </NavbarBrand>
                <div className='col-md-3 row col-10     justify-content-end'>
                    <NavbarText className='col-md-5 col-5 d-flex flex-column align-items-center justify-content-center' >
                        <FontAwesomeIcon icon={faTabletScreenButton} />
                        <span> Dowanload app</span>
                    </NavbarText>
                    <NavbarText className='col-md-3 col-2 d-flex flex-column align-items-center justify-content-center' >
                        <FontAwesomeIcon icon={faHeadset} />
                        <span> Help</span>
                    </NavbarText>
                    <NavbarText className='col-md-4 col-3 d-flex flex-column align-items-center justify-content-center' >
                        <FontAwesomeIcon icon={faUser} />
                        <span> login</span>
                    </NavbarText>
                </div>

                {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}
            </Navbar>
        </div>
    );
};

export default Header;
