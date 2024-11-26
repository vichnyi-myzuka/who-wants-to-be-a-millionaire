import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/styles/global.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Who Wants to Be a Millionaire?",
  description:
    "Who Wants to Be a Millionaire? is an international television game show franchise of British origin, created by David Briggs, Mike Whitehill and Steven Knight. In its format, currently owned and licensed by Sony Pictures Television, contestants tackle a series of multiple-choice questions to win large cash prizes in a format that twists on many game show genre conventions – only one contestant plays at a time, similar to radio quizzes; contestants are given the question before deciding whether to answer, and have no time limit to answer questions; and the amount offered increases as they tackle questions that become increasingly difficult.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
