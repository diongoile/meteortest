import React from "react";
import { Container } from "@mantine/core";
import { AppShell, Header } from "@mantine/core";
import { DoubleNavbar } from "./components/Navbar";
import Clients from "./components/Clients";

export const App = () => {
  return (
    <AppShell
      padding="md"
      navbar={<DoubleNavbar />}
      // navbar={
      //   <Navbar width={{ base: 300 }} height={500} p="xs">
      //     {/* Navbar content */}
      //   </Navbar>
      // }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Clients />
      </Container>
    </AppShell>
  );
};
