// import React from 'react'

// import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';

// export default function Form({ handleSubmit, handleChange }) {

//   return (
//     <div className="item">
//       <Card interactive={true}>
//         <h1>Add Item</h1>
//         <form onSubmit={handleSubmit} >
//           <FormGroup
//             onChange={handleChange}
//             label="To Do Item"
//             labelFor="text-input"
//             labelInfo="(required)">
//             <InputGroup id="text-input" placeholder="Item Details" />
//           </FormGroup>
//           <FormGroup
//             onChange={handleChange}
//             label="Assigned To"
//             labelFor="text-input"
//             labelInfo="(required)">
//             <InputGroup id="text-input" placeholder="Assignee Name" />
//           </FormGroup>
//           <lable>Difficulty</lable>
//           <input
//             onChange={handleChange}
//             defaultValue={1}
//             type="range"
//             min={1}
//             max={5}
//             name="difficulty"
//           />
//           <Button className="bp3-intent-primary">Add Item</Button>
//         </form>
//       </Card>
//     </div>
//   )
// }

import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';

export default function Form({ handleSubmit, handleChange }) {
  return (
    <Card className="mainItem">
      <h3>Add Item</h3>
      <br></br>
          <br></br>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label>To Do Item</label>
          <InputGroup
            onChange={handleChange}
            name="text"
            id="text-input"
            placeholder="Item Details"
          />
          <br></br>
          <br></br>
          <label>Assigned To</label>
          <InputGroup
            onChange={handleChange}
            name="assignee"
            id="text-input"
            placeholder="Assignee Name"
          />
          <br></br>
          <br></br>
          <lable>Difficulty</lable>
          <input
            onChange={handleChange}
            defaultValue={1}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />

          <Button type="submit">Add Item</Button>
        </FormGroup>
      </form>
      <form>

        <label></label>
      </form>
    </Card>
  );
}