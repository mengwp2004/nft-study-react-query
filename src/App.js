import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';


const GET_LOCATIONS = gql`
query GetGravatars {
  gravatars(first: 5) {
    id
    owner
    displayName
    imageUrl
  }
}
`;

function GetGravatars() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.gravatars.map(({ id, owner, displayName, imageUrl }) => (
    <div key={id}>
      <b>owner:</b>
      <h3>{owner}</h3>
      <b>displayName:</b>
      <p>{displayName}</p>
      <b>imageUrl:</b>
      <p>{imageUrl}</p>
      <br />
      <br />
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>nft study gravators 🚀</h2>
      <br/>
      <GetGravatars />
    </div>
  );
}



export default App;
