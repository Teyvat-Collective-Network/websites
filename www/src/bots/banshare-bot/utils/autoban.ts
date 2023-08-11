const thresholds = { all: 0, med: 1, crit: 2, none: 3 } as Record<string, number>;
const severities = { p0: 2, p1: 1, p2: 0 } as Record<string, number>;

export default function (threshold: string, severity: string) {
    return (thresholds[threshold] ?? Infinity) <= (severities[severity] ?? -Infinity);
}
