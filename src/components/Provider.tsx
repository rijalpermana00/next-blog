import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}
	
	return (
		<ThemeProvider enableSystem={false} enableColorScheme={false} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default Providers