import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";

export default function LoginButton() {
	const { data: session, status } = useSession();

	if(status === 'loading') return ''

	if (session) {
		return (
			<>
				Signed in as {session.user?.name} <br />
				<Image src={session.user?.image?.toString() || ''}  width={50} height={50} alt='discord' className="rounded-full"/>
				<Button onClick={() => signOut()}>Sign out</Button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<Button onClick={() => signIn()}>Sign in</Button>
		</>
	)

}
