import React,{Component} from 'react';
import{Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, Breadcrumb, Spinner, Tabs, Tab, Table, ProgressBar, Pagination, Popover, OverlayTrigger, Collapse}from "react-bootstrap";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      status : false
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(){
    this.setState((state,props)=>{
      return{status:!state.status};
    })
  }

  render(){
    const popover=(
      <Popover id="popover-basic">
        <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </Popover.Content>
      </Popover>
    )
    return(
      <div>
        <Container className="mw-100 px-0">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Berita</Nav.Link>
                <Nav.Link href="#">Live Scores</Nav.Link>
                <NavDropdown title="Piala" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Liga Primer Inggris</NavDropdown.Item>
                  <NavDropdown.Item href="#">Serie A</NavDropdown.Item>
                  <NavDropdown.Item href="#">Divisi Primera</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bundesliga</NavDropdown.Item>
                  <NavDropdown.Item href="#">Liga 1 Indonesia</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Transfer Pemain</Nav.Link>
                <Nav.Link href="#">Tim</Nav.Link>
              </Nav>
              <Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="m-2"/>
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
          <Row>
            <Col md={8}></Col>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md={10}>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
            <Col className="text-center">
              <Spinner animation="border" variant="success"/>
            </Col>
          </Row>
          <Tabs defaultActiveKey="SemuaTransfer">
            <Tab eventKey="SemuaTransfer" title="Semua Transfer">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCHESTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td>
                      <ProgressBar animated now={85} label="85%"/>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td>
                      <ProgressBar animated now={55} label="55%"/>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td>
                      <ProgressBar animated now={95} label="95%"/>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETERSBRUG</td>
                    <td>
                      <ProgressBar animated now={100} label="100%"/>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PALACE</td>
                    <td>
                      <ProgressBar animated now={50} label="50%"/>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PLAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td>
                      <ProgressBar animated now={100} label="100%"/>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="LigaPrimerInggris" title="Liga Primer Inggris">
            </Tab>
            <Tab eventKey="SerieA" title="Serie A">
            </Tab>
            <Tab eventKey="DivisiPrimera" title="Divisi Primera">
            </Tab>
            <Tab eventKey="Bundesliga" title="Bundesliga">
            </Tab>
          </Tabs>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <Row>
          <Col md="1">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <Button type="primary" onClick={this.handleChange}>Versi Website</Button>
            <Collapse in={this.state.status}>
              <p>Akses Sport V1.0</p>
            </Collapse>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
