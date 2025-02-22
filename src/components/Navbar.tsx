"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { navLinks } from "@/constants/navLinks";
import { Box, Container, Flex } from "@radix-ui/themes";

const Navbar: FC = () => {
  const currentPath = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, data: session } = useSession();

  return (
    <nav className="mb-5 border-b px-5 py-6">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "text-zinc-900": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "transition-colors hover:text-zinc-800": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>

          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Log Out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Log In</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
