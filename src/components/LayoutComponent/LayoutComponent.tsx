'use client'

export const LayoutComponent = ({
                             children,
                         }: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <main className="mx-auto max-w-screen-xl w-full px-4 my-auto pb-[80px] md:pb-0"
        >
            {children}
        </main>
    );
};

