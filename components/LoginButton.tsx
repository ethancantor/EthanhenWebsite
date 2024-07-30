import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function LoginButton() {
	const { data: session, status } = useSession();

	if(status === 'loading') return ''

	console.log(session);

	if (session) {
		return (
			<>
				Signed in as {session.user?.name} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn('credentials', {callbackUrl: '/'})}>Sign in</button>
		</>
	)

}
