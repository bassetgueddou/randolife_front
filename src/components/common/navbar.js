import React, { useState } from "react";
import { InputGroupAddon } from 'reactstrap';
import {
    Navbar,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
} from "reactstrap";
import { FaSearch, FaUser, FaSignInAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">RandoLife</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/activities">Activités</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/explore">Explorer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">À propos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FaSearch />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" placeholder="Recherche" />
                            </InputGroup>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/login">
                                <FaUser />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signup">
                                <FaSignInAlt />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;