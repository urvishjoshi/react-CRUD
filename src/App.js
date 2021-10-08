import ItemsContainer from './components/ItemsContainer'
import { Container } from 'react-bootstrap'

const App = () => { 
    return (
    <>
        <Container className="col-6 mx-auto">
        
            <div className='row mt-3'>
                <div className="col text-center">
                    <h2>Items list</h2>
                </div>
            </div>
            
            <ItemsContainer/>
        
        </Container>
    </>
    ); 
}
    
export default App;
