import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

export default function Packages(props) {

    return (
        <Container>
            <Container className="packages">
                <Container className="packagesHeader">
                    <h1>Our Packages</h1>
                    <ListGroup>
                        {props.packages.map((eachPackage, i) => <ListGroup.Item key={i}>{eachPackage}</ListGroup.Item>)}
                    </ListGroup>
                </Container>
            </Container>
        </Container>
    )
}