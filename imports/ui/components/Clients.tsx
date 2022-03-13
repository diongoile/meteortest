import React from "react";
import {
  Table,
  Paper,
  TextInput,
  Divider,
  Grid,
  MultiSelect,
} from "@mantine/core";

const elements = [
  { order: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { order: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { order: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { order: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { order: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const internalCompanies = [
  { value: "tier1", label: "tier1 Technical Ltd" },
  { value: "tier2", label: "tier2 Technical Ltd" },
];

function Clients() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.order}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td>tier2</td>
    </tr>
  ));

  return (
    <Paper shadow="sm" p="lg" withBorder>
      <Grid>
        <Grid.Col span={3}>
          <TextInput placeholder="Client" label="Client" />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput placeholder="Ticket number" label="Ticket number" />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput placeholder="Ticket number" label="Ticket number" />
        </Grid.Col>
        <Grid.Col span={3}>
          <MultiSelect
            data={internalCompanies}
            label="Internal Company"
            placeholder="Select company"
          />
        </Grid.Col>
      </Grid>
      <Divider my="sm" />
      <Table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Order Number</th>
            <th>Ticket Number</th>
            <th>Internal company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default Clients;
