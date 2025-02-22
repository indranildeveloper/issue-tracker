import { FC } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Box, DropdownMenu, IconButton, Avatar, Text } from "@radix-ui/themes";

const AuthStatus: FC = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Log In
      </Link>
    );
  }

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton radius="full">
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              radius="full"
              className="cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default AuthStatus;
