

import Accordion from 'react-bootstrap/Accordion';
import  "./Accordion.css"

function CustomAccordion({description}) {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='acc-body'>ProductDescription </Accordion.Header>
        <Accordion.Body >
          {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAccordion;