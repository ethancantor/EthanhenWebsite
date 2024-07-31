import { signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyLink from "./MyLink";

export default function LoginButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>				
				<div className="group w-fit" onClick={() => signOut()}>
					<Image src={session.user?.image?.toString() || ''}  width={50} height={50} alt='discord' className="rounded-full cursor-pointer" />
					<div className="absolute top-16 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all cursor-pointer">
						Sign Out
					</div>
				</div>
			</>
		)
	}
	return (
		<MyLink href={'signin'}>Sign in</MyLink>
	)

}
