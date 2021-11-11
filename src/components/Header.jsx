import styled from "styled-components";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Container = styled.div`
display: flex; 
flex-direction: column;
`;
const Head = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;
align-items:center;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`;

// const SearchBox = styled.div`
// display: flex;
// flex-ditection: row;
// padding: 10px 10px;
// background-color: white;
// border-radius: 6px;
// margin-left:20px;
// width:50%;
// background-color: white;
// align-items: center;
// `;

// const SearchInput = styled.input`
//  color:black;
//  font-size:16px;
//  font-weight:bold;
//  border:none;
//  outline:none;
//  margin-left:15px;
// `;


function App() {
    return <Container>
       <Head>
          <AppName><div >React Movie App</div>
             </AppName>
             {/* <SearchBox>
              
             <SearchInput placeholder="Search Movie" />  
             </SearchBox> */}
             </Head>
            
 
    </Container>
 
  
 
    }
 
 
 
 
 export default App;