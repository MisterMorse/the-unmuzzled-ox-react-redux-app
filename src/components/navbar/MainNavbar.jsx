import {DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown} from "reactstrap";

function MainNavbar() {
    return (
        <Navbar expand={'md'}>
            <NavbarBrand href='/'>Lovelady Baptist Church</NavbarBrand>
            <Nav navbar className={'text-start'}>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        About
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Our Vision</DropdownItem>
                        <DropdownItem>What We Believe</DropdownItem>
                        <DropdownItem>Planning Your Visit</DropdownItem>
                        <DropdownItem>Service Times</DropdownItem>
                        <DropdownItem>Leadership</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Connect
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Prayer Requests</DropdownItem>
                        <DropdownItem>Watch Online</DropdownItem>
                        <DropdownItem>Contact Us</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Resources
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Daily Journey</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Events
                    </DropdownToggle>
                    <DropdownMenu right>
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
                    <DropdownMenu right>
                        <DropdownItem>Donate</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar
