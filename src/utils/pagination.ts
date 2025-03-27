export type PageType = {
    type: 'current' | 'default' | 'divider',
    pageNumber?: number,
};

export function getPagesGroups(pagesCount: number, currentPage: number, siblingsCount: number) {
    const pages = getPages(pagesCount, currentPage, siblingsCount);
    return transformPages(pages);
}

function getPages(pagesCount: number, currentPage: number, siblingsCount: number): PageType[] {
    const pages: PageType[] = [];

    for (let i = 0; i < pagesCount; i++) {
        const currentPageI = currentPage - 1;

        if (i === currentPageI) {
            pages.push({type: "current", pageNumber: i + 1});
            continue;
        }

        /**
         * First and last page must be visible
         */
        if (i === 0 || i === pagesCount - 1) {
            pages.push({type: "default", pageNumber: i + 1});
            continue;
        }

        /**
         * Siblings of the current must be visible
         */
        if (i > currentPageI + siblingsCount || i < currentPageI - siblingsCount) {
            pages.push({type: "divider"});
            continue;
        }

        pages.push({type: "default", pageNumber: i + 1});
    }

    return pages;
}

function transformPages(pages: PageType[]) {
    const groups: PageType[][] = [];
    let currentGroup = [];

    for (const item of pages) {
        if (item.type === "divider") {
            if (currentGroup.length > 0) {
                groups.push(currentGroup);
                currentGroup = [];
            }
        } else {
            currentGroup.push(item);
        }
    }

    if (currentGroup.length > 0) {
        groups.push(currentGroup);
    }

    return groups;
}