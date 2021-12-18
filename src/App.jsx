import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Persons from "../components/Persons";

const ALL_PERSONS = gql`
  query getAllPersons{
    allPersons {
      id
      name
      phone
      address {
        city
        street
      }
    }
  }
`;

function App() {
  const { data, error, loading: isLoading } = useQuery(ALL_PERSONS);

  if (error) return <span style={{ color: "red" }}>{error}</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>GraphQL + React!</p>
            {data && <Persons persons={data.allPersons} />}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
