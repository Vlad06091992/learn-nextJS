// template.tsx → оболочка, которая создаётся заново при каждом переходе.

export default function AboutTemplate({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ border: "1px solid pink" }}>
            template для about
            {children}
        </div>

    );
}
