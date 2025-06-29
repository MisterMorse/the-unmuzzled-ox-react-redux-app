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
                        <DropdownItem tag={ Link} to={'/wwb'}>What We Believe</DropdownItem>
                        <DropdownItem tag={Link} to={'/st'}>Service Times</DropdownItem>
                        <DropdownItem tag={ Link } to={ "/staff" }>Leadership</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Connect
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to={'/cc'}>Contact Us</DropdownItem>
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
                        <DropdownItem tag={Link} to={ '/events'}>Men&#39;s Activities</DropdownItem>
                        <DropdownItem tag={Link} to={'/women'}>Women&#39;s Activities</DropdownItem>
                        <DropdownItem tag={Link} to={'/senior'}>Senior Adult Activities</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Give
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to={'/dd'} >Donate</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar
