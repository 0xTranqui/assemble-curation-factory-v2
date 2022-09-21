export type CurationComponentProps = {

    curationText?: string
}

export function CurationComponent({ curationText }: CurationComponentProps ) {
    return (
        <div>
            {"Whats up Im a curation component" + curationText}
        </div>
    )
}