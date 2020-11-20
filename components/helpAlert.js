import React from 'react';
import { Alert } from 'reactstrap';

{/* Sprint backlog # 1 ID-003 */}

const HelpAlert = (props) => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Sistema inteligente IoT</h4>
        <p>
          En caso de necesitar ayuda favor de avisar a su supervisior.
        </p>
        <hr />
        <p className="mb-0">
          Para realizar tareas de administrador, dirigase a la opcion del menu ADMIN.
        </p>
      </Alert>
    </div>
  );
};

export default HelpAlert;
