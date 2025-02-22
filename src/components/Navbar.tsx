"use client";

import { FC } from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { Container, Flex } from "@radix-ui/themes";
import AuthStatus from "./AuthStatus";
import NavLinks from "./NavLinks";

const Navbar: FC = () => {
  return (
    <nav className="mb-5 border-b px-5 py-6">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks />
          </Flex>

          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
