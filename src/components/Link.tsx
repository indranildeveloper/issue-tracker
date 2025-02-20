import { FC } from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";
import { LinkProps } from "@/interfaces/LinkProps";

const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
