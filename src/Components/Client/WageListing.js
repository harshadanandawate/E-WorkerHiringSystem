import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (<div>
    <br/>
    <h5 align="right"><a href="http://localhost:3000/placerequirement">Proceed to place Request</a></h5>
    <h3 align="center">Skilled Workers</h3>
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>SkillSet</th>
          <th>Wages(/day/worker)</th>
          <th>Available Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Plumber</td>
          <td>600</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Carpenter</td>
          <td>1100</td>
          <td>18</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>abc</td>
          <td>900</td>
          <td>15</td>
        </tr>
      </tbody>
      </Table>
      <br/>

      <h3 align="center">Unskilled Workers</h3>
      <Table dark margin="20px">
      <thead>
        <tr>
          <th>#</th>
          <th>Wages(/day/workers)</th>
          <th>Available Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Construction Workers</td>
          <td>900</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cleaners</td>
          <td>600</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Example;