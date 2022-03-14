export const calculateChange = (lineChange: string[]) => {
    let [xStart, yStart] = lineChange[0].split(',').map(value => Number(value));
    let [xEnd, yEnd] = lineChange[1].split(',').map(value => Number(value));

    const change = {
        x: xEnd - xStart,
        y: yEnd - yStart,
    }

    const xChanges = [];
    if (xEnd - xStart !== 0 || xStart - xEnd !== 0) {
        if (change.x > 0) {
            for (let index = 0; index <= change.x; index++) {
                xChanges.push([xStart++, yStart])
            }
        }
        else {
            for (let index = 0; index <= Math.abs(change.x); index++) {
                xChanges.push([xEnd++, yStart])
            }
        }
    }

    const yChanges = [];
    if (yEnd - yStart !== 0 || yStart - yEnd !== 0) {
        if (change.y > 0) {
            for (let index = 0; index <= change.y; index++) {
                yChanges.push([xStart, yStart++])
            }
        }
        else {
            for (let index = 0; index <= Math.abs(change.y); index++) {
                yChanges.push([xStart, yEnd++])
            }
        }
    }

    if (xChanges.length > 0) {
        return xChanges;
    }
    else if (yChanges.length > 0) {
        return yChanges;
    }
}

export const calculateDiagonalLineChange = (lineChange: string[]) => {
    let [xStart, yStart] = lineChange[0].split(',').map(value => Number(value));
    let [xEnd, yEnd] = lineChange[1].split(',').map(value => Number(value));

    const change = {
        x: xEnd - xStart,
        y: yEnd - yStart,
    }

    const changes = [];
    if (change.x > 0 && change.y > 0) {
        for (let index = 0; index <= change.x; index++) {
            changes.push([xStart++, yStart++])
        }
    }
    else if (change.x < 0 && change.y < 0) {
        for (let index = 0; index <= Math.abs(change.x); index++) {
            changes.push([xEnd++, yEnd++])
        }
    }
    else if(change.x < 0 && change.y > 0) {
        for (let index = 0; index <= Math.abs(change.x); index++) {
            changes.push([yEnd--, yStart++])
        }
    }
    else if(change.x > 0 && change.y < 0) {
        for (let index = 0; index <= Math.abs(change.x); index++) {
            changes.push([xStart++, yStart--])
        }
    }

    return changes;
}
