type ContentSectionProps = {
    title: string;
    subtitle?: string;
    id: string;
    children?: JSX.Element | JSX.Element[];
};

export default function ContentSection(props: ContentSectionProps) {
    return (
        <div id={props.id} className="mt-8">
            <h2>{props.title}</h2>
            <div className="subtitle">{props.subtitle}</div>
            {props.children}
        </div>
    );
}
