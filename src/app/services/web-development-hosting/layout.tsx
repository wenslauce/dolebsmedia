import { Metadata } from 'next';
import { ReactNode } from 'react';
import { metadata as pageMetadata } from './metadata';

export const metadata: Metadata = {
  ...pageMetadata,
};

export default function WebDevelopmentHostingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
