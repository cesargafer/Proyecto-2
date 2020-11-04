import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
//Sprint backlog # 2 ID-003


const JumboTronReact = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Proyectos de Mejora!</h1>
        <p className="lead">Evaluación de Mock ups</p>
        <hr className="my-2" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <p className="lead">
          <Button color="primary">Activar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboTronReact;
