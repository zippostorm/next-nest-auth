import { Body, Heading, Link, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface ConfirmationTemplateProps {
  domain: string;
  token: string;
}

export function ConfirmationTemplate({
  domain,
  token,
}: ConfirmationTemplateProps) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  return (
    <Html>
      <Body>
        <Heading>Email Confirmation</Heading>
        <Text>
          Hello! Please click the link below to confirm your email address.
        </Text>
        <Link href={confirmLink}>Confirm Email</Link>
        <Text>
          This link will expire in 1 hour. If you did not request this, please
          ignore this email.
        </Text>
        <Text>Thanks for using our service!</Text>
      </Body>
    </Html>
  );
}
