import React from "react";
import { Table, Container } from "react-bootstrap";


/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class PreCaution extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <br></br>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th colSpan="2">
                <center>
                  <strong>DO's and DON'Ts</strong>
                </center>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ✔️ <strong>Do</strong>
              </td>
              <td>
                Wash your hands regularly for 20 seconds, with soap and water or
                alcohol-based hand rub ✋ 🧼 🚰
              </td>
            </tr>
            <tr>
              <td>
                ✔️ <strong>Do</strong>
              </td>
              <td>
                Cover your nose and mouth with a disposable tissue or flexed
                elbow when you cough or sneeze 🤧 👃 💪
              </td>
            </tr>
            <tr>
              <td>
                ✔️ <strong>Do</strong>
              </td>
              <td>
                Avoid close contact (1 meter or 3 feet) with people who are
                unwell 🙏 😷 🚶‍
              </td>
            </tr>
            <tr>
              <td>
                ✔️ <strong>Do</strong>
              </td>
              <td>
                Stay home and self-isolate from others in the household if you
                feel unwell 🏠 👨 💉
              </td>
            </tr>
            <tr>
              <td>
                ❌ <strong>Don't</strong>
              </td>
              <td>
                Touch your eyes, nose, or mouth if your hands are not clean 👃 👁️ 🤭
              </td>
            </tr>
          </tbody>
        </Table>
        <br></br>
      </Container>
    );
  }
}
