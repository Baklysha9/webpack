
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods | null, additional: string[]): string {
    return [
        cls,
        ...additional,
        mods ? Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className): []

    ]
        .join(' ')
}