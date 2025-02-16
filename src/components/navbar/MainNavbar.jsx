import {DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

function MainNavbar() {
    return (
        <Navbar expand={"md"}>
            <NavbarBrand>Lovelady Baptist Church</NavbarBrand>
            <Nav navbar className={"text-start"}>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        About
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Our Vision</DropdownItem>
                        <DropdownItem>What We Believe</DropdownItem>
                        <DropdownItem>Planning Your Visit</DropdownItem>
                        <DropdownItem>Service Times</DropdownItem>
                        <DropdownItem tag={ Link } to={ "/staff" }>Leadership</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Connect
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Prayer Requests</DropdownItem>
                        <DropdownItem>Watch Online</DropdownItem>
                        <DropdownItem>Contact Us</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Resources
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Daily Journey</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Events
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Men&#39;s Activities</DropdownItem>
                        <DropdownItem>Women&#39;s Activities</DropdownItem>
                        <DropdownItem>Senior Adult Activities</DropdownItem>
                        <DropdownItem>Mimi Jan&#39;s Bible Drive</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Give
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Donate</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar
